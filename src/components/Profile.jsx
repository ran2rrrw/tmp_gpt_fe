import UserOutlined from '@ant-design/icons';

const Profile = () => {
  return (
    <div className="profileBlock">
      <div className="profileImg">
        <UserOutlined />
      </div>
      <div className="userName">계정명</div>
    </div>
  );
};
export default Profile;
