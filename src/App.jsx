
import { Route, Routes } from 'react-router-dom';
import './App.css'
import MainPage from './component/MainPage';
import ChatPage from './component/ChatPage';

const App=()=>{
  return(
    <>
      <Routes>
        <Route path='/' Component={MainPage}/>
        <Route path='/chat/' Component={ChatPage}/>       
      </Routes>
    </>
  )
}
export default App;