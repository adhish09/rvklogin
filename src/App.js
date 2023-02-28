import Header from "./components/Header/header";
import "./components/global.css";

import "./App.css";
import Footer from "./components/Footer/footer";
import Container from "./components/Herosection/Container";
import Frame from "./components/Herosection/Frame";
import RvkSection from "./components/Herosection/rvksection";
import EventsSection from "./components/Herosection/EventsSection";
import FeaturedSection from "./components/Herosection/FeaturedSection";
import hero from "./Images/hero.png";
import { BrowserRouter } from "react-router-dom";
import { BrowserRouter as Router, Switch, Route, Routes } from 'react-router-dom';
import Home from "./Home";
import Register from "./Pages/Register";
import Login from "./Pages/Login";

const App = () => {
  return (

    <BrowserRouter>
    <Routes>
      <Route>
      <Route path="/" element={<Home />} />
      <Route path="register" element={<Register />} />
      <Route path="login" element={<Login />} />

      
      
      




      </Route>
    </Routes>
    </BrowserRouter>
    
      
  );
};

export default App;
