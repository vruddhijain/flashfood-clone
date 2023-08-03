// import { BrowserRouter, Routes, Route } from "react-router-dom";
import Howitworks from "./components/howitworks";
import Location from "./components/locations.js";
import About from "./components/about.js";
import Partner from "./components/partner.js";
import Support from "./components/support.js";
import "./App.css";
import ReactDOM from "react-dom";

import Home from "./components/home";

export default function App() {
  return (
<>
<Home/>
<br/><br/><br/>
    <Howitworks/>
    <br/><br/><br/>
    <Location/>
    <br/><br/><br/>
    <About/>
    <br/><br/><br/>
    <Partner/>
    <br/><br/><br/>
    <Support/>
    

</>
    

    // <BrowserRouter>
    //   <Routes>
    //     <Route exact path="/" element={<Home />} />
    //     <Route exact path="/howitworks" element={<Howitworks />} />
    //     <Route exact path="/location" element={<Location />} />
    //     <Route exact path="/about" element={<About />} />
    //     <Route exact path="/partner" element={<Partner />} />
    //   </Routes>
    // </BrowserRouter>
  );
}

// Remove the ReactDOM.createRoot method and use ReactDOM.render instead

ReactDOM.render(<App />, document.getElementById('root'));
