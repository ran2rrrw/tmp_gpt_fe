import axios from "axios";
import { useEffect, useState } from "react";
import UserOutlined from '@ant-design/icons';

const ChatMessage = (props)=>{

    const [messages, setMessages]=useState([])

    useEffect(()=>{
        axios.get('http://192.168.0.4:9191/tmpgpt/api/rooms/'+props.roomId+'/chat')
        .then(res=>{
            setMessages(res.data)
        })
        .catch(error=>{
            console.error('Error fetching data:', error);
        })
    },[props.roomId]);

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