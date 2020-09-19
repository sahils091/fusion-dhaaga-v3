import React from "react";
import "./Order.scss";
import moment from "moment";
import CheckOutProduct from "../CheckOutProduct/CheckOutProduct";
import CurrencyFormat from "react-currency-format";

const Order = ({ order }) => {
  return (
    <div className="order">
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
          <div className="order__item">
            <CheckOutProduct
              id={item.id}
              title={item.title}
              image={item.image}
              price={item.price}
              rating={item.rating}
              hideButton
            />
          </div>
        );
      })}
    </div>
  );
};

export default Order;
