import { useEffect, useState } from 'react';
import { DashOutlined } from '@ant-design/icons';
import { Dropdown, Space, Menu, message, Modal } from 'antd';
import axios from 'axios';
import shareImg from '../assets/upload.svg';
import renameImg from '../assets/pencil.svg';
import deleteImg from '../assets/trash3.svg';
import { useNavigate } from 'react-router';
import Input from 'rc-input';

//axios.defaults.baseURL = 'http://localhost:9191/tmpgpt/api/rooms';
axios.defaults.baseURL = 'http://192.168.0.148:9191/tmpgpt/api/rooms';

const RoomList = () => {
  const [roomList, setRoomList] = useState([]);
  const [modalStates, setModalStates] = useState({});

  const showModal = (roomId) => {
    setModalStates({ ...modalStates, [roomId]: true });
  };
  
  const handleOk = (roomId) => {
    axios.delete('/' + roomId)
    .then(()=>{
      setRoomList(roomList.filter(room => room.roomId !== roomId));
      setModalStates({ ...modalStates, [roomId]: false });
    })
    .catch(error => {
      console.error('Error deleting room:', error);
    });
    navigate('/')
  };

  const handleCancel = (roomId) => {
    setModalStates({ ...modalStates, [roomId]: false });
  };

  useEffect(() => {
    axios.get().then((res) => {
      setRoomList(res.data);
      const initialModalStates = res.data.reduce((acc, room) => {
        acc[room.roomId] = false;
        return acc;
      }, {});
      setModalStates(initialModalStates);
    });
  }, []);

  const onClick = ({ key }) => {
    message.info(`Click on item ${key}`);
  };

  const navigate = useNavigate();
  const handleRoom = (id) => {
    navigate('/chat/' + id);
  };

  const handleRename = (roomId, newName) => {
    // 서버로 새로운 방 이름을 전송하여 업데이트
    axios.patch(`/rooms/${roomId}`, { roomName: newName })
      .then(() => {
        // 방 이름이 성공적으로 업데이트되면 해당 방의 이름을 새로운 이름으로 변경
        setRoomList(roomList.map(room => {
          if (room.roomId === roomId) {
            return { ...room, roomName: newName };
          }
          return room;
        }));
      })
      .catch(error => {
        console.error('Error updating room name:', error);
      });
  };

  // const menu = (
  //   <Menu onClick={onClick}>
  //     <Menu.Item key="1" icon={<img src={shareImg} alt="share Image" />}>
  //       Share
  //     </Menu.Item>
  //     <Menu.Item key="2" icon={<img src={renameImg} alt="rename Image" />}>
  //       Rename
  //     </Menu.Item>
  //     <Menu.Item
  //       key="3"
  //       icon={<img src={deleteImg} alt="delete Image" />}
  //       onClick={showModal}
  //     >
  //       Delete chat
  //     </Menu.Item>
  //   </Menu>
  // );

  return (
    <div className="roomList">
      {roomList.map((room) => (
        <div className="room" key={room.roomId}>
          <Dropdown overlay={
                <Menu onClick={onClick}>
                <Menu.Item key="1" icon={<img src={shareImg} alt="share Image" />}>
                  Share
                </Menu.Item>
                <Menu.Item key="2" icon={<img src={renameImg} alt="rename Image" />}>
                  Rename
                </Menu.Item>
                <Menu.Item
                  key="3"
                  icon={<img src={deleteImg} alt="delete Image" />}
                  onClick={()=>{showModal(room.roomId)}}
                >
                  Delete chat
                </Menu.Item>
              </Menu>
          }>
            <a
              onClick={(e) => {
                e.preventDefault;
              }}
            >
              <Space
                className="roomTitle"
                onClick={() => {
                  handleRoom(room.roomId);
                }}
              >
               <EditableRoomName room={room} onRename={handleRename}></EditableRoomName>
                <DashOutlined />
              </Space>
            </a>
          </Dropdown>
          <Modal
            title="Delete Chat?"
            visible={modalStates[room.roomId]}
            onOk={()=>{handleOk(room.roomId)}}
            onCancel={()=>{handleCancel(room.roomId)}}
          >
            <p>This will delete {room.roomName}</p>
          </Modal>
        </div>
      ))}
    </div>
  );  
};

const EditableRoomName = ({ room, onRename }) => {
  const [editing, setEditing] = useState(false);
  const [newName, setNewName] = useState(room.roomName);

  const handleInputChange = (event) => {
    setNewName(event.target.value);
  };

  const handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      saveChanges();
    }
  };

  const saveChanges = () => {
    if (newName.trim() === '') {
      // 방 이름이 비어있으면 수정할 수 없음
      return;
    }
    setEditing(false);
    onRename(room.roomId, newName);
  };

  return (
    <>
      {editing ? (
        <Input
          value={newName}
          onChange={handleInputChange}
          onBlur={saveChanges}
          onKeyPress={handleKeyPress}
          autoFocus
        />
      ) : (
        <span
          onClick={() => setEditing(true)}
          style={{ cursor: 'pointer' }}
        >
          {room.roomName}
        </span>
      )}
    </>
  );
};

export default RoomList;
