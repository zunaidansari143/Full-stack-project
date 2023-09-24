import { BrowserRouter, Route,  Routes } from "react-router-dom";
import "./App.css";
import Register from "./Register/Register";
import Dashbordpannal from "./components/Dashbord/Dashbordpannal";
// import {  } from "react-router-dom";
// import ReactRoute from "./components/Routes";
// import Email from "./components/profile";

function App() {
  // const [homeToggel,setHomeToggle]=useState(true)
  return (
    <BrowserRouter>
      <div className="App">
        {/* <Routes>         
         
        </Routes> */}
        <Dashbordpannal/>
        {/* <Register />  */}
      </div>
    </BrowserRouter>
  );
}

export default App;
