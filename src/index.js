import React from "react";
import { render } from "react-dom";
import { BrowserRouter as Router, Route } from "react-router-dom";

// NAVIGATION
import Nav from "./components/nav.js";
// PAGES
// import Home from "./pages/home";
import About from "./pages/about";
import Database from "./pages/database";
import Profile from "./pages/myprofile";
import Food from "./pages/food";
import Login from "./components/login";


import "./index.css";



const App = () => (
    <div>
        <Nav />
        <div className="container">
            {/* <Route exact={true} path="/" component={Home} /> */}
            <Route exaxt path="/about" component={About} />
            <Route exact path="/database" component={Database} />
            <Route exact path="/myprofile" component={Profile} />
            <Route exact path="/food" component={Food} />
            <Route exact path="/login" component={Login} />   
        </div>
    </div>
);

render(
    <Router>
        <App />
    </Router>,
    document.getElementById("root")
);
