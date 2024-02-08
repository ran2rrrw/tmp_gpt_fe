import shareImg from '../assets/upload.svg';
import renameImg from '../assets/pencil.svg';
import deleteImg from '../assets/trash3.svg';

const ListMenu = ()=>{
    return(
        <>
            <li><img src={shareImg} alt="" />Share</li>
            <li><img src={renameImg} alt="" />Rename</li>
            <li><img src={deleteImg} alt="" />Delete chat</li>
        </>
    )
}
export default ListMenu;