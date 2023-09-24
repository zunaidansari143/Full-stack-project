import React from "react";
import { Routes, Route } from "react-router-dom";
import Chat from "./chat";
import Contact from "./contact";
import MainDashbord from "./mainDashbord";
import Deals from "./deals";
import Email from "./profile";
import Menu from "./Menu";
import Register from "../Register/Register";
import PrivateComponant from "./privateComponant";

const ReactRoute = () => {
  return (
    <>
      <Routes>
        <Route element={<PrivateComponant/>} >
        <Route path="/" element={<MainDashbord />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/contact" element={<Contact />} />
        <Route exact path="/email" element={<Email />} />
        <Route path="/chat" element={<Chat />} />
        <Route path="/deals" element={<Deals />} />
        </Route>
        <Route path="/singup" element={<Register/>}/>
      </Routes>
    </>
  );
};

export default ReactRoute;
