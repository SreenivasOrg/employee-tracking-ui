
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom'
import './App.css'
import Forgot from './Components/Forgot/Forgot'
import LoginForm from './Components/LoginForm/LoginForm'

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

export default App
