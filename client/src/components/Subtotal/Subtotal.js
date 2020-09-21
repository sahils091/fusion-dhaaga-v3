import React from "react";
import CurrencyFormat from "react-currency-format";
import { getBasketTotal } from "../../reducer";
import { useStateValue } from "../../StateProvider";
import  {useHistory} from "react-router-dom";
import "./Subtotal.scss";

const Subtotal = () => {
  const [{ basket }] = useStateValue();
  const history = useHistory();
  return (
    <div className="subtotal animate__animated animate__fadeIn">
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
      <button onClick={e => history.push("/payment")} className="subtotal__btn">Proceed To Checkout</button>
    </div>
  );
};

export default Subtotal;
