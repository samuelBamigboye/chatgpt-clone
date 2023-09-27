'use client'

import { collection, deleteDoc } from "firebase/firestore";
import { ChatBubbleLeftIcon, TrashIcon } from "@heroicons/react/24/solid"
import Link from "next/link"
import { useSession } from "next-auth/react";
import { usePathname, useRouter } from "next/navigation"
import { useState, useEffect } from "react";
import { useCollection } from "react-firebase-hooks/firestore";
import { db } from "../firebase";

type props = {
    id: String;
};
  
function ChatRow({ id }: props) {
    const pathname = usePathname();
    const router = useRouter();
    const { data: session } = useSession();
    const [active, setActive] = useState(false);

    const [messages] = useCollection(
        collection(db, 'users', session?.user?.email!, 'chats', id, 'messages')
    );
    
    useEffect(() => {
        if (!pathname) return;

        setActive(pathname.includes(id));
    }, [pathname]);

    const removeChat =async () => {
        await deleteDoc(doc(db, 'users', session?.user?.email!, 'chats', id))
        router.replace("/");
    }

    return <Link
        href={`/chat/${id}`}
        className={`chatRow justify-center ${active && "bg-gray-700/50"}`}>
        <ChatBubbleLeftIcon className="h-5 w-5" />
        <p className="flex-1 hidden md:inline-flex truncate">
            {messages?.docs[messages?.docs.length - 1]?.data().text || 'New Chat'}
        </p>
        <TrashIcon
            onClick={removeChat}
            className="h-5 w-5 text-gray-700 hover:text-red-700" />
        </Link>
}

export default ChatRow
