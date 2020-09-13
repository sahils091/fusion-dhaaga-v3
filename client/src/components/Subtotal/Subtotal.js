import React from "react";
import CurrencyFormat from "react-currency-format";
import { getBasketTotal } from "../../reducer";
import { useStateValue } from "../../StateProvider";
import "./Subtotal.scss";

const Subtotal = () => {
  const [{ basket }] = useStateValue();
  return (
    <div className="subtotal">
      <CurrencyFormat
        renderText={(value) => (
          <>
            <h2 className="subtotal__display">
              Subtotal ({basket.length} items): <strong>{value}</strong>
            </h2>
          </>
        )}
        decimalScale={2}
        value={getBasketTotal(basket)}
        displayType={"text"}
        prefix={"$"}
      />
      <button className="subtotal__btn">Proceed To Checkout</button>
    </div>
  );
};

export default Subtotal;
