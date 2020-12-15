import "./App.css";
import React from "react";
import Home from "./Pages/Home/index.js";
import Rooms from "./Pages/Rooms/index.js";
import Facilities from "./Pages/Facilities/index.js";
import ContactUs from "./Pages/ContactUs/index.js";
import NavItem from "./Components/NavItem/index.js";
import NavBar from "./Components/NavBar/index.js";
import Logo from "./Components/Logo/index.js";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function App() {
  return (
    <Router>
      <div>
        <header className="header">
          <Logo />
          <NavBar
            item1={
              <NavItem id="home" item={<Link to="/Home">Home</Link>}></NavItem>
            }
            item2={
              <NavItem
                id="facilities"
                item={<Link to="/Facilities">Facilities</Link>}
              ></NavItem>
            }
            item3={
              <NavItem
                id="rooms"
                item={<Link to="/Rooms">Rooms</Link>}
              ></NavItem>
            }
            item4={
              <NavItem
                id="contactUs"
                item={<Link to="/ContactUs">ContactUs</Link>}
              ></NavItem>
            }
          />
        </header>

        <Switch>
          <Route path="/Facilities">
            <Facilities />
          </Route>
          <Route path="/Rooms">
            <Rooms />
          </Route>
          <Route path="/ContactUs">
            <ContactUs />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
