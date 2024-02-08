
import { Route, Routes } from 'react-router-dom';
import './App.css'
import MainPage from './component/MainPage';
import ChatPage from './component/ChatPage';
import SideBar from './component/SideBar';

const App=()=>{
  return(
    <>
      <SideBar></SideBar>
      <Routes>
        <Route path='/' Component={MainPage}/>
        <Route path='/chat/' Component={ChatPage}/>       
      </Routes>
    </>
  )
}
export default App;