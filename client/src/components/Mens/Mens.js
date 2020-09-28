import React, { useEffect, useState } from "react";
import axios from "axios";
import "./Mens.scss";
import Product from "../Product/Product";
import Aos from "aos";
import "aos/dist/aos.css";

const Mens = (props) => {
  const [products, setProducts] = useState([]);

  const randId = () => {
    return Math.ceil(Math.random() * 2658475);
  };

  useEffect(() => {
    axios.get("http://localhost:8080/mens").then((res) => {
      setProducts(res.data);
    });

      Aos.init({
        duration: 2000,
      });
  }, []);

  return (
    <div data-aos="fade-up" className="mens animate__animated animate__fadeIn">
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
                key={randId()}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Mens;
