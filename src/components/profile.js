import React from "react";

const Email= () =>{



    const handalinputproduct =(e) =>{

    }
    return(
        <>
         <div  className="showcontant">
            <div className="email-box">
                <h2>Add product</h2>

                <div className="product-form-box">
                <div className="product-form">
                <form>
                <label className="" htmlFor="first_name">
                     name &nbsp;
                  <input
                   placeholder="Enter Your First Name"
                    type="text"
                    id="name"
                    className="first_name form-input-box"
                    name="name"
                    onChange={(e) => {
                      handalinputproduct(e);
                    }}
                  />
                </label>
                <br />
                <label htmlFor="last_name">
                price &nbsp;&nbsp;
                  <input
                  placeholder="Enter Your Last Name"
                    type="text"
                    id="lprice"
                    className="last_name form-input-box"
                    name="price"
                    onChange={(e) => {
                      handalinputproduct(e);
                    }}
                  />
                </label>
                <br />
                <label htmlFor="username">
                category &nbsp;
                  <input
                  placeholder="Enter Your UserName"
                    type="text"
                    id="category"
                    className="username form-input-box"
                    name="category"
                    onChange={(e) => {
                      handalinputproduct(e);
                    }}
                  />
                </label>
                <br/>
                <label htmlFor="username">
                userId &nbsp;
                  <input
                  placeholder="Enter Your UserName"
                    type="text"
                    id="userId"
                    className="username form-input-box"
                    name="userId"
                    onChange={(e) => {
                      handalinputproduct(e);
                    }}
                  />
                </label>
                <br></br>
                <label htmlFor="username">
                company &nbsp;
                  <input
                  placeholder="Enter Your UserName"
                    type="text"
                    id="company"
                    className="username form-input-box"
                    name="company"
                    onChange={(e) => {
                      handalinputproduct(e);
                    }}
                  />
                </label>
                <br />
                
             
                <br />
                <div className="dlf">
                <button
                      type="button"
                      name="cancel"
                      className="btn01"
                      onClick={() => {
                        // setLoginToggle(false)
                      }}
                    >
                      Cancel
                    </button>
                <button
                      className="submit-btn btn01"
                      type="button"
                      name="submit"
                    //   onClick={()=>{hendalsubmit()}}
                    >
                      Submit
                    </button>
                  <span className="form-button-box02">
                    {/* <button
                      className="cancel btn01"
                      type="button"
                      name="cancel"
                    >
                      Cancel
                    </button> */}
                    &nbsp;
                    
                  </span>
                </div>
              </form>

                </div>
                </div>
            </div>
        </div>        
        </> 
    )
}
export default Email;