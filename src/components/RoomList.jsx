import { useEffect, useState } from "react";
import { DashOutlined } from '@ant-design/icons';
import { Dropdown, Space, Menu, message} from 'antd';
import axios from "axios";
import shareImg from '../assets/upload.svg';
import renameImg from '../assets/pencil.svg';
import deleteImg from '../assets/trash3.svg';
import { useNavigate } from "react-router";

const RoomList = ()=>{
    
    const [roomList, setRoomList]=useState([
        {
            "id":1,
            "title":"testtitle",
            "views":100
        },
        {
            "id":22,
            "title":"testtitle22",
            "views":200
        }
    ]);

    useEffect(()=>{
        axios.get('http://localhost:4000/posts')
        .then(res=>{
            setRoomList(res.data)
        })
    }, []);

    const onClick = ({ key }) => {
        message.info(`Click on item ${key}`);
    };

    const navigate = useNavigate();
    const handleRoom=(id)=>{
        navigate('http://localhost:5173/chat/'+id)
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
                <div className="room" key={room.id} >
                    <Dropdown overlay={menu}>
                        <a onClick={(e)=>{e.preventDefault}}>
                        <Space className="roomTitle" onClick={()=>{handleRoom(room.id)}}>
                        {room.msg}
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
