// == Import
import './styles.scss';

import Header from '../Header';
import { Routes, Route, Link } from 'react-router-dom';
import React, { useEffect } from "react";
import ReactDOM from "react-dom";
import HomePage from 'src/components/HomePage';
import BakeryList from 'src/components/BakeryList';
import BakeryProducts from 'src/components/BakeryProducts';
import CheckoutBasket from 'src/components/CheckoutBasket';
import Checkout from 'src/components/Checkout';
import Contact from '../Contact';
import About from '../About';
import Blog from '../Blog';
import Formules from '../Formules';
import Log from 'src/components/Log';
import { useSelector, useDispatch } from 'react-redux';
import { setBakeryList } from '../../actions/actions';



// == Composant
const App = () => {
  const currentAdress = useSelector((state) => state.currentAdress);
  console.log(currentAdress)
  const sidebar = useSelector((state) => state.sidebar);
  const axios = require('axios');
  const dispatch = useDispatch();

  useEffect(() => {
    /* axios.get('http://anthonyouzhene-server.eddi.cloud/projet-04-break-fast-back/public/api/bakery')
    .then(function (response) {
     console.log(response);
     const action = setBakeryList(response.data);
     dispatch(action);
    })
    .catch(function (error) {
      // handle error
      console.log(error);
    }) */

    

    axios
      .post("http://anthonyouzhene-server.eddi.cloud/projet-04-break-fast-back/public/index.php/api/login_check", {
        headers:{
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            "username": "admin@breakfast.com",
	          "password": "admin"
          })
      })
      .then((response) => {
        console.log(response); // ici l'api me répond directement un object contenant le jeton dans une propriété token
      });
   
  }, [])

  return (
    <div className={!sidebar ? "app" : "app menu-active"}>
      <Header />
      <Routes>
        <Route path="/login" element={<Log />} />
        <Route path="/" element={!currentAdress ? <HomePage /> : <BakeryList />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/basket" element={<CheckoutBasket />} />
        <Route path="/formules" element={<Formules />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        {/* <Route path="/bakery/list" element={<BakeryList />} /> */}
        <Route path="/bakery/list/products" element={<BakeryProducts />} />
      </Routes>
    </div>
  );
}

// == Export
export default App;
