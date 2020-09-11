import React from "react";
import { useStateValue } from "../../StateProvider";
import "./product.css";

const Product = ({ id, title, image, price, rating }) => {
  const [ {basket},dispatch] = useStateValue();

  const addToBasket = () => {
   //add item to basket by dispatch an object 
   dispatch({
     type: 'ADD_TO_BASKET',
     item:{
       id:id,
       title: title,
       image: image,
       price: price,
       rating: rating
     }
   })


  }
  return (
    <div className="product">
      <div className="product__info">
        <p className="product__title">{title}</p>
        <p className="product__price">
          <small>$</small>
          <strong>{price}</strong>
        </p>
        <div className="product__rating">
          {Array(rating)
            .fill()
            .map((_) => {
              return <p>&#11088;</p>;
            })}
        </div>
      </div>

      <div className="product__image-container">
        <img src={image} className="product__image" />
      </div>
      <button onClick={addToBasket} className="product__btn">Add To Cart</button>
    </div>
  );
};

export default Product;
