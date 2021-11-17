import React from "react";

// We use Route in order to define the different routes of our application
import { Route, Routes } from "react-router-dom";

// We import all the components we need in our app
import Navbar from "./components/navbar";
import Start from "./components/start";
import LoginForm from "./components/loginForm";
import SignupForm from "./components/signupForm";
import Upload from "./components/upload";
import Show from "./components/show";

const App = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Start />}/>
        <Route exact path="/login" element={<LoginForm />}/>
        <Route exact path="/signup" element={<SignupForm/>}/>
        <Route exact path="/upload" element={<Upload/>}/>
        <Route exact path="/show" element={<Show/>}/>
    </Routes>
    </div>
  );
};

export default App;