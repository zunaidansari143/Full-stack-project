import React from "react";
import Header from "../header/header";
import Sidebar from "../sidebar";
import Showcontent from "../showcontent";
// import ReactRoute from "../Routes";
// import { BrowserRouter } from "react-router-dom";

const   Dashbordpannal = (props) => {
  return (
    <>             
      <div className="appjs" >        
        <div className="header-pannal">
          <Header className="header" />
        </div>
        <div className="sidebar-pannal">
          <Sidebar className="sidebar" />
        </div>
        <div  className="contant-pannal">          
          <Showcontent className="allShowcontant"/>
          {/* <ReactRoute/> */}
        </div>
      </div>  


    </>
  );
};

export default Dashbordpannal;
