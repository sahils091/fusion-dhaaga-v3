import React, { useEffect, useState } from "react";
import axios from "axios";
import "./home.scss";
import Product from "../Product/Product";
import { useSpring, animated } from "react-spring";
import { Spring } from "react-spring/renderprops";

const Home = () => {
  const [products, setProducts] = useState([]);
  const [productList, setProductList] = useState([]);
  const [search, setSearch] = useState(null);
  const style = useSpring({ opacity: 1, from: { opacity: 0 } });

  const randId = () => {
    return Math.ceil(Math.random() * 2658475);
  };
  const searchKey = (e) => {
    let keyword = e.target.value;
    setSearch(keyword);
  };

  useEffect(() => {
    axios.get("http://localhost:8080/").then((res) => {
      setProductList(res.data);
    });
    axios.get("http://localhost:8080/new").then((res) => {
      setProducts(res.data);
    });
  }, []);
  return (
    <main className="home animate__animated animate__fadeIn">
      <div className="home__banner-container">
        <animated.div style={style}>
          <h1 className="home__banner-title">
            Handcrafted With Love <br />
            Since 2015
          </h1>
        </animated.div>
      </div>

      <Spring from={{ opacity: 0 }} to={{ opacity: 1 }}>
        {(props) => (
          <div className="home__new"  key={randId()}>
            <h1 className="home__header">New Arrivals</h1>
            <div className="home__new-products">
              {products.map((item) => {
                return (
                  <div   key={randId()}>
                    <Product
                      id={item.id}
                      title={item.name}
                      price={item.price}
                      rating={item.rating}
                      image={item.image}
                      key={randId()}
                    />
                  </div>
                );
              })}
            </div>
          </div>
        )}
      </Spring>

      <Spring
        from={{ opacity: 0 }}
        to={{ opacity: 1 }}
      >
        {(props) => (
          <div className="home__products"  key={randId()}>
            <h1 className="home__header">Our Collection</h1>
            <div className="home__search">
              <h3 className="home__form-label">Search</h3>
              <input
                className="home__form-input"
                name="search"
                placeholder="Search by Product Or color Eg. Kurta or Black.."
                type="text"
                onChange={searchKey}
              />
            </div>
            <div className="home__products-container">
              {productList
                .filter((data) => {
                  if (search === null) {
                    return data;
                  } else if (
                    data.name.toLowerCase().includes(search.toLowerCase())
                  ) {
                    return data;
                  } else if (
                    data.occasion.toLowerCase().includes(search.toLowerCase())
                  ) {
                    return data;
                  }
                })
                .map((item) => {
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
        )}
      </Spring>
    </main>
  );
};

export default Home;
