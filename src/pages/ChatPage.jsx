import ChatMessage from "../components/ChatMessage";
import ChatInput from "../components/ChatInput";
import { useEffect, useState } from "react";

const ChatPage = ()=>{
    const [roomId, setRoomId]=useState(0);

    useEffect(()=>{
        const url = window.location.pathname;
        const numberPattern = /\d+/g;
        const matches = url.match(numberPattern);
        const roomIds = [];
    
        if(matches){
            matches.forEach(match=>{
               roomIds.push(match) 
            })

        }
        setRoomId(roomIds.join(''))
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