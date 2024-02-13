import ChatInput from '../components/ChatInput';
import SideBar from '../components/SideBar';

const MainPage = () => {
  return (
    <>
      <SideBar></SideBar>
      <div className="chatSection">
        <div>로고 텍스트</div>
        <div>
          <div>1</div>
          <div>2</div>
          <div>3</div>
          <div>4</div>
        </div>
        <ChatInput />
      </div>
    </>
  );
};
export default MainPage;
