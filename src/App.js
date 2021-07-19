import React from 'react'
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './Componenets/Home';
import { Route } from 'react-router-dom';
import Cart from './Layout/Cart/AddToCart';
import NavbarHeader from './Componenets/Navbar';
import Producinfo from './Layout/DetailsOfProduct';


function App() {
  return (
    <>
    <NavbarHeader/>
      <Route exact path="/">
        <Home />
      </Route>
      <Route exact path="/AddToCart">
        <Cart />
      </Route>
      <Route exact path="/More_about-product-{id}=:id/:cat">
        <Producinfo />
      </Route>
    </>
  );
}

export default App;
