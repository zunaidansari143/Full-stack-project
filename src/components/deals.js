import React from "react";
import img11 from "../assets/img/Polygon.png"
import img12 from "../assets/img/EllipseRR.png"
import img13 from "../assets/img/VectorRR.png"
import img14 from "../assets/img/Vector.png"

const Deals= () =>{
    return(
        <>     

            <div  className="Deals-section">
                
                <div className="Deals-top">
                    <div><h2>trasactions</h2></div>                   
                    <div>
                        <label>Show: &nbsp;<span style={{color:"blue"}}>This week</span>&nbsp;<img src={img11}></img> </label>
                    </div>
                </div>
                <div className="Deals-bottom">
                    <div className="buttom-Deals">
                        <img src={img12}/> &nbsp; <samp>Closed deals</samp>
                    </div>                      
                    <div className="chat-Deals">
                        <div className="map-01">
                            <p>200</p>
                            &nbsp; 
                            <samp>-------------------------------------</samp>
                        </div>                        
                        <div className="map-01">
                            <p>150</p>
                            &nbsp; 
                            <samp>-------------------------------------</samp>
                        </div>                        
                        <div className="map-01">
                            <p>100</p>
                            &nbsp; 
                            <samp>-------------------------------------</samp>
                        </div>                        
                        <div className="map-01">
                            <p>50</p>
                            &nbsp; 
                            <samp>-------------------------------------</samp>
                        </div>                        
                        <div className="map-01">
                            <p>0</p>
                            &nbsp; 
                            <samp>-------------------------------------</samp>
                        </div>                        
                        <div className="map-bottom">                           
                            &nbsp; &nbsp; &nbsp; &nbsp; 
                            <div>1 Dec</div>
                            <div>8 Dec</div>
                            <div>16 Dec</div>
                            <div>31 Dec</div>
                            &nbsp; 
                           
                        </div>   
                        <div className="img-map">
                           <div className="img-box">
                           <img src={img13}/>
                            <img src={img14}/>
                            <img src={img12} className="point"/>
                           </div>
                        </div>


                    </div>
                </div>
                
            </div>
        
        </>
    )
}
export default Deals;