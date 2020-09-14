import React, { useEffect, useState } from "react";
import axios from "axios";
import Product from "../Product/Product";
import "./Women.scss";

const Women = () => {
  const [products, setProducts] = useState([]);
  const randId = () => {
    return Math.ceil(Math.random() * 2658475);
  };

  useEffect(() => {
    axios.get("http://localhost:8080/women").then((res) => {
      setProducts(res.data);
    });
  }, []);

  return (
    <div className="women">
      <div className="women__products">
        <h1 className="women__header">Our Women's Collection</h1>
        <div className="women__products-container">
          {products.map((item) => {
            return (
              <Product
                id={item.id}
                title={item.name}
                price={item.price}
                rating={item.rating}
                image={item.image}
                key={randId()}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Women;
