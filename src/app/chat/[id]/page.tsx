import Chat from "../../../../components/Chat"
import ChatInput from "../../../../components/ChatInput"


function ChatPage() {
  return (
    <div className="flex flex-col h-screen overflow-hidden">
      <Chat chatId={id} />
      <ChatInput chatId={id} />
    </div>
  )
}

export default ChatPage
