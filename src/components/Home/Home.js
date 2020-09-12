import React from "react";
import "./home.scss";
import Banner from "../../assets/thread.jpg";
import Product from "../Product/Product";
import ShopWomen from "../../assets/ShopWomen.jpg";

const Home = () => {
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
          <Product
            id="123"
            title="Hello product"
            image={ShopWomen}
            price={20}
            rating={2}
          />

          <Product
            id="12455"
            title="Hello product"
            image={ShopWomen}
            price={20}
            rating={2}
          />

          <Product
            id="15268"
            title="Hello product"
            image={ShopWomen}
            price={20}
            rating={2}
          />
        </div>
      </div>

      <div className="home__products">
        <h1 className="home__header">Our Collection</h1>
        <div className="home__products-container">
          <Product
            id="123"
            title="Hello product"
            image={ShopWomen}
            price={20}
            rating={2}
          />

          <Product
            id="12455"
            title="Hello product"
            image={ShopWomen}
            price={20}
            rating={2}
          />

          <Product
            id="15268"
            title="Hello product"
            image={ShopWomen}
            price={20}
            rating={2}
          />
        </div>
      </div>
    </main>
  );
};

export default Home;
