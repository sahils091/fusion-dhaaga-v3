import React, { useEffect, useState } from "react";
import "./Orders.scss";
import {db} from "../../firebase";
import { useStateValue } from "../../StateProvider";
import Order from "../Order/Order";
import Aos from "aos";
import "aos/dist/aos.css";

const Orders = () => {

  const [orders, setOrders] = useState([]);
  const [{ basket, user }, dispatch] = useStateValue();
  const randId = () => {
    return Math.ceil(Math.random() * 265847554651651381);
  };

  useEffect(()=>{
    if (user) {
      db.collection('users').doc(user?.uid).collection('orders').orderBy('created', "desc").onSnapshot(snapshot =>{
        setOrders(snapshot.docs.map(doc =>({
          id: doc.id,
          data: doc.data()
        })))
      })
   

    }else {
      setOrders([]);
    }
    Aos.init({
      duration: 2000,
    });
  },[user]);

  return (
    <div  data-aos="fade-up" className="orders   animate__animated animate__fadeIn" key={randId()}>
      <h1> Your Orders</h1>

      <div className="orders__container" key={randId()}>
           {orders?.map((order)=>{
             return(
              <Order order={order} key={randId()}
              />
             )
           })}


      </div>
    </div>
  );
};

export default Orders;
