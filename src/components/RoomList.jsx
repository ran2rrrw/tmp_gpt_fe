import { useEffect, useRef, useState } from 'react';
import { DashOutlined } from '@ant-design/icons';
import { Dropdown, Space, Menu, Modal, Input } from 'antd';
import axios from 'axios';
import renameImg from '../assets/pencil.svg';
import deleteImg from '../assets/trash3.svg';
import { useNavigate } from 'react-router';

//axios.defaults.baseURL = 'http://localhost:9191/tmpgpt/api/rooms';
axios.defaults.baseURL = 'http://192.168.0.148:9191/tmpgpt/api/rooms';

const RoomList = () => {
  const [roomList, setRoomList] = useState([]);
  const [modalStates, setModalStates] = useState({});
  const [editing, setEditing] = useState({ id: 0, edit: false });
  const [newName, setNewName] = useState('');

  const showModal = (roomId) => {
    setModalStates({ ...modalStates, [roomId]: true });
  };

  const handleOk = (roomId) => {
    axios
      .delete('/' + roomId)
      .then(() => {
        setRoomList(roomList.filter((room) => room.roomId !== roomId));
        setModalStates({ ...modalStates, [roomId]: false });
      })
      .catch((error) => {
        console.error('Error deleting room:', error);
      });
    navigate('/');
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

  const navigate = useNavigate();
  const handleRoom = (id) => {
    navigate('/chat/' + id);
  };

  const handleRename = (roomId, newName) => {
    // 서버로 새로운 방 이름을 전송하여 업데이트
    axios
      .patch(`/rooms/${roomId}`, { roomName: newName })
      .then(() => {
        // 방 이름이 성공적으로 업데이트되면 해당 방의 이름을 새로운 이름으로 변경
        setRoomList(
          roomList.map((room) => {
            if (room.roomId === roomId) {
              return { ...room, roomName: newName };
            }
            return room;
          })
        );
      })
      .catch((error) => {
        console.error('Error updating room name:', error);
      });
  };

  return (
    <div className="roomList">
      {roomList.map((room) => (
        <div className="room" key={room.roomId}>
          <Dropdown
            overlay={
              <Menu>
                <Menu.Item
                  key={'rename'}
                  icon={<img src={renameImg} alt="rename Image" />}
                  onClick={() => {
                    setEditing({ id: room.roomId, edit: true });
                  }}
                >
                  Rename
                </Menu.Item>
                <Menu.Item
                  key={'delete'}
                  icon={<img src={deleteImg} alt="delete Image" />}
                  onClick={() => {
                    showModal(room.roomId);
                  }}
                >
                  Delete chat
                </Menu.Item>
              </Menu>
            }
          >
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
                {editing.edit && room.roomId === editing.id ? (
                  <Input
                    value={newName}
                    onInput={(e) => setNewName(e.target.value)}
                    onChange={(e) => setNewName(e.target.value)}
                    onBlur={() => {
                      if (newName.trim() === '') {
                        return;
                      }

                      setEditing({ id: room.roomId, edit: false });
                    }}
                    onPressEnter={async () => {
                      await axios.patch('/' + room.roomId, {
                        roomName: newName,
                      });
                      await axios.get().then((res) => {
                        setRoomList(res.data);
                      });
                      setEditing({ id: room.roomId, edit: false });
                    }}
                    autoFocus
                  />
                ) : (
                  <span
                    onClick={() => setEditing({ id: room.roomId, edit: false })}
                    style={{ cursor: 'pointer' }}
                  >
                    {room.roomName}
                  </span>
                )}
                <DashOutlined />
              </Space>
            </a>
          </Dropdown>
          <Modal
            title="Delete Chat?"
            visible={modalStates[room.roomId]}
            onOk={() => {
              handleOk(room.roomId);
            }}
            onCancel={() => {
              handleCancel(room.roomId);
            }}
          >
            <p>This will delete {room.roomName}</p>
          </Modal>
        </div>
      ))}
    </div>
  );
};

export default RoomList;
