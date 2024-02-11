import { useEffect, useState } from "react";
import { DashOutlined } from '@ant-design/icons';
import { Dropdown, message, Space, Menu } from 'antd';
import {useNavigate} from 'react-router-dom';
import axios from "axios";
import shareImg from '../assets/upload.svg';
import renameImg from '../assets/pencil.svg';
import deleteImg from '../assets/trash3.svg';

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
            console.log(res.data)
            setRoomList(res.data)
        })
    })

    const onClick = ({ key }) => {
        message.info(`Click on item ${key}`);
    };



    const menu = (
        <Menu onClick={onClick}>
          <Menu.Item key="1" icon={<img src={shareImg} alt="share Image" />} >
            Share
          </Menu.Item>
          <Menu.Item key="2" icon={<img src={renameImg} alt="rename Image" />} >
            Rename
          </Menu.Item>
          <Menu.Item key="2" icon={<img src={deleteImg} alt="delete Image" />} >
            Delete chat
          </Menu.Item>
        </Menu>
      )



    return(
        <div className="roomList">
            {roomList.map(room=>(
                <Dropdown
                overlay={menu}
                key={room.id}  
                >
                    <a onClick={(e)=>{e.preventDefault}}>
                    <Space className="roomTitle">
                    {room.title}
                    <DashOutlined />
                    </Space>
                    </a>
                </Dropdown>
            ))}
        </div>

         
    )
}
export default RoomList;
