import ChatInput from "./ChatInput";
import SideBar from "./SideBar";

const MainPage = ()=>{
    return(
        <>
        <SideBar></SideBar>
        <div className="chatSection">
                    <div>
            로고
            텍스트
        </div>
        <div>
            <div>1</div>
            <div>2</div>
            <div>3</div>
            <div>4</div>
        </div>
        <ChatInput></ChatInput>
        </div>
        </>
    )
}
export default MainPage;