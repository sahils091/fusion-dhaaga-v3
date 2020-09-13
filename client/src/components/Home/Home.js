import React, { useEffect, useState } from "react";
import axios from "axios";
import "./home.scss";
import Product from "../Product/Product";


const Home = () => {
  const [products, setProducts] = useState([]);
  const [productList, setProductList] = useState([]);

  useEffect(()=>{
   axios.get("http://localhost:8080/").then(
     res=>{
       setProductList(res.data);
     }
   )
   axios.get("http://localhost:8080/new").then(
    res=>{
      setProducts(res.data);
    }
  )

  },[])
  console.log(products)
  return (
    <main className="home">
      <div className="home__banner-container">
        <h1 className="home__banner-title">
          Handcrafted With Love <br />
          Since 2015
        </h1>
      </div>
      <div className="home__new">
        <h1 className="home__header">New Arrivals</h1>
        <div className="home__new-products">
        {products.map((item)=>{
          return (
            <Product 
            id={item.id}
            title={item.name}
            price={item.price}
            rating={item.rating} 
            image={item.image}
            />
          )
        })}
          
        </div>
      </div>

      <div className="home__products">
        <h1 className="home__header">Our Collection</h1>
        <div className="home__products-container">
        {productList.map((item)=>{
          return (
            <Product 
            id={item.id}
            title={item.name}
            price={item.price}
            rating={item.rating} 
            image={item.image}
            />
          )

        })}
         
        </div>
      </div>
    </main>
  );
};

export default Home;
