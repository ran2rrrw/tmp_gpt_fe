import newChatImg from '../assets/pencil-square.svg'
import chatIcon from '../assets/ChatGPT.svg'

const NewChat = ()=>{

    return(
        <a className='newChatBlock'>
            <div className="chatIcon">
                <img src={chatIcon} alt="" />
            </div>
            <div className="newChatText">
                New chat
            </div>
            <div className="newChatImg">
                <img src={newChatImg} alt="" />
            </div>
        </a>
    )
}
export default NewChat;