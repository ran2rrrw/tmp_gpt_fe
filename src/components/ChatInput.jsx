import { useState } from 'react';
import submitImg from '../assets/arrow-up.svg';
import { Input } from 'antd';
const { TextArea } = Input;

const ChatInput = (props) => {
  const [inputText, setInputText] = useState('');

  const buttonClick = () => {
    console.log('button clicked');
    props.post(inputText);
    setInputText('');
  };

  const pressEnter = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      props.post(inputText);
      setInputText('');
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
