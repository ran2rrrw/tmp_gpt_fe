import axios from "axios";
import { useState } from "react";
import UserOutlined from '@ant-design/icons';

const ChatMessage = (roomId)=>{

    const [messages, setMessages]=useState([
        axios.get(`https://localhost:4000/posts/${roomId}`)
        .then(res=>{
            setMessages(res.data)
        })
    ])

    return(
        <div className="messages">
            {messages.map((message, index) => (
            <div key={index}>
                <div className="userName">
                    <UserOutlined />
                    {message.writer}
                </div>
                <div className="msg">
                    {message.msg}
                </div>
            </div>
            ))}
        </div>
    )
}
export default ChatMessage;