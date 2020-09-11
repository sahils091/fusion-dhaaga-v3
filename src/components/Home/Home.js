import React from "react";
import "./home.css";
import Banner from "../../assets/thread.jpg";
import Product from "../Product/Product";
import ShopWomen from "../../assets/ShopWomen.jpg";

const Home = () => {
  return (
    <main className="home">
      <div className="home__banner-container">
        <img src={Banner} alt="banner" className="home__banner" />
      </div>
      <div className="home__row">
        <Product
          id="123"
          title="Hello product"
          image={ShopWomen}
          price="20"
          rating={2}
        />

        <Product
          id="123"
          title="Hello product"
          image={ShopWomen}
          price="20"
          rating={2}
        />

        <Product
          id="123"
          title="Hello product"
          image={ShopWomen}
          price="20"
          rating={2}
        />

        <Product
          id="123"
          title="Hello product"
          image={ShopWomen}
          price="20"
          rating={2}
        />
        <Product
          id="123"
          title="Hello product"
          image={ShopWomen}
          price="20"
          rating={2}
        />
        <Product
          id="123"
          title="Hello product"
          image={ShopWomen}
          price="20"
          rating={2}
        />
        <Product
          id="123"
          title="Hello product"
          image={ShopWomen}
          price="20"
          rating={2}
        />
        <Product
          id="123"
          title="Hello product"
          image={ShopWomen}
          price="20"
          rating={2}
        />
      </div>
    </main>
  );
};

export default Home;
