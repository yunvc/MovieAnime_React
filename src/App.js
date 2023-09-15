import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Home2 from "./pages/Home2";
import React from 'react';

function handleButtonClick() {
  document.cookie = "cookieName=cookieValue; SameSite=Strict";
}
function App() {
  return (
    <>
    <Navbar />
    <Routes>
      <Route path='/' element={<Home />}/>
      <Route path='/login' element={<Login />}/>
      <Route path='/anime' element={<Home2 />}/>
    </Routes>
    </>
  );
}

export default App;
