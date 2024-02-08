import { useState } from "react";
import submitImg from '../assets/arrow-up.svg'

const ChatInput = ()=>{

    const [inputText, setInputText]=useState('')

    return(
        <div className="chatInput">
            <textarea name="chatInput" id="" placeholder="Message ChatGPT...">
                {inputText}
            </textarea>
            <button>
                <img src={submitImg} alt="" />
            </button>
        </div>
    )
}
export default ChatInput;