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
            {logList.map((log, index) =>(
                <div key={index} onClick={()=>handleClick(index)}>
                    <span>{log.roomName}</span>
                    {activeIndex===index && <img src={moreImage} onClick={(e)=>handelMoreClick(index, e)}></img>}
                    {activeMoreIndex===index &&  <ul><ListMenu></ListMenu></ul>} 
                </div> 
            ))}
        </div>
         
    )
}
export default LogList;

