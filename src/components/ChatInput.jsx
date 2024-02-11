import { useState } from "react";
import submitImg from '../assets/arrow-up.svg'
import { Input } from 'antd';
import axios from "axios";
const { TextArea } = Input;

const ChatInput = ()=>{
    const [inputText, setInputText]=useState('')

    const buttonClick = async (e)=>{
        e.preventDefault();
        try{

            const submit = await axios.post('http://localhost:4000/posts',{
                msg:inputText,
                writer:"me"
            })
            console.log(submit.data)
        }catch(error){
            console.error('Error adding data:', error);
        }
    }

    const pressEnter = async (e)=>{
        if(e.key === 'Enter'){
            try{

                const submit = await axios.post('http://localhost:4000/posts',{
                    msg:inputText,
                    writer:"me"
                })
                console.log(submit.data)
            }catch(error){
                console.error('Error adding data:', error);
            }
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