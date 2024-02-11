import axios from "axios";
import { useState } from "react";

const ChatMessage = ()=>{

    const [messages, setMessages]=useState([
        axios.get('https://localhost:4000/posts')
        .then(res=>{
            setMessages(res.data.msg)
        })
    ])

    return(
        <div className="messages">
            {messages.map((message, index) => (
            <div key={index}>
                {message.text}
            </div>
            ))}
        </div>
    )
}
export default ChatMessage;