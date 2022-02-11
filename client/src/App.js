import TopBar from "./topbar/TopBar";
import Home from "./pages/home/Home";
import Single from "./pages/single/Single";
import Write from "./pages/write/Write";
import Settings from "./pages/settings/Settings";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import { useContext } from "react";
import { Context } from "./context/Context";

function App() {
  const {user} = useContext(Context);
  return (
    <BrowserRouter>
    <TopBar/>
    <Routes>
      <Route path="/" element={<Home/>} exact/>
      {user ? <Route path="/register" element={<Home/>} exact/> : <Route path="/register" element={<Register/>} exact/>}
      {user? <Route path="/login" element={<Home/>} exact/> : <Route path="/login" element={<Login/>} exact/>}
      {user?<Route path="/write" element={<Write/>} exact/>:<Route path="/register" element={<Register/>} exact/> }
      {user?<Route path="/settings" element={<Settings/>} exact/>: <Route path="/register" element={<Register/>} exact/>}
      <Route path="/post/:postId" element={<Single/>} exact/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
