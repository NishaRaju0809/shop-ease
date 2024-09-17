import { Route, Routes } from "react-router";

import "./App.css";
import Home from "./routes/Home";
import Navigation from '../src/navigation'
import Signup from "./routes/Signup";

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
      </Route>
    </Routes>
  );
}

export default App;
