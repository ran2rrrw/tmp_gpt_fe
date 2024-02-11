import ChatMessage from "../components/ChatMessage";
import ChatInput from "../components/ChatInput";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const ChatPage = ()=>{
    const [roomId, setRoomId]=useState(0);
    const {id}=useParams();
    useEffect(()=>{
        console.log(id)
        setRoomId(id)
    }, []);

    return(
        <>
        <div className="chatSection">
            <ChatMessage roomId={roomId}></ChatMessage>
            <ChatInput roomId={roomId}></ChatInput>
        </div>
        </>
    )
}
export default ChatPage;