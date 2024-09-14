import { Route, Routes } from "react-router";
import "./App.css";
import Home from "./routes/Home";
import Navigation from '../src/navigation'

function App() {

  const Contacts = () =>{
    return <h1>This one is contacts page</h1>
  }
  return (
    <Routes>
      <Route element={<Navigation/>}>
        <Route path="/" element={<Home />} />
        <Route path="contact" element={<Contacts />}/>
      </Route>
    </Routes>
  );
}

export default App;
