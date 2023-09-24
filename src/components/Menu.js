import React, { useEffect, useState } from "react";
import axios from "axios";
import Input from "./Input";
// import Register from "../Register/Register";

// const initialstudentdata = {
// //   first_name: " ",
// //   last_name: " ",
// //   username: " ",
// //   email: " ",
// //   password: " ",
// //   date_of_birth: " ",
// //   contact: " ",
// };
const Tasks = () => {
  // const [registerstudentData, setRegisterstudentData] =
  //   useState(initialstudentdata);
  // const [resgisterlogindata, setresgisterlogindata] =
  //   useState(initialLogindata);
  // const [getData, setgetData] = useState();
  const [editData, seteditData] = useState();
  const [tabaldata, setTabeldata] = useState();
  const [viewdata, setViewdata] = useState(false);
  // const [viewloginpage, setviewloginpage] = useState(false);
  const [deletedata, setdeletedata] = useState();
  const [viewdeletebutton, setviewdeletebutton] = useState(false);
  const [Index, setIndex] = useState();
  const [userfirstname, setUserfirstname] = useState();
  const [userlastname, setUserlastname] = useState();
  const [username, setUsername] = useState();
  // const[createname,setcreatername]=useState()
  const [filterdata, handlefilterdata] = useState("");

// console.log( "hii",getData);
  
  // const handalinput = (event) =>{
  //   switch (event.target.name) {
  //     case "first_name":
  //       setRegisterstudentData((prevState) => ({
  //         ...prevState,
  //         first_name: event.target.value,
  //       }));
  //       break;
  //     case "last_name":
  //       setRegisterstudentData((prevState) => ({
  //         ...prevState,
  //         last_name: event.target.value,
  //       }));
  //       break;
  //     case "username":
  //       setRegisterstudentData((prevState) => ({
  //         ...prevState,
  //         username: event.target.value,
  //       }));
  //       // setcreatername((prevState) => ({
  //       //   ...prevState,
  //       //   username: event.target.value,
  //       // }));
  //       break;
  //     case "email":
  //       setRegisterstudentData((prevState) => ({
  //         ...prevState,
  //         email: event.target.value,
  //       }));
  //       break;
  //     case "password":
  //       setRegisterstudentData((prevState) => ({
  //         ...prevState,
  //         password: event.target.value,
  //       }));
  //       break;
  //     case "date_of_birth":
  //       setRegisterstudentData((prevState) => ({
  //         ...prevState,
  //         date_of_birth: event.target.value,
  //       }));
  //       break;
  //     case "contact":
  //       setRegisterstudentData((prevState) => ({
  //         ...prevState,
  //         contact: event.target.value,
  //       }));
  //       break;
  //     default:
  //       break;
  //   }

  // }

// console.log(tabaldata);
  useEffect(() => {
    axios
      .get("http://localhost:8080/user/get-all")
      .then((responce) => {
        setTabeldata(responce.data.result);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [ deletedata, editData]);

  const deleteUser = (item) => {
    const id = item._id;
    // console.log(id);
    axios
      .delete("http://localhost:8080/user/delete/" + id)
      .then((res) => {
        // console.log("delete has been successfull", res);
        setdeletedata(res);
      })
      .catch((arr) => {
        console.log(arr.message);
      });
  };
  const handelEdit = (item, index) => {
    setviewdeletebutton(true);
    setIndex(index);
    // console.log("index",index)
    // console.log(item)
  };
  
  const handelEditsubmit = (item) => {
    const id = item._id;
    console.log(id);

    axios
      .put("http://localhost:8080/user/update/" + id, {
        first_name: userfirstname,
        last_name: userlastname,
        username: username,
        email: item.email,
        password: item.password,
        date_of_birth: item.date_of_birth,
        contact: item.contact,
      })
      .then((res) => {
        seteditData(res);
        setviewdeletebutton(false);
        console.log(res);       
      })
      .catch((err) => {
        console.log("edit api error", err.message);
      });
  };
  const createUserbutton = () => {
    setViewdata(!viewdata);
  };

  

  return (
    <>
      <div className="Tasks">
      <div className="addstudent">
            <label className="viewdata">
            <label>
                search Username
                <input type="text"
                 name="userName"
                 id="userName"
                 onChange={(e) => handlefilterdata(e.target.value)}
                 placeholder="Enter Username"
                 ></input>
              </label>
              <button onClick={() => createUserbutton()}>Create User</button> 
            </label>
          </div>          
            <>
              {viewdata && viewdata ? (
                <div>
                  {/* <Table tabledata={tabaldata} deleteUser={deleteUser} /> */}
                  <div className="main-box">
                    <div className="form">
                      <div className="form-outline flex-fill mb-0">
                        <label className="form-label">
                          First Name &nbsp;&nbsp;
                          <Input
                            name="first_name"
                            id="first_name"
                            className="form-control"
                            // handalinput={handalinput}
                          />
                        </label>
                      </div>
                      <div className="form-outline flex-fill mb-0">
                        <label className="form-label">
                          Last Name &nbsp;&nbsp;
                          <Input
                            name="last_name"
                            id="last_name"
                            className="form-control"
                            // handalinput={handalinput}
                          />
                        </label>
                      </div>
                      <div className="form-outline flex-fill mb-0">
                        <label className="form-label">
                          username &nbsp;&nbsp;
                          <Input
                            name="username"
                            id="username"
                            className="form-control"
                            // handalinput={handalinput}
                            type="text"
                            required
                          />
                        </label>
                      </div>
                      <div className="form-outline flex-fill mb-0">
                        <label className="form-label">
                          Email &nbsp;&nbsp;
                          <Input
                            className="form-control"
                            id="email"
                            name="email"
                            // handalinput={handalinput}
                            required
                          />
                        </label>
                      </div>
                      <div className="form-outline flex-fill mb-0">
                        <label className="form-label">
                          password &nbsp;&nbsp;
                          <Input
                            className="form-control"
                            id="password"
                            name="password"
                            // handalinput={handalinput}
                            required
                          />
                        </label>
                      </div>
                      <div className="form-outline flex-fill mb-0">
                        <label className="form-label">
                          date_of_birth &nbsp;&nbsp;
                          <Input
                            className="form-control"
                            id="date"
                            type="date"
                            name="date_of_birth"
                            // handalinput={handalinput}
                          />
                        </label>
                      </div>
                      <div className="form-outline flex-fill mb-0">
                        <label className="form-label">
                          Contact &nbsp;&nbsp;
                          <Input
                            className="form-control"
                            id="contact"
                            name="contact"
                            // handalinput={handalinput}
                          />
                        </label>
                      </div>

                      <div className="d-flex form-outline justify-content-center  mb-3 mb-lg-4">
                        <button
                          className="btn btn-md btn-primary"
                          heading=""
                          onClick={() => {
                            setViewdata(false);
                          }}
                        >
                          cancel
                        </button>{" "}
                        &nbsp; &nbsp; &nbsp;
                        <button
                          className="btn btn-md btn-primary"
                          // hendalsubmit={hendalsubmit}
                        >ok</button>
                      </div>
                    </div>
                  </div>
                </div>
              ) : (
                <div>
                  <div className="main-table" style={{ width: "100%" }}>
                    <table border="1">
                      <thead>
                        <tr>
                          <th> id</th>
                          <th>First Name</th>
                          <th>Last Name</th>
                          <th> Usernsme</th>
                          {/* <th> Email</th> */}
                          {/* <th> password</th> */}
                          <th> Date Of Birth</th>
                          {/* <th> phone no.</th> */}
                          <th> Action</th>
                        </tr>
                      </thead>
                      <tbody>
                        {tabaldata &&
                          tabaldata
                          .filter((items) => {

                              //  console.log(length);
                            // if(length === 0){
                            //   console.log("not found")
                            // }
                            return items.username.toLowerCase().includes(filterdata);
                           
                          }) 
                          .map((item, index) => {
                                    
                          //  console.log(length);
                            return (
                              <tr key={item.email}>
                                <td>{index + 1}</td>
                                <td>
                                  {viewdeletebutton && index === Index ? (
                                    <>
                                      <input
                                        defaultValue={item.first_name}
                                        onChange={(e) => {
                                          setUserfirstname(e.target.value);
                                        }}
                                      />
                                    </>
                                  ) : (
                                    item.first_name
                                  )}
                                </td>
                                <td>
                                  {" "}
                                  {viewdeletebutton && index === Index ? (
                                    <>
                                      <input
                                        defaultValue={item.last_name}
                                        onChange={(e) => {
                                          setUserlastname(e.target.value);
                                        }}
                                      />
                                    </>
                                  ) : (
                                    item.last_name
                                  )}
                                </td>
                                <td>
                                  {viewdeletebutton && index === Index ? (
                                    <>
                                      <input
                                        defaultValue={item.username}
                                        onChange={(e) => {
                                          setUsername(e.target.value);
                                        }}
                                      />
                                    </>
                                  ) : (
                                    item.username
                                  )}
                                </td>

                                {/* <td>{item.email}</td>
                               <td>{item.password}</td> */}
                                <td>{item.date_of_birth}</td>
                                {/* <td>{item.contact}</td>                                                */}
                                <td>
                                  {" "}
                                  &nbsp; &nbsp; &nbsp;
                                  {viewdeletebutton && viewdeletebutton ? (
                                    <>
                                      <button
                                        onClick={() => {
                                          setviewdeletebutton(false);
                                        }}
                                      >
                                        cancel
                                      </button>
                                      &nbsp; &nbsp; &nbsp;
                                      <button
                                        onClick={() => {
                                          handelEditsubmit(item);
                                        }}
                                      >
                                        ok
                                      </button>
                                    </>
                                  ) : (
                                    <>
                                      {/* {viewdeletebutton && viewdeletebutton?(<></>):(<> hello</>)}
                              <button onClick={()=>{setviewdeletebutton(false)}}>delete</button> */}
                                      <button
                                        onClick={() => {
                                          deleteUser(item);
                                        }}
                                      >
                                        delete
                                      </button>
                                      &nbsp; &nbsp;{" "}
                                      <button
                                        onClick={() => {
                                          handelEdit(item, index);
                                        }}
                                      >
                                        Edit
                                      </button>
                                    </>
                                  )}
                                </td>
                              </tr>
                            );
                          })
                        }
                      </tbody>
                    </table>
                  </div>
                </div>
              )}
            </>
      </div>
    </>
  );
};
export default Tasks;
