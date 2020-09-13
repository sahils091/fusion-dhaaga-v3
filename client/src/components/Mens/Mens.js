import React, { useEffect, useState } from "react";
import axios from "axios";
import "./Mens.scss";
import Product from "../Product/Product";

const Mens = (props) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:8080/mens").then((res) => {
      setProducts(res.data);
    });
  }, []);

  return (
    <div className="mens">
      <div className="mens__products">
        <h1 className="mens__header">Our Mens Collection</h1>
        <div className="mens__products-container">
          {products.map((item) => {
            return (
              <Product
                id={item.id}
                title={item.name}
                price={item.price}
                rating={item.rating}
                image={item.image}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Mens;
