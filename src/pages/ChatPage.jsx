import ChatMessage from '../components/ChatMessage';
import ChatInput from '../components/ChatInput';
import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import SideBar from '../components/SideBar';
import axios from 'axios';

axios.defaults.baseURL = 'http://localhost:9191/tmpgpt/api/rooms';

const ChatPage = () => {
  const [roomId, setRoomId] = useState('');
  const [messages, setMessages] = useState([]);
  const [postData, setPostData] = useState('');
  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    setRoomId(id);
    axios
      .get('/' + id + '/chat')
      .then((res) => {
        setMessages(res.data);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }, [id]);

  const post = (newData) => {
    setPostData(newData);
    if (id === 0) {
      axios.post('', {
        roomName: postData,
      });
      axios.get('/last').then((res) => {
        setRoomId(res.data);
      });
      navigate('/chat/' + roomId);
    }
    try {
      axios.post('/' + roomId + '/chat', {
        msg: postData,
        writer: 'me',
        roomId: roomId,
      });
      axios.get().then((res) => {
        setMessages(res.data);
      });
    } catch (error) {
      console.error('Error adding data:', error);
    }
  };

  return (
    <>
      <SideBar />
      <div className="chatSection">
        <ChatMessage messages={messages} />
        <ChatInput post={post} />
      </div>
    </>
  );
};
export default ChatPage;
