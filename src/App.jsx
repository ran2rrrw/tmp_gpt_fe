
import { Route, Routes } from 'react-router-dom';
import './App.css'
import MainPage from './pages/MainPage';
import ChatPage from './pages/ChatPage';

const App=()=>{
  return(
    <>
      <Routes>
        <Route path='/' element={<MainPage />}/>
        <Route path='/chat/:id' element={<ChatPage />}/>       
      </Routes>
    </>
  )
}
export default App;