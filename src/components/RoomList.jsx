import { useEffect, useState } from "react";
import { DashOutlined } from '@ant-design/icons';
import { Dropdown, Space, Menu, message} from 'antd';
import axios from "axios";
import shareImg from '../assets/upload.svg';
import renameImg from '../assets/pencil.svg';
import deleteImg from '../assets/trash3.svg';
import { useNavigate } from "react-router";

const RoomList = ()=>{
    
    const [roomList, setRoomList]=useState([]);

    useEffect(()=>{
        axios.get('http://192.168.0.4:9191/tmpgpt/api/rooms')
        .then(res=>{
            setRoomList(res.data)
        })
    }, []);

    const onClick = ({ key }) => {
        message.info(`Click on item ${key}`);
    };

    const navigate = useNavigate();
    const handleRoom=(id)=>{
        navigate('/chat/'+id)
    }

    const menu = (
        <Menu onClick={onClick}>
          <Menu.Item key="1" icon={<img src={shareImg} alt="share Image" />} >
            Share
          </Menu.Item>
          <Menu.Item key="2" icon={<img src={renameImg} alt="rename Image" />} >
            Rename
          </Menu.Item>
          <Menu.Item key="3" icon={<img src={deleteImg} alt="delete Image" />} >
            Delete chat
          </Menu.Item>
        </Menu>
      );



    return(
        <div className="roomList">
            {roomList.map(room=>(
                <div className="room" key={room.roomId} >
                    <Dropdown overlay={menu}>
                        <a onClick={(e)=>{e.preventDefault}}>
                        <Space className="roomTitle" onClick={()=>{handleRoom(room.roomId)}}>
                        {room.roomName}
                        <DashOutlined />
                        </Space>
                        </a>
                    </Dropdown>
                </div>
            ))}
        </div>     
    )
}
export default RoomList;
