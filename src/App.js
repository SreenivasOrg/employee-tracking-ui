import React from "react";
import { BrowserRouter as Router,Routes,Route } from "react-router-dom";
import LoginForm from "./components/LoginForm/LoginForm";
import Forgot from "./components/Forgot/Forgot";
// import RegisterForm from "./components/registrationForm/RegisterForm";


function App() {
  return (
    <Router>
    <Routes>
      <Route path="/" element={<LoginForm/>}/>
      <Route path="/Components/Forgot/Forgot" element={<Forgot/>}/>
      <Route path="/login" element={<LoginForm />} />
    </Routes>
    </Router>
  );
}

export default App;