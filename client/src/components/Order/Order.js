import React from "react";
import "./Order.scss";
import moment from "moment";
import CheckOutProduct from "../CheckOutProduct/CheckOutProduct";
import CurrencyFormat from "react-currency-format";

const Order = ({ order }) => {
  const randId = () => {
    return Math.ceil(Math.random() * 2658475);
  };
  return (
    <div className="order" key={randId()}>
      <h2 className="order__header">Order</h2>

      <CurrencyFormat
        renderText={(value) => (
          <h3 className="order__total">Order Total : {value}</h3>
        )}
        decimalScale={2}
        value={order.data.amount / 100}
        displayType={"text"}
        thousandSeparator={true}
        prefix={"$"}
      />
      <div className="order__info-wrapper">
        <p className="order__timestamp">
          {" "}
          Ordered On:{" "}
          {moment.unix(order.data.created).format("MMM Do YYYY, h:mma")}
        </p>
        <p className="order__id">Order ID:{order.id}</p>
      </div>

      {order.data.basket?.map((item) => {
        return (
          <div className="order__item" key={randId()}>
            <CheckOutProduct
              id={item.id}
              title={item.title}
              image={item.image}
              price={item.price}
              rating={item.rating}
              hideButton
              key={randId()}
            />
          </div>
        );
      })}
    </div>
  );
};

export default Order;
