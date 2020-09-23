import React from "react";
import { useStateValue } from "../../StateProvider";
import "./Checkout.scss";
import CheckoutProduct from "../CheckOutProduct/CheckOutProduct";
import Subtotal from "../Subtotal/Subtotal";
import { useSpring, animated } from "react-spring";

const Checkout = () => {
  const [{ basket }] = useStateValue();
  const style = useSpring({ opacity: 1, from: { opacity: 0 } });
  const randId = () => {
    return Math.ceil(Math.random() * 2658475);
  };
  return (
    <div className="checkout animate__animated animate__fadeIn">
      <div className="checkout__image">
        <h1 className="checkout__image-title">
          {" "}
          YOUR HANDCRAFTED
          <br />
          BUNDLE OF JOY
        </h1>
      </div>

      {basket.length > 0 && (
        <animated.div style={style} className="checkout__subtotal">
          <Subtotal />
        </animated.div>
      )}

      <div className="checkout__left">
        {basket?.length === 0 ? (
          <div className="checkout__header-container">
            {" "}
            <h2 className="checkout__header">Your Cart is empty</h2>
          </div>
        ) : (
          <div className="checkout__header-container">
            <h2 className="checkout__header"> Here's Your Cart</h2>
            {basket?.map((item) => (
              <CheckoutProduct
                id={item.id}
                title={item.title}
                image={item.image}
                price={item.price}
                rating={item.rating}
                key={randId()}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Checkout;
