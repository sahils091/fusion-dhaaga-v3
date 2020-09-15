import React from "react";
import "./Footer.scss";
import iconFb from "../../assets/icon1.svg";
import iconTw from "../../assets/icon2.svg";
import iconIns from "../../assets/icon3.svg";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer__option-wrapper">
        <div className="footer__option">
          <h2 className="footer__option-title">About Fusion Dhaaga</h2>
          <h3 className="footer__option-blurb">Our Story</h3>
          <h3 className="footer__option-blurb">Blog</h3>
          <h3 className="footer__option-blurb">Testimonials</h3>
        </div>

        <div className="footer__option">
          <h2 className="footer__option-title">Contact Us</h2>
          <h3 className="footer__option-blurb">Phone: (547)12354564</h3>
          <h3 className="footer__option-blurb">Email: info@fusion.ca</h3>
        </div>

        <div className="footer__option ">
          <h2 className="footer__option-title">Social</h2>
          <h3 className="footer__option-blurb">
            <img src={iconFb} alt="Facebook" />
          </h3>
          <h3 className="footer__option-blurb">
            <img src={iconIns} alt="Instagram" />
          </h3>
          <h3 className="footer__option-blurb">
            <img src={iconTw} alt="Twitter" />
          </h3>
        </div>
      </div>
      <div className="footer__copy">
        <h3 className="footer__copy-text">
          &#169; Fusion Inc. All Rights Reserved.
        </h3>
      </div>
    </div>
  );
};

export default Footer;
