import React from 'react';
import './App.css';
import Welcome from "./components/welcome/Welcome";
import Clock from "./components/clock/Clock";
import Contact from "./components/contact/Contact"
import Navigation from "./components/navigation/Navigation"

//Import the Route component
import { Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
        <Navigation />
        <Route exact path="/" render={(props)=><Welcome {...props} name="eric"/>} />
        <Route path="/clock" component={Clock} />
        <Route path="/contact" component={Contact} />
    </div>
  );
}

export default App;
