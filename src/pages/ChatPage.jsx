import ChatMessage from "../components/ChatMessage";
import ChatInput from "../components/ChatInput";
import { useEffect, useState } from "react";
import {handleRoom} from '../components/RoomList'
import axios from "axios";


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