import React from 'react'
import "./leftBar.scss"

import "./leftBar.scss";
import Friends from "../../assets/1.png";
import Groups from "../../assets/2.png";
import Market from "../../assets/3.png";
import Watch from "../../assets/4.png";
import Memories from "../../assets/5.png";
import Events from "../../assets/6.png";
import Gaming from "../../assets/7.png";
import Gallery from "../../assets/8.png";
import Videos from "../../assets/9.png";
import Messages from "../../assets/10.png";
import Tutorials from "../../assets/11.png";
import Courses from "../../assets/12.png";
import Fund from "../../assets/13.png";
// import { AuthContext } from "../../context/authContext";
// import { useContext } from "react";













const LeftBar = () => {
  return (
    <div className='leftBar'>
       <div className="container">

          <div className="menu">

                <div className="user">
                    <img src="https://images.pexels.com/photos/9900531/pexels-photo-9900531.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
                    <span>John Doe</span>
                </div>
                  
                <div className="item">
                  <img src={Friends} alt="" />
                  <span>Friends</span>
                </div>
                <div className="item">
                  <img src={Groups} alt="" />
                  <span>Groups</span>
                </div>
                <div className="item">
                  <img src={Market} alt="" />
                  <span>Market</span>
                </div>
                <div className="item">
                  <img src={Watch} alt="" />
                  <span>Friends</span>
                </div>
                <div className="item">
                  <img src={Memories} alt="" />
                  <span>Memories</span>
                </div>
          </div>

          <hr></hr>
          
          <div className="menu">
            <span>Your Shortcuts</span>
            <div className="item">
                <img src={Events} alt="" />
                <span>Friends</span>
              </div>
              <div className="item">
                <img src={Gaming} alt="" />
                <span>Gaming</span>
              </div>
              <div className="item">
                <img src={Gallery} alt="" />
                <span>Gallery</span>
              </div>
              <div className="item">
                <img src={Videos} alt="" />
                <span>Videos</span>
              </div>
              <div className="item">
                <img src={Messages} alt="" />
                <span>Messages</span>
              </div>
          </div>
           <hr></hr>

           <div className="menu">
            <span>Others</span>
              <div className="item">
                  <img src={Tutorials} alt="" />
                  <span>Tutorials</span>
              </div>
              <div className="item">
                  <img src={Courses} alt="" />
                  <span>Courses</span>
              </div>
              <div className="item">
                  <img src={Fund} alt="" />
                  <span>Fund</span>
              </div>

           </div>
             
             



        
       </div>
    </div>
  )
}

export default LeftBar
