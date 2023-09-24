import React from "react";

import "../assets/css/style.css";
import img1 from "../assets/img/avatarmale.png"
import imagican1 from "../assets/img/side_bar/Vector(2).png"
import imagican2 from "../assets/img/side_bar/Vector(3).png"
import imagican3 from "../assets/img/side_bar/Vector(4).png"
import imagican4 from "../assets/img/side_bar/Vector(5).png"
// import imagican5 from "../assets/img/side_bar/Vector(6).png"
import imagican6 from "../assets/img/side_bar/Vector.png"
import imagican7 from "../assets/img/side_bar/Vector(1).png"
// import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Link , useNavigate} from "react-router-dom";
// import Chat from "./chat";
// import Email from "./email";
// import Contact from "./contact";
// import Deals from "./deals";
// import MainDashbord from "./mainDashbord";
// import Tasks from "./tasks";



const Sidebar = (props) => {


  const auth = localStorage.getItem('user')
  // console.log(auth);
  const navigate = useNavigate()

  const logout=() =>{
    alert("Logout is page")
    
    localStorage.clear();
    navigate("/singup")
  }
  return (
    <>
      <div className={props.className}>
        <div className="box-1">
          <h2>SaaS Kit</h2>
        </div>
        <div className="profile">
          <div className="profile-box"> 
            <div className="profile-pic">
            <img src={img1}/>
            </div>&nbsp;&nbsp;
            <div className="profile-text">
              <div> <h4> Zunaid Ansari</h4></div>
              <div><p>zunaidansari688@gmail.com</p></div>
            </div>
          </div>
          <div className="menu-bar">
            <div className="main-menu">              
              <ul className="menu">
                <li><Link to="/"><img src={imagican1}/>&nbsp;&nbsp;  &nbsp;<samp>Dashboard</samp></Link> </li>
                <li><Link to={`/menu`}><img src={imagican2}/> &nbsp; &nbsp;<samp>Menu</samp></Link>               {/* <ul className="sub-menu">
                    <li><a href="#"><samp>active</samp></a></li>
                    <li><a href="#"><samp>Completed</samp></a></li>
                    <li><a href="#"><samp>Ended</samp></a></li>
                  </ul>  */}
                </li>
               
                <li><Link to="/email"><img src={imagican3}/> &nbsp; &nbsp;<samp>profile </samp></Link>
                {/* <ul className="sub-menu">
                    <li><a href="#"><samp>Draft</samp></a></li>
                    <li><a href="#"><samp>Scheduled</samp></a></li>
                    <li><a href="#"><samp>Sent</samp></a></li>
                    <li><a href="#"><samp>Archived</samp></a></li>
                  </ul>  */}
                </li>
                <li><Link to="/contact"> <img src={imagican4}/>&nbsp;&nbsp; &nbsp;<samp>Orders </samp></Link></li>
                <li><Link to="/chat"> <img src={imagican7}/>&nbsp; &nbsp;&nbsp;<samp>Customers</samp></Link></li>
                <li><Link to="/deals">  <img src={imagican6}/>&nbsp;&nbsp;&nbsp;<samp>trasactions</samp></Link></li>
                <li className="setting"> {auth? <Link onClick={logout} to="/singup"><samp>Logout</samp></Link>: <Link to="/singup"><samp>singup</samp></Link>}</li>
              </ul>           
            </div>
          </div>
          <div className="showcontant-pannal">      
            {/* <MainDashbord/>       */}                                     
          </div>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
