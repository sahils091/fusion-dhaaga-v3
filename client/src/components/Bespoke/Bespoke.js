import React from "react";
import axios from "axios";
import "./Bespoke.scss";
import bespoke1 from "../../assets/bespoke1.jpg";
import bespoke2 from "../../assets/bespoke2.jpg";
import bespoke3 from "../../assets/bespoke3.jpg";

const Bespoke = () => {
  const submitHandler = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const email = e.target.email.value;
    const phone = e.target.phone.value;
    const appointment = e.target.appointment.value;
    const date = e.target.date.value;
    const message = e.target.message.value;
    axios
      .post("http://localhost:8080/user/message", {
        name: name,
        email: email,
        phone: phone,
        appointment: appointment,
        date: date,
        message: message,
      })
      .then((res) => {
        console.log(res);
        return res;
      })
      .catch((error) => {
        console.warn(error);
      });
  };
  return (
    <div className="bespoke animate__animated animate__fadeIn">
      <div className="bespoke__banner">
        <div className="bespoke__banner-text">
          <h1 className="bespoke__banner-title">BESPOKE</h1>

          <h2 className="bespoke__banner-subtitle">BOOK AN APPOINTMENT</h2>
        </div>
      </div>

      <div className="bespoke__blurb">
        <h1 className="bespoke__blurb-header">The Bespoke Service</h1>
        <p className="bespoke__blurb-text">
          {" "}
          Designs Customised To Personalised Specification?Using our Bespoke
          Service clients are able to customise existing designs from the Indian
          Bridal wear, Indian Fashion and western gowns collections to their
          personal specification.?Go one step further and upgrade your designer
          Indian clothing by customising your chosen design.
        </p>
      </div>
      <h2 className="bespoke__blurb-title">What To Expect</h2>
      <div className="bespoke__options">
        <h3 className="bespoke__options-header">1. Colours</h3>
        <div className="bespoke__options-container">
          <p className="bespoke__options-blurb bespoke__options-blurb--first">
            Colour selection is an art in itself, especially when it comes to
            combinations. You will receive expert advice; taking into
            consideration your taste, the style and embroidery of the design,
            the suitability for the occasion and your complexion, to help you
            select the perfect combination for you. In addition to the shades
            available from a thread based colour card, we offer a range of
            handpicked colours, which include forecast colour trends.
          </p>
          <div className="bespoke__img-container">
            <img
              className="bespoke__options-img"
              src={bespoke1}
              alt="bespoke"
            />
          </div>
        </div>
      </div>
      <div className="bespoke__options">
        <h3 className="bespoke__options-header">2. Structural Changes</h3>
        <div className="bespoke__options-container">
          <div className="bespoke__img-container">
            <img
              className="bespoke__options-img"
              src={bespoke2}
              alt="bespoke"
            />
          </div>
          <p className="bespoke__options-blurb ">
            The bespoke service offers you the benefit of making a changes to
            the structure of a design, for example add or detract sleeves; minor
            modifications to the necklines; change hemlines within reason, etc.
            Reasonable requests which do not require substantial changes to the
            style will be considered and accommodated where possible.
          </p>
        </div>
      </div>
      <div className="bespoke__options">
        <h3 className="bespoke__options-header">3. Made-to-measure</h3>
        <div className="bespoke__options-container">
          <p className="bespoke__options-blurb bespoke__options-blurb--first">
            Perhaps most importantly the Bespoke Service includes a
            made-to-measure service. We take up to thirty measurements and use
            them to draft a personalised pattern tailored to your body for the
            design of your choice. The embroidery traces are then redrafted so
            that the embroideries/ embellishments synchronise with your
            personalised pattern.
          </p>
          <div className="bespoke__img-container">
            <img
              className="bespoke__options-img  bespoke__options--image-last"
              src={bespoke3}
              alt="bespoke"
            />
          </div>
        </div>
      </div>

      <div className="bespoke__form-wrapper">
        <div className="bespoke__form-container">
          <h1 className="bespoke__form-header">Book an Appointment</h1>
          <form className="bespoke__form" onSubmit={submitHandler}>
            <h3 className="bespoke__form-label">Full Name *</h3>
            <input
              className="bespoke__form-input"
              type="text"
              name="name"
              id="name"
            />

            <h3 className="bespoke__form-label">Email *</h3>
            <input
              className="bespoke__form-input"
              type="text"
              name="email"
              id="email"
            />
            <h3 className="bespoke__form-label">Appointment Type *</h3>
            <input
              className="bespoke__form-input"
              type="email"
              name="appointment"
              id="appointment"
            />
            <h3 className="bespoke__form-label">Phone *</h3>
            <input
              className="bespoke__form-input"
              type="number"
              name="phone"
              id="phone"
            />

            <h3 className="bespoke__form-label">
              Preferred Appointment Date * (DD/MM/YYYY)
            </h3>
            <input
              className="bespoke__form-input"
              type="text"
              name="date"
              id="date"
            />
            <h3 className="bespoke__form-label">Your Message</h3>
            <textarea
              className="bespoke__form-input"
              name="message"
              id="message"
            ></textarea>

            <button type="submit" className="bespoke__btn-signin">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Bespoke;
