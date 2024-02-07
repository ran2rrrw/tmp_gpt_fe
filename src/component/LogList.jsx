import { useState } from "react";
import moreImage from '../assets/three-dots.svg'
import archiveImage from '../assets/archive.svg'

const LogList = ()=>{
    const [logList, setLogList]=useState([
        {
            date:"240207",
            content:"내용"
        },
        {
            date:"240207",
            content:"내용2"
        },
        {
            date:"240207",
            content:"내용3"
        }

    ]);


    const [activeIndex, setActiveIndex]=useState(null);

    const handleClick=(index)=>{
        setActiveIndex(index === activeIndex ? null : index);
    }

    return(
        <div className="logList">
            {logList.map((log, index) =>(
                <p key={index} onClick={()=>handleClick(index)}>
                    {log.content} {activeIndex === index &&(<>
                        <img src={moreImage} alt="moreImage" />
                        <img src={archiveImage} alt="archiveImage" />
                    </>
                    )}
                </p> 
            ))}
        </div>
         
    )
}
export default LogList;