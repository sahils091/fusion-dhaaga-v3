import React from "react";
import { useStateValue } from "../../StateProvider";
import "./CheckOutProduct.scss";

const CheckOutProduct = ({ id, title, image, price, rating, hideButton }) => {
  const [{}, dispatch] = useStateValue();

  const removeFromBasket = () => {
    dispatch({
      type: "REMOVE_FROM_BASKET",
      id: id,
    });
  };
  return (
    <div className="checkout-product  animate__animated animate__fadeIn">
      <img className="checkout-product__image" src={image} />
      <div className="checkout-product__info">
        <h3 className="checkout-product__title"> {title}</h3>
        <p className="checkout-product__price">
          <em>$</em>
          <strong>{price}</strong>
        </p>
        <div className="checkout-product__rating">
          {Array(rating)
            .fill()
            .map((_) => {
              return <p>&#11088;</p>;
            })}
        </div>
           {!hideButton && (
            <button onClick={removeFromBasket} className="checkout-product__btn animate__fadeOut">
          Remove from Cart
        </button>

           )}
        
      </div>
    </div>
  );
};

export default CheckOutProduct;
