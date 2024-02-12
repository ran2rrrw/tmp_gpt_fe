import ChatMessage from "../components/ChatMessage";
import ChatInput from "../components/ChatInput";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import SideBar from "../components/SideBar";

const ChatPage = ()=>{
    const [roomId, setRoomId]=useState('');
    const [messageUpdate, setMessageUpdate]=useState('');
    const handleUpdate=(v)=>{
        setMessageUpdate(v)
    }
    const {id}=useParams();
    useEffect(()=>{
        console.log(id)
        setRoomId(id)
    }, [id]);

    return(
        <>
        <SideBar></SideBar>
        <div className="chatSection">
            <ChatMessage roomId={roomId}></ChatMessage>
            <ChatInput roomId={roomId} update={handleUpdate}></ChatInput>
        </div>
        </>
    )
}
export default ChatPage;