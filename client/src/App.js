import React, { useEffect } from "react";
import "./app.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import Checkout from "./components/Checkout/Checkout";
import Login from "./components/Login/Login";
import { auth } from "./firebase";
import { useStateValue } from "./StateProvider";
import Mens from "./components/Mens/Mens";
import Women from "./components/Women/Women";
import Bespoke from "./components/Bespoke/Bespoke";
import Footer from "./components/Footer/Footer";

function App() {
  const [{}, dispatch] = useStateValue();
  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        dispatch({
          type: "SET_USER",
          user: authUser,
        });
      } else {
        dispatch({
          type: "SET_USER",
          user: null,
        });
      }
    });
  }, []);
  return (
    <Router>
      <div className="app">
        <Switch>
          <Route path="/bespoke">
            <Header />
            <Bespoke />
            <Footer/>
          </Route>
          <Route path="/women">
            <Header />
            <Women />
            <Footer/>
          </Route>
          <Route path="/mens">
            <Header />
            <Mens />
            <Footer/>
          </Route>
          <Route path="/checkout">
            <Header />
            <Checkout />
            <Footer/>
          </Route>
          <Route path="/login">
            <Header />
            <Login />
            <Footer/>
          </Route>
          <Route exact path="/">
            <Header />
            <Home />
            <Footer/>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
