import { useEffect, useState } from "react";
import submitImg from '../assets/arrow-up.svg'
import { Input } from 'antd';
import axios from "axios";
import { useNavigate } from "react-router-dom";
const { TextArea } = Input;

const ChatInput = (props)=>{
    const [inputText, setInputText]=useState('');
    const [currentRoomId, setCurrentRoomId]=useState('');
    const navigate = useNavigate();

    useEffect(()=>{
        try{
            axios.post('http://192.168.0.4:9191/tmpgpt/api/rooms/'+currentRoomId+'/chat',{
                msg:inputText,
                writer:"me",
                roomId:currentRoomId
            })
            setInputText('');
        }catch(error){
            console.error('Error adding data:', error);
        }
    },[currentRoomId])

    const submit =()=>{
        console.log('id: ' + props.roomId);
        if(props.roomId !== 0){
            console.log('hhhhhhhhh');
            setCurrentRoomId(props.roomId)
        }else{
            axios.post('http://192.168.0.4:9191/tmpgpt/api/rooms',{
                roomName:inputText
            });

            axios.get('http://192.168.0.4:9191/tmpgpt/api/rooms/last')
            .then(res=>{
                setCurrentRoomId(res.data)
            });
            navigate('/chat/'+currentRoomId)
        }
    }

    const buttonClick = (e)=>{
        e.preventDefault();
        console.log('button clicked');
        submit();
        
    }

    const pressEnter = (e) => {
        if (e.key === 'Enter' && !e.shiftKey) {
            e.preventDefault();
            submit();
        }
    }
    
    
    return(
        <div className="chatInput">
        <TextArea
            value={inputText}
            onChange={(e) => setInputText(e.target.value)}
            onKeyDown={pressEnter}
            placeholder="Message ChatGPT..."
            autoSize={{
            minRows: 2
        }}
      />
        <button className="submitButton" onClick={buttonClick}>
            <img src={submitImg} alt="" />
        </button>
        </div>

    )
}
export default ChatInput;