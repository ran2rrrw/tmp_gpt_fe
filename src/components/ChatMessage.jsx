import UserOutlined from '@ant-design/icons';

const ChatMessage = (props) => {
  return (
    <div className="messages">
      {props.messages.map((message, index) => (
        <div className="message" key={index}>
          <div className="userName">
            <div className="userImg">
              <UserOutlined />
            </div>
            <div className="userText">{message.writer}</div>
          </div>
          <div className="msg">{message.msg}</div>
        </div>
      ))}
    </div>
  );
};
export default ChatMessage;
