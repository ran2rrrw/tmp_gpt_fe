import RoomList from './RoomList';
import NewChat from './NewChat';
import Profile from './Profile';

const SideBar = () => {
  return (
    <div className="sideBar">
      <NewChat />
      <RoomList />
      <Profile />
    </div>
  );
};
export default SideBar;
