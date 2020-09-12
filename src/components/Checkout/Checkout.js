import React from 'react';
import { useStateValue } from '../../StateProvider';
import "./Checkout.css";
import scarf2 from "../../assets/scarf2.jpg";
import CheckoutProduct from "../CheckOutProduct/CheckOutProduct";

const Checkout = () => {
    const [{basket}] = useStateValue();
    console.log("Check basket", basket)
    return (
        <div className="checkout">
        <div className="checkout__image-container">
        <img src={scarf2} alt="checkout image" className="checkout__image"/> 
        </div>
        {basket?.length === 0 ? (
            <div> <h2 className="checkout__header">Your Cart is empty</h2></div>): 
            (
            <div className="checkout__header-container">
             <h2 className="checkout__header"> Your Cart</h2>
              {basket?.map(item =>
              <CheckoutProduct 
               id={item.id}
               title={item.title}
               image={item.image}
               price={item.price}
               rating={item.rating}
              />
              )}
        

              </div>
        )
        } 
            
        </div>
    );
};

export default Checkout;