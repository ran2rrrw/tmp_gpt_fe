import ChatMessage from "../components/ChatMessage";
import ChatInput from "../components/ChatInput";

const ChatPage = ()=>{

    return(
        <>
        <div className="chatSection">
            <ChatMessage></ChatMessage>
            <ChatInput></ChatInput>
        </div>
        </>
    )
}
export default ChatPage;