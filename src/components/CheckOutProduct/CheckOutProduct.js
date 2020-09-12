import React from "react";
import { useStateValue } from "../../StateProvider";
import "./CheckOutProduct.css";

const CheckOutProduct = ({ id, title, image, price, rating }) => {
  const [{ basket }, dispatch] = useStateValue();

  const removeFromBasket = () => {
    dispatch({
      type: "REMOVE_FROM_BASKET",
      id: id,
    });
  };
  return (
    <div className="checkout-product">
      <div className="checkout-product__left">
        <img className="checkout-product__image" src={image} />
        <div className="checkout-product__info">
          <p className="checkout-product__title"> {title}</p>
          <p className="checkout-product__price">
            <small>$</small>
            <strong>{price}</strong>
          </p>
          <div className="checkout-product__rating">
            {Array(rating)
              .fill()
              .map((_) => {
                return <p>&#11088;</p>;
              })}
          </div>

          <button onClick={removeFromBasket} className="checkout-product__btn">
            Remove from Basket
          </button>
        </div>
      </div>
      
      {basket.length > 0 && (
        <div className="checkout-product__right">
        <h1>Subtotal</h1>
            {/* <Subtotal/> */}
        </div>
      )}

      
    </div>
  );
};

export default CheckOutProduct;
