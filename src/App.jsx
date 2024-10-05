import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
  useLocation,
} from "react-router-dom";
import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login";
import Signup from "./pages/Signup/Signup";
import Profile from "./pages/Profile/Profile";

function App() {
  
  return (
   <Router>
    <Routes>
      <Route path="/" exact element={<Home/>}/>
      <Route path="/login" exact element={<Login/>}/>
      <Route path="/signup" exact element={<Signup/>}/>
      <Route path="/profile" exact element={<Profile/>}/>
    </Routes>
   </Router>
  )
}

export default App
