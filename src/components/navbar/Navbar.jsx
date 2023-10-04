import "./navbar.scss";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import WbSunnyOutlinedIcon from "@mui/icons-material/WbSunnyOutlined";
import GridViewOutlinedIcon from "@mui/icons-material/GridViewOutlined";
import NotificationsOutlinedIcon from "@mui/icons-material/NotificationsOutlined";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import { Link } from "@mui/material";
// import { Link } from "react-router-dom";
// import { useContext } from "react";
// import { DarkModeContext } from "../../context/darkModeContext";
// import { AuthContext } from "../../context/authContext";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="left">

          <Link to="/" style={{textDecoration:"none"}}>
              <span>LdtSocial</span>
          </Link>
          <HomeOutlinedIcon/>
          <DarkModeOutlinedIcon/>
          <GridViewOutlinedIcon/>
          <div className="search">
              <SearchOutlinedIcon/>
              <input type="text" placeholder="Search" />
          </div>
          

      </div>
      <div className="right">

          <PersonOutlinedIcon/>
          <EmailOutlinedIcon/>
          <NotificationsOutlinedIcon/>
          <div className="user">
              <img src="https://images.pexels.com/photos/9900531/pexels-photo-9900531.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
              <span>John Doe</span>
          </div>
          
      </div>
    </div>
  )
}

export default Navbar
