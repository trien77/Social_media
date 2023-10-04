import './App.css';
import "./style.scss"
import Login from "./pages/login/Login"
import Register from "./pages/register/Register";
import Navbar from "./components/navbar/Navbar"
import LeftBar from "./components/leftBar/LeftBar"
import RightBar from "./components/rightBar/RightBar"
import Home from "./pages/home/Home"
import Profile from "./pages/profile/Profile"

import {

  createBrowserRouter,
  RouterProvider,
  Route,
  Outlet,
  Navigate

} from "react-router-dom";

function App() {

  const currentUser=true;

  const Layout=()=>{
    return(
      <div className='theme-dark'>
        <Navbar/>
        <div style={{display:"flex"}}>
            <LeftBar/>
            <div style={{flex:6}}>
              <Outlet/>
            </div>
            <RightBar/>
        </div>
      </div>
    )
  }


const ProtecteRoute=({children})=>{
  if(!currentUser){
    return <Navigate to="login"/>
  }
  return children
}

  const router= createBrowserRouter([
    {
      path:"/",
      element:<ProtecteRoute><Layout/></ProtecteRoute>,
      children:[
        {
          path:"/",
          element:<Home/>
        },
        {
          path:"/profile/:id",
          element:<Profile/>
        }
      ]
    },
    {
      path:"/login",
      element:<Login/>
    },
    {
      path:"/register",
      element:<Register/>
    }
  ])
  return (
    <RouterProvider router={router}/>
  );
}

export default App;
