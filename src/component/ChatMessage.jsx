import { useState } from "react";

const ChatMessage = ()=>{

    const [messages, setMessages]=useState([
        {
            text:"메시지"
        },
        {
            text:"메시지2"
        },
        {
            text:"메시지3"
        }
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