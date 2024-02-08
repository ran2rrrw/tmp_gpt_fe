import { useEffect, useState } from "react";
import moreImage from '../assets/three-dots.svg';
import ListMenu from "./ListMenu";
import axios from "axios";

const LogList = ()=>{
    const [logList, setLogList]=useState([]);

    useEffect(()=>{
        axios.get('http://localhost:9191/tmpgpt/api/rooms')
        .then(res=>{
            console.log(res.data)
            setLogList(res.data)
        })
    })



    const [activeIndex, setActiveIndex]=useState(null);

    const handleClick=(index)=>{
        setActiveIndex(index === activeIndex ? null : index);
    }

    const [activeMoreIndex, setActiveMoreIndex]=useState(null);

    const handelMoreClick=(index, e)=>{
        e.stopPropagation();
        setActiveMoreIndex(index===activeMoreIndex? null:index);
    }


    return(
        <div className="logList">
            {logList.map((log) =>(
                <div key={log.roomId} onClick={()=>handleClick(log.roomId)}>
                    <span>{log.roomName}</span>
                    {activeIndex===log.roomId && <img src={moreImage} onClick={(e)=>handelMoreClick(log.roomId, e)}></img>}
                    {activeMoreIndex===log.roomId &&  <ul><ListMenu></ListMenu></ul>} 
                </div> 
            ))}
        </div>
         
    )
}
export default LogList;

