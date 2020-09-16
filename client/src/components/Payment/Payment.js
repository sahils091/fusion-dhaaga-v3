import React, { useEffect, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import "./Payment.scss";
import { useStateValue } from "../../StateProvider";
import CheckOutProduct from "../CheckOutProduct/CheckOutProduct";
import { useStripe, useElements, CardElement } from "@stripe/react-stripe-js";
import CurrencyFormat from "react-currency-format";
import { getBasketTotal } from "../../reducer";
import axios from "../../axios";
import {db} from "../../firebase";

const Payment = () => {
  const [{ basket, user }, dispatch] = useStateValue();
  const stripe = useStripe();
  const elements = useElements();
  const history = useHistory();

  const [succeeded, setSucceeded] = useState(false);
  const [processing, setProcessing] = useState("");
  const [error, setError] = useState(null);
  const [disabled, setDisabled] = useState(true);
  const [clientSecret, setClientSecret] = useState(true);

  useEffect(() => {
    //generate stripe secret key to charge a customer.

    const getClientSecret = async () => {
      const response = await axios({
        method: "post",
        //stripe needs expects total in currency subUnit
        url: `/payments/create?total=${getBasketTotal(basket) * 100}`,
      });
      setClientSecret(response.data.clientSecret);
    };

    getClientSecret();
  }, [basket]);

  console.log("THe secret is ", clientSecret);
  console.log("person===", user);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setProcessing(true);

    const payload = await stripe
      .confirmCardPayment(clientSecret, {
        payment_method: {
          card: elements.getElement(CardElement),
        }, // de-structure confirmation from response: called paymentIntent from stripe.
      })
      .then(({ paymentIntent }) => {

          db.collection('users').doc(user?.uid).collection('orders').doc(paymentIntent.id).set({
            basket: basket,
            amount: paymentIntent.amount,
            created: paymentIntent.created
          })

        setSucceeded(true);
        setError(null);
        setProcessing(false);
        dispatch({
          type: "EMPTY_BASKET",
        });

        history.replace("/orders");
      });
  };

  const handleChange = (e) => {
    //listen for changes in the CardElement
    // Display any errors as the user types in the details.

    setDisabled(Event.empty);
    setError(Event.error ? Event.error.message : "");
  };
  return (
    <div className="payment">
      <h1 className="payment__header">
        Checkout (<Link className="payment__header--link" to="/checkout">{basket.length} Items</Link>)
      </h1>

      <div className="payment__container">
        <div className="payment__section">
          {/* <div className="payment__section-title">
            <h3>Delivery Address</h3>
          </div>
          <div className="payment__address">
            <p>{user?.email}</p>
            <p>123 React Lane, </p>
            <p>LA, CA</p>
          </div> */}
        </div>

        <div className="payment__section">
          <div className="payment__section-title">
            <h3>Review Items and Delivery</h3>
          </div>
          <div className="payment__items">
            {basket.map((item) => {
              return (
                <CheckOutProduct
                  id={item.id}
                  title={item.title}
                  image={item.image}
                  price={item.price}
                  rating={item.rating}
                />
              );
            })}
          </div>
        </div>

        <div className="payment__section">
          <div className="payment__section-title">
            <h3>Payment Method</h3>
          </div>
          <div className="payment__details">
            <form onSubmit={handleSubmit}>
              <CardElement onChange={handleChange} />
              <div className="payment__price-container">
                <CurrencyFormat
                  renderText={(value) => (
                    <>
                      <h3>Order Total : {value}</h3>
                    </>
                  )}
                  decimalScale={2}
                  value={getBasketTotal(basket)}
                  displayType={"text"}
                  thousandSeparator={true}
                  prefix={"$"}
                />
                <button className="payment__btn" disabled={processing || disabled || succeeded}>
                  <span>{processing ? <p>Processing</p> : "Buy Now"}</span>
                </button>
              </div>
              {error && <div>{error}</div>}
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Payment;
