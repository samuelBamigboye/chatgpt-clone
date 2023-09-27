import { PaperAirplaneIcon } from "@heroicons/react/24/solid";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { Session } from "inspector";
import { FormEvent, useState } from 'react';
import { db } from '../firebase'
import toast from "react-hot-toast";
import ModelSelection from "./ModelSelection";
import useSWR from 'swr';

type Props = {
    chatId: string;
};


function ChatInput({chatId}: Props) {
    const [prompt, setPrompt] = useState('');
    const { data: session } = useState();

    //useSWR to get model
    const { data: model } = useSWR('model', {
        fallbackData: 'text-davinci-003'
    });


    const sendMessage = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (!prompt) return;

        const input = prompt.trim();
        setPrompt("");

        const message: Message = {
            text: input,
            createdAt: serverTimestamp(),
            user: {
                _id: session?.user?.email,
                name: session?.user.name!,
                avatar: session?.user?.image! || `https://ui-avatars.com/api/?name=${session?.user?.name}`,
            }
        }

        await addDoc(
            collection(db, 'user', session?.user?.email!, 'chats', chatId, 'messages'),
            message
        );

        //Toast notification to say Loading!
        const notification = toast.loading('ChatGPT is thinking...');

        await fetch("/api/ashQuestion", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                prompt: input,
                chatId,
                model,
                session,
            }),
        }).then(() => {
            //Toast notification to say successful!
            toast.success("ChatGPT has responded!", {
                id: notification,
            });
        });
    };

  return (
    <div className="bg-gray-700/50 text-gray-400 rounded-lg text-sm">
          <form onSubmit={sendMessage} className="p-5 space-x-5 flex">
              <input
                  className="bg-transparent focus:outline-none flex-1 disable:cursor-not-allowed disabled:text-gray-300"
                  disabled={!session}
                  value={prompt}
                  onClick={(e) => setPrompt(e.target.value)}
                  type="text"
                  placeholder="Type your message here..."
              />

              <button
                  type="submit" 
                  disabled={!prompt || !Session}
                  className="bg-[#11A37F] hover:opacity-50 font-bod px-4 py-2 rounded disabled:bg-gray-300">
                  <PaperAirplaneIcon className="h-4 w-4 -rotate-45 " />
              </button>
          </form>
          <div className="md:hidden">
              <ModelSelection />
          </div>
    </div>
  )
}

export default ChatInput
