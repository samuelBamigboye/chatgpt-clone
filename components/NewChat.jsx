'use client'
import { PlusIcon } from '@heroicons/react/24/solid'
import { addDoc, collection, serverTimestamp } from 'firebase/firestore'
import { useRouter } from 'next/navigation'
import { db } from '../firebase'

function NewChat() {
  const router = useRouter()
  const { data:session } = useRouter

  const createNewChat = async () => {
    const doc = await addDoc(collection(db, 'users', session?.user?.email, "chats"), {
      userId: session?.user?.email,
      createdAt: serverTimestamp()
    });

    router.push(`/chat/${doc.id}`)

  }
  return (
    <div className='border-gray-700 border rounded-lg px-5 py-3 text-sm flex items-center justify-start space-x-2 hover:bg-gray-700/70 cursor-pointer text-gray-300 transition-all duration-200 ease-out'>
        <PlusIcon className='h-8 w-8'/>
          <p>New Chat</p>
    </div>
  )
}

export default NewChat
