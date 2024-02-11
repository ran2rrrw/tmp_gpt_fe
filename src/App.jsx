
import { Route, Routes } from 'react-router-dom';
import './App.css'
import MainPage from './pages/MainPage';
import ChatPage from './pages/ChatPage';
import SideBar from './components/SideBar';

const App=()=>{
  return(
    <>
      <SideBar></SideBar>
      <Routes>
        <Route path='/' element={<MainPage />}/>
        <Route path='/chat/:id' element={<ChatPage />}/>       
      </Routes>
    </>
  )
}
export default App;