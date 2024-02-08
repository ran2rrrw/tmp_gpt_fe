import newChatImg from '../assets/pencil-square.svg'
const NewChat = ()=>{

    return(
        <div className="newChatBlock">
            <div className="chatIcon">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-circle-fill" viewBox="0 0 16 16">
                    <circle cx="8" cy="8" r="8"/>
                </svg>
            </div>
            <div className="newChatText">
                New chat
            </div>
            <div className="newChatImg">
                <img src={newChatImg} alt="" />
            </div>
        </div>
    )
}
export default NewChat;