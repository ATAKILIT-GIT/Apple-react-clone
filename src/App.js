import React, { Component } from "react";

// import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { HashRouter as Router ,Routes ,Route } from 'react-router-dom';
// import { BrowserRouter as Router ,Routes ,Route } from 'react-router-dom';
// BrowserRouter
// To add the ability to add routing functionality
// Switch
// Checks provided paths and stops checking all as soon as it finds a match
// Route
// Renders components based on the URL

// Home page
import Navigation from "./Components/Nav/Nav";
import Footer from "./Components/Footer/Footer";
import Main from "./Components/Main/Main";

// Pages
import Iphone from "./Pages/Iphone/iphone";
import Mac from "./Pages/Mac/Mac";
import Tv from "./Pages/Tv/Tv";
import Watch from "./Pages/Watch/Watch";
import Cart from "./Pages/Cart/Cart";
import Ipad from "./Pages/Ipad/Ipad";
import Music from "./Pages/Music/Music";
import Support from "./Pages/Support/Support";
import Search from "./Pages/Search/Search";
import Four04 from "./Pages/Four04/Four04";
import Productpage from "./Pages/Productpage/Productpage";
import Youtube from "./Components/Youtube/Youtube";

// import general css
import "./css/styles.css";



function App() {
  return (
    <Router>
      <div>
        <Navigation />
        <Routes>
        <Route path="/" element={<><Main /><Youtube /></>} />
          <Route path="/mac" element={<Mac />} />
          <Route path="/iphone" element={<Iphone />} />
          <Route path="/ipad" element={<Ipad />} />
          <Route path="/TV" element= {<Tv />} />
          <Route path="/Watch" element={<Watch />} />
          <Route path="/Music" element={<Music />} />
          <Route path="/Support" element={<Support />} />
          <Route path="/Cart" element={<Cart />} />
          <Route path="/iphone/:pid" element={<Productpage />} />
          <Route path="/" component={Four04} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;