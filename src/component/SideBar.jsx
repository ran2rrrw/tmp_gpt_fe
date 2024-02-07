import LogList from "./LogList";
import NewChat from "./NewChat"
import Profile from "./Profile";

const SideBar = ()=>{
    return(
        <div className="sideBar">
            <NewChat></NewChat>

            <LogList></LogList>

            <Profile></Profile>
        </div>

        
    )
}
export default SideBar;