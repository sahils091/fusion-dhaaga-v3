import React from "react";
import { useStateValue } from "../../StateProvider";
import "./product.scss";

const Product = ({ id, title, image, price, rating }) => {
  const [{}, dispatch] = useStateValue();
  const randId = () => {
    return Math.ceil(Math.random() * 2658475);
  };

  const addToBasket = () => {
    //add item to basket by dispatch an object
    dispatch({
      type: "ADD_TO_BASKET",
      item: {
        id: id,
        title: title,
        image: image,
        price: price,
        rating: rating,
      },
    });
  };
  return (
    <div className="product ">
      <div className="product__image-container">
        <img src={image} className="product__image" alt={title} />
      </div>
      <div className="product__info">
        <h4 className="product__title">{title}</h4>
        <p className="product__price">
          <em>$</em>
          <strong>{price}</strong>
        </p>
        <div className="product__rating">
          {Array(rating)
            .fill()
            .map((_) => {
              return (
                <p key={randId()}>
                  <span aria-label="Star Emoji">&#11088;</span>
                </p>
              );
            })}
        </div>
      </div>

      <button onClick={addToBasket} className="product__btn">
        Add To Cart
      </button>
    </div>
  );
};

export default Product;
