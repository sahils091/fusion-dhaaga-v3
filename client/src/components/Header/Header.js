import React from "react";
import { Link, NavLink } from "react-router-dom";
import ShoppingBasket from "@material-ui/icons/ShoppingCart";
import logo1 from "../../assets/logo1.png";
import "./header.scss";
import { useStateValue } from "../../StateProvider";
import { auth } from "../../firebase";



const Header = () => {
  const [{ basket, user }] = useStateValue();
  const handleAuthentication = () => {
    if (user) {
      auth.signOut();
    }
  };
  return (
    <nav className="header">
      <div className="header__logo-container">
        <Link to="/">
          <img className="header__logo" src={logo1} alt="Fusion" />
        </Link>
      </div>

      <div className="header__link-container">
        <NavLink
          to="/profile"
          className="header__link"
          activeClassName="header__link--active"
        >
          <div className="header__link-options">
            <span className="header__link-one">{user ? "Returns" : null}</span>
            <span className="header__link-two">{user ? "Orders" : null} </span>
          </div>
        </NavLink>
        <NavLink
          to="/mens"
          className="header__link"
          activeClassName="header__link--active"
        >
          <div className="header__link-options">
            <span className="header__link-one"> </span>
            <span className="header__link-two">Mens</span>
          </div>
        </NavLink>
        <NavLink
          to="/women"
          className="header__link"
          activeClassName="header__link--active"
        >
          <div className="header__link-options">
            <span className="header__link-one"> </span>
            <span className="header__link-two">Women</span>
          </div>
        </NavLink>
        <NavLink
          to="/bespoke"
          className="header__link"
          activeClassName="header__link--active"
        >
          <div className="header__link-options">
            <span className="header__link-one"> </span>
            <span className="header__link-two">Bespoke</span>
          </div>
        </NavLink>
      </div>
      <div className="header__basket-container">
        <div className="header__option-basket">
          <NavLink
            to={!user && "/login"}
            className="header__link"
            activeClassName="header__link--active"
          >
            <div
              onClick={handleAuthentication}
              className="header__link-options"
            >
              <span className="header__link-one"></span>
              <span className="header__link-two">
                {user ? "Sign out" : "Sign-In/Register"}
              </span>
            </div>
          </NavLink>

          <NavLink
            to="/checkout"
            className="header__link"
            activeClassName="header__link--active"
          >
            <span className="header__link-two">Shopping Cart</span>
          </NavLink>
          <NavLink to="/checkout" className="header__link">
            <div className="header__cart-container">
              <ShoppingBasket />
              <span className="header__link-two header__basket-count">
                {basket?.length}
              </span>
            </div>
          </NavLink>
        </div>
      </div>
    </nav>
  );
};

export default Header;
