import React from "react";

const Input = ({ className, handalinput, id, name ,type}) => {
    // console.log("input class name",className)
    return (
      <>
      <div>
        <input
          className={className}
          name={name}
          type={type}
          id={id}
          onChange={(e) => handalinput(e)}
        />
      </div>
      </>
    );
  };
  
  export default Input;