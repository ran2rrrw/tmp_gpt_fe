import MainPage from "./component/MainPage";
import SideBar from "./component/SideBar";
import './App.css'

const App=()=>{
  return(
    <>
      <SideBar></SideBar>
      <div className="mainPage">
        <MainPage></MainPage>
      </div>
      
    </>
  )
}
export default App;