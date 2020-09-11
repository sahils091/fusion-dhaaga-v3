import React from "react";
import { Link } from "react-router-dom";
import SearchIcon from "@material-ui/icons/Search";
import ShoppingBasket from "@material-ui/icons/ShoppingCart";
import logo from "../../assets/Fusion.png";
import "./header.css";

// logo on left
//search bar
// header Links
//basket shopping cart

const Header = () => {
  return (
    <nav className="header">
      <div className="header__logo-container">
        <Link to="/">
          <img className="header__logo" src={logo} alt="logo" />
        </Link>
      </div>
      <div className="header__search-container">
        <input className="header__search" />
        <SearchIcon className="header__search-icon" />
      </div>
      <div className="header__link-container">
        <Link to="/login" className="header__link">
          <div className="header__link-options">
            <span className="header__link-one">Hello </span>
            <span className="header__link-two">Sign IN</span>
          </div>
        </Link>

        <Link to="/" className="header__link">
          <div className="header__link-options">
            <span className="header__link-one">Returns </span>
            <span className="header__link-two"> Orders</span>
          </div>
        </Link>

        <Link to="/" className="header__link">
          <div className="header__link-options">
            <span className="header__link-one"> Your </span>
            <span className="header__link-two"> Loyalty</span>
          </div>
        </Link>
      </div>
      <div className="header__basket-container">
        <Link to="/checkout" className="header__link">
          <div className="header__option-basket">
            <span className="header__link-two header__basket-count">0</span>
            <ShoppingBasket />
          </div>
        </Link>
      </div>
    </nav>
  );
};

export default Header;
