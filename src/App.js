import { Route, Routes } from "react-router";

import "./App.css";
import Home from "./routes/Home";
import Navigation from '../src/navigation'
import Signup from "./routes/Auth/Signup";
import Login from "./routes/Auth/Login";
import ForgetPassword from "./routes/Auth/ForgetPassword";
import Shop from "./routes/Main/Shop";

function App() {

  const Contacts = () =>{
    return <h1>This one is contacts page</h1>
  }
  return (
    <Routes>
      <Route element={<Navigation/>}>
        <Route path="/" element={<Home />} />
        <Route path="contact" element={<Contacts />}/>
        <Route path="signup" element={<Signup />}/>
        <Route path="login" element={<Login />}/>
        <Route path="resetPassword" element={<ForgetPassword />}/>
        <Route path="shop" element={<Shop />}/>
      </Route>
    </Routes>
  );
}

export default App;
