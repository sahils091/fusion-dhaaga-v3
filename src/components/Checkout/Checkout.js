import React from "react";
import { useStateValue } from "../../StateProvider";
import "./Checkout.scss";
import scarf2 from "../../assets/scarf2.jpg";
import CheckoutProduct from "../CheckOutProduct/CheckOutProduct";
import Subtotal from "../Subtotal/Subtotal";

const Checkout = () => {
  const [{ basket, user }] = useStateValue();
  console.log("Check basket", basket);
  return (
    <div className="checkout">
      <div className="checkout__image"></div>

      {basket.length > 0 && (
        <div className="checkout__subtotal">
          <Subtotal />
        </div>
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
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Checkout;
