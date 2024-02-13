import { useState } from 'react';
import submitImg from '../assets/arrow-up.svg';
import { Input } from 'antd';
import axios from 'axios';
import { useNavigate } from 'react-router';
const { TextArea } = Input;

//axios.defaults.baseURL = 'http://localhost:9191/tmpgpt/api/rooms';
axios.defaults.baseURL = 'http://192.168.0.148:9191/tmpgpt/api/rooms';


const ChatInput = (props) => {
  const [inputText, setInputText] = useState('');
  const navigate = useNavigate();

 const haveProps= async()=>{
  let id = 0;

  if (Object.keys(props).length === 0) {
    console.log(Object.keys(props).length);
    await axios.post('', {
      roomName: inputText
    });
    await axios.get('/last').then((res) => {
      id = res.data
    });
    await axios.post('/'+id+'/chat', {
      msg:inputText,
      writer:"me",
      roomId:id
    })
    navigate('/chat/' + id);
   }else{
    props.post(inputText);
    setInputText('');
   }
  }


  const buttonClick = () => {
    console.log('button clicked');
    haveProps();

  };

  const pressEnter = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      haveProps();
    }
  };

  return (
    <div className="chatInput">
      <TextArea
        value={inputText}
        onChange={(e) => setInputText(e.target.value)}
        onKeyDown={pressEnter}
        placeholder="Message ChatGPT..."
        autoSize={{
          minRows: 2,
        }}
      />
      <button className="submitButton" onClick={buttonClick}>
        <img src={submitImg} alt="" />
      </button>
    </div>
  );
};

export default ChatInput;
