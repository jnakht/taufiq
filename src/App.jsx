import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Homepage from "./Pages/Homepage";
import DashBoard from "./Pages/DashBoard";
import NavBar from "./Components/NavBar";
import MarketData from "./Pages/MarketData";
import Footer from "./Pages/Footer";
import Trade from "./Pages/Trade";
import SignUp from "./Authentication/SignUp";
import SignIn from "./Authentication/SignIn";
// import login from "./Authentication/login";
// import registration from "./Authentication/registration";

// import { useState } from "react";

function App() {

  // const[isLoggedIn,setIsLoggedIn] =useState(false);
  return (
    <>
      <BrowserRouter>
      <NavBar/>
      <div className="pt-16 w-full min-h-[calc(100vh-8rem)]">
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/profile" element={<DashBoard/>} /> 
          <Route path="/market" element={<MarketData/>} />
          {/* <Route path="/login" element={<login/>} /> */}
          {/* <Route path="/registration" element={<registration/>} /> */}
          <Route path= "registration" element={<registration/>} />
          <Route path="/signUp" element={<SignUp/>} />
          <Route path="/signIn" element={<SignIn/>} />
          <Route path="/trade" element={<Trade/>} />

{/* 
          <Route path="/signin" element={<SignIn setIsLoggedIn={setIsLoggedIn} />} />
        <Route path="/signup" element={<SignUp setIsLoggedIn={setIsLoggedIn} />} /> */}
        {/* <Route path="/profile" element={isLoggedIn ? <DashBoard /> : <SignIn setIsLoggedIn={setIsLoggedIn} />} />
        <Route path="/live-transactions" element={isLoggedIn ? <LiveTransaction/>: <SignIn setIsLoggedIn={setIsLoggedIn} />} />
        <Route path="/wallets" element={isLoggedIn ? <Wallets/> : <SignIn setIsLoggedIn={setIsLoggedIn} />} /> */}
          
        </Routes>
        </div>
        <Footer/>
      </BrowserRouter>
    </>
  );
}

export default App;
