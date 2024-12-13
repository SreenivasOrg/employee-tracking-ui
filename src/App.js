import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Forgot from "./Components/Forgot/Forgot";
import LoginForm from "./Components/LoginForm/LoginForm";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginForm />} />
        <Route path="/forgot-password" element={<Forgot />} />
        <Route path="/login" element={<LoginForm />} />
      </Routes>
    </Router>
  );
}

export default App;
