import React from "react";
import "../../assets/css/style.css"
import img1 from "../../assets/img/search/icon/other/Vector.png"
import img2 from "../../assets/img/icon/other/Vector.png"

const Header = (props) => {
  //  console.log(props);
  return (
    <>
      <div className={props.className}>
        <div className="sareche-bar"> 
        <img src={img1}/>
        <input type="text"   placeholder="search">
        </input>
        <div className="notificition-ican">
             <img src={img2}/>
        </div>

        
        </div>
      </div>
    </>
  );
};
export default Header;
