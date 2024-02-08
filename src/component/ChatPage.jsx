import ChatMessage from "./ChatMessage";
import ChatInput from "./ChatInput";
import SideBar from './SideBar';


const ChatPage = ()=>{
    
    return(
        <>
        <SideBar></SideBar>
        <div className="chatSection">
            <ChatMessage></ChatMessage>
            <ChatInput></ChatInput>
        </div>
        </>
    )
}
export default ChatPage;