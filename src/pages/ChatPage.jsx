import ChatMessage from "../components/ChatMessage";
import ChatInput from "../components/ChatInput";
import SideBar from '../components/SideBar';


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