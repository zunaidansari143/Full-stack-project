import React from "react";
import "../assets/css/style.css"
import img10 from "../assets/img/avatarmale.png"
import img11 from "../assets/img/Polygon.png"
import Deals from "./deals";
// import Tasks from "./tasks";


const MainDashbord=()=>{
    return(
        <>       
         <div  className="showcontant">
            <div className="Dashbord-bar"> 
              <div className="Dashbord-top">
              <h4> 8 task completed out of 10</h4>
              <div className="top-right">
                <label>Show: &nbsp;<span>This week</span>&nbsp;<img src={img11}></img> </label>
              </div>
              </div>
              <div className="fill-bar">
                <div className="fill-dtls"> </div>
              </div>
               <div className="days">
                <h4>
                23 December, Sunday
                </h4>
                <table className="table">
                    <tbody> 
                    <tr>
                        <td>Sun</td>
                        <td>Mon</td>
                        <td>Tue</td>
                        <td>Wed</td>
                        <td>Thu</td>
                        <td>Fri</td>
                        <td>Sat</td>
                    </tr>
                    <tr>
                        <td style={{background:"blue",borderRadius:"50%"}}>23</td>
                        <td>24</td>
                        <td>25</td>
                        <td>26</td>
                        <td>27</td>
                        <td>28</td>
                        <td>29</td>
                    </tr>
                    </tbody>
                </table>
                <div className="Reminder">
                    <div className="Reminder-top">
                        <h4>Send benefit review by Sunday</h4>
                        <p>Reminder</p>
                    </div>
                    <p> Due date: <span>December 23, 2018</span></p>
                    <div className="Reminder-bottom">
                        <div><img src={img10}/> &nbsp;&nbsp; <span>George Fields</span></div>
                        <div className="btn01"><button>Completed</button></div>
                    </div>
                </div>
                <div className="Reminder">
                    <div className="Reminder-top">
                        <h4>Invite to office meet-up</h4>
                        <p>Call</p>
                    </div>
                    <p> Due date: <span>December 23, 2018</span></p>
                    <div className="Reminder-bottom">
                        <div><img src={img10}/> &nbsp;&nbsp; <span>Rebecca Moore</span></div>
                        <div className="btn01 btn02"><button>Ended</button></div>
                    </div>
                </div>
                <div className="Reminder">
                    <div className="Reminder-top">
                        <h4>Office meet-up</h4>
                        <p>Event</p>
                    </div>
                    <p> Due date: <span>December 23, 2018</span></p>
                    <div className="Reminder-bottom">
                        <div><img src={img10}/> &nbsp;&nbsp; <span>Lindsey Stroud</span></div>
                        <div className="btn01"><button>Completed</button></div>
                    </div>
                </div>
                <div className="see-more"> <a href="#">Show more</a></div>

               </div>
           
            </div>
            <div className="Dashbord-deals">
               <div className="Dashbord-deals-bar">
                <Deals/>             
                </div>
            </div>
                <div className="Dashbord-Tasks">
                    <div className="Dashbord-Tasks-bar">
                        <div className="Tasks-section">
                        <div className="Tasks-top">
                            <div><h2>Tasks</h2></div>                   
                            <div>
                                <label>Show: &nbsp;<span style={{color:"blue"}}>This week</span>&nbsp;<img src={img11}></img> </label>
                            </div>
                        </div>
                        <div className="Tasks-bottom">
                            <div className="progress-bar">
                                <div className="circle">
                                <a href="#" className='circle_child'>
                                <span className='parsentage' >60%</span>
                                </a>
                                </div>
                            </div>
                            <div className="Tasks-itam">
                                <ul>
                                    <li>Active</li>
                                    <li>Completed</li>
                                    <li>Ended</li>
                                </ul>
                            </div>
                        </div>
                    </div>                
                </div>
            </div>
        </div>
        </>
    )
}
export default MainDashbord;

