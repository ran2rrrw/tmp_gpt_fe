import ChatMessage from '../components/ChatMessage';
import ChatInput from '../components/ChatInput';
import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import SideBar from '../components/SideBar';
import axios from 'axios';

//axios.defaults.baseURL = 'http://localhost:9191/tmpgpt/api/rooms';
axios.defaults.baseURL = 'http://192.168.0.148:9191/tmpgpt/api/rooms';

const ChatPage = () => {
  const [roomId, setRoomId] = useState('');
  const [messages, setMessages] = useState([]);
  const [updateSwitch, setUpdateSwitch] = useState(false);
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
  }, [id, updateSwitch]);

  const post = async (newData) => {
    try {
      await axios.post('/' + roomId + '/chat', {
        msg: newData,
        writer: 'me',
        roomId: roomId,
      });
      await axios.get().then((res) => {
        setMessages(res.data);
      });
    } catch (error) {
      console.error('Error adding data:', error);
    }
    setUpdateSwitch(!updateSwitch);
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
