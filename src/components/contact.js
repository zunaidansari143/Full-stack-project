// import axios from "axios";
// import React, { useEffect, useState } from "react";
// // import img10 from "../assets/img/avatarmale.png"
// import img11 from "../assets/img/Polygon.png"

 
// const addUser={
//     name: "",
//     email: "",
//     password: "",
//     date: "",
//     number: "",
//     username:"",
    

// }


const Contact = () =>{
    // const[contacts, setContacts]= useState(addUser);
    // const[addbtnToggle, setAddbtnToggle] =useState(false);
    // const [tableData, settableData] = useState();



    // const handleContact  = (e) =>{
    //     const {name , value} = e.target;
    //     setContacts((prev)=>({...prev,[name]:value}))
    //   }

    //   const handlesubmit =() =>{
    //     axios.post("http://localhost:4400/contact-data",contacts).then((res)=>{
    //         console.log(res.data);
    //         setAddbtnToggle(false)
    //     }).catch((arr) =>{
    //         console.log(arr);
    //     })
    //   }

    //   useEffect(() =>{
    //     axios.get("http://localhost:4400/contact-data").then((res)=>{
    //         settableData(res.data);            
    //     }).catch((arr) =>{
    //         console.log(arr);
    //     })      
    //   },[addbtnToggle])

    //   const toggleButton = () =>{
    //     let eye = document.getElementById("password");
    //     eye.type === "password" ?  eye.type = "text" :  eye.type = "password";   
    //     // console.log("Clicked");
          //let show = document.getElementsByClassName("fa-regular fa-eye-slash");
           //console.log(eye, " jgswhdijs");    
          //console.log(show, " jgswhdijs");    
        // show.className === "fa-regular fa-eye-slash"? show.className ="fxz" : show.className = "fa-regular fa-eye-slash";
    //   }



    return(
        <>         
         <div  className="showcontant">
            <h1>Orders</h1>
            {/* <div className="contact-box">
                <div className="contact-top">
                <div> <label>Company:  &nbsp;<span style={{color:"blue"}}>All</span>&nbsp;<img src={img11}></img> </label></div>
                <div className="contact-button"><button type="button" onClick={() =>setAddbtnToggle(true)}>Add Contact</button></div>
                </div>
                {addbtnToggle && addbtnToggle&&(<>
                    <div className="contact-form">
                    <div className="form-contact">
                        <form action="">
                        <h2>Add new todo</h2>
                            <label className="taskname-label" htmlFor="name">
                            Name: &nbsp;&nbsp;
                            <input
                            onChange={(e)=>{handleContact(e)}}
                            id="name"
                            name="name"
                            type="text"
                            placeholder="Name"
                            />
                             </label>{" "} <br />
                            <label className="" htmlFor="email">
                            Email: &nbsp;&nbsp;
                            <input
                            onChange={(e)=>{handleContact(e)}}
                            id="email"
                            name="email"
                            type="email"
                            placeholder="Email"
                            />
                             </label>{" "} <br />
                            <label className="taskname-label" htmlFor="password">
                            Password: &nbsp;&nbsp;
                            <span style={{position:"relative"}}>
                            <input
                            onChange={(e)=>{handleContact(e)}}
                            className="icon_"
                            id="password"
                            name="password"
                            type="password"
                            placeholder="Password"
                            />
                        <i onClick={()=>{toggleButton()}}  className="fa-regular fa-eye-slash show-ican-pass"></i>
                            </span>
                             </label>{" "} <br />
                            <label className="" htmlFor="date">
                            Date : &nbsp;&nbsp;
                            <input
                            onChange={(e)=>{handleContact(e)}}
                            id="date"
                            name="date"
                            type="date"
                            placeholder="D O B"
                            />
                             </label>{" "} <br />
                            <label className="taskname-label" htmlFor="number">
                            Contact : &nbsp;&nbsp;
                            <input
                            onChange={(e)=>{handleContact(e)}}
                            id="number"
                            name="number"
                            type="number"
                            placeholder="number"
                            />
                             </label>{" "} <br />
                            <label className="" htmlFor="username">
                            UserName : &nbsp;&nbsp;
                            <input
                            onChange={(e)=>{handleContact(e)}}                            
                            id="username"
                            name="username"
                            type="type"
                            placeholder="UserName"
                            />
                             </label>{" "} <br />
                             <label className="taskname-label" htmlFor=" ">
                               <button type="button" onClick={() =>setAddbtnToggle(false)}> cencel</button> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                <button type="button" onClick={() =>handlesubmit()}>submit </button>
                             
                             </label>

                        </form>
                    </div>
                                        
                </div>
                    </>)}
               
                <div className="contact-table"  onClick={() =>setAddbtnToggle(false)}>
                    <table  className="table-contact">
                        <thead>
                            <tr>
                                <th> Id </th>
                                <th>Name </th>
                                <th>Email</th>
                                <th>Date </th>
                                <th>contact </th>
                                <th>UserName </th>
                                <th>password </th>       
                            </tr>                          
                        </thead>
                        {tableData && tableData.map((item)=>{
                            return(
                                <tbody key={item.id.toString()}>
                                <tr >
                                    <td>{item.id}</td>
                                    <td>{item.name}</td>
                                    <td>{item.email}</td>
                                    <td>{item.date}</td>
                                    <td>{item.number}</td> 
                                    <td>{item.username}</td>                                 
                                    <td>{item.password}</td>                                    
                                </tr>
                                </tbody>
                            )
                        })}
                        <tbody>
                      
            
                        </tbody>

                    </table>                
                </div>
            </div> */}
        </div>
        </>
    )
}
export default Contact;