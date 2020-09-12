import React from "react";
import "./app.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import Checkout from "./components/Checkout/Checkout"

function App() {
  return (
    <Router>
      <div className="app">
        <Switch>
          <Route path="/checkout">
           <Header/>
           <Checkout/>  
          </Route>
          <Route path="/login">
            <h1>Login</h1>
          </Route>
          <Route exact path="/">
            <Header />
            <Home/>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
