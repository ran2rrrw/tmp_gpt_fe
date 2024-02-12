import ChatMessage from "../components/ChatMessage";
import ChatInput from "../components/ChatInput";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import SideBar from "../components/SideBar";

const ChatPage = ()=>{
    const [roomId, setRoomId]=useState('');
    const [messages, setMessages]=useState('');
    const [postData, setPostData]=useState('');
    const {id}=useParams();
    useEffect(()=>{
        console.log(id)
        setRoomId(id)
        axios.get('http://192.168.0.4:9191/tmpgpt/api/rooms/'+id+'/chat')
        .then(res=>{
            setMessages(res.data)
        })
        .catch(error=>{
            console.error('Error fetching data:', error);
        })
    }, [id]);

    const post = (newData) => {
        setPostData(newData)
        if(id === 0){
            axios.post('http://192.168.0.4:9191/tmpgpt/api/rooms',{
                roomName:postData
            });
            axios.get('http://192.168.0.4:9191/tmpgpt/api/rooms/last')
            .then(res=>{
                setRoomId(res.data)
            });
            navigate('/chat/'+roomId)
        }
        try{
            axios.post('http://192.168.0.4:9191/tmpgpt/api/rooms/'+currentRoomId+'/chat',{
                msg:postData,
                writer:"me",
                roomId:roomId
            })
        }catch(error){
            console.error('Error adding data:', error);
        }

    }

    return(
        <>
        <SideBar></SideBar>
        <div className="chatSection">
            <ChatMessage></ChatMessage>
            <ChatInput post={post}></ChatInput>
        </div>
        </>
    )
}
export default ChatPage;