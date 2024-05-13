import { Routes, Route, Navigate } from "react-router-dom";
import Signup from "../src/pages/Signup";
import Login from "../src/pages/Login";
import Home from "../src/pages/Home";
import { Toaster } from "react-hot-toast";
import { useAuthContext } from "./contexts/AuthContext";
function App() {
  const {authUser} = useAuthContext();
  return (
    <div >
      <Routes>
        <Route path="/" element={authUser ? <Home /> : <Navigate to={"/login"} />}/>
        <Route path="/login"  element={authUser ? <Navigate to="/" /> : <Login />}/>
        <Route path="/signup" element={authUser ? <Navigate to="/" /> : <Signup />}/>
      </Routes>
      <Toaster/>
    </div>
  );
}

export default App;
