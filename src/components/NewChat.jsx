import newChatImg from '../assets/pencil-square.svg'
import chatIcon from '../assets/ChatGPT.svg'
import { Link } from 'react-router-dom';

const NewChat = ()=>{
    
    return(
        <Link to='/' className='newChatBlock'>
            <div className="chatIcon">
                <img src={chatIcon} alt="" />
            </div>
            <div className="newChatText">
                New chat
            </div>
            <div className="newChatImg">
                <img src={newChatImg} alt="" />
            </div>
        </Link>
    )
}
export default NewChat;