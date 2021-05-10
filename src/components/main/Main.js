import React from "react";
import MainPage from "./pages/MainPage";
import ShopPage from "./pages/ShopPage";
import ProductPage from "./pages/ProductPage";
import Blog from "./pages/Blog";
import Contacts from "./pages/Contacts";
import Checkout from "./pages/Checkout";

import { BrowserRouter as Router, Link, Switch, Route } from "react-router-dom";

export default function Main() {
  return (
    <div className="container">
      <div className="row">
        <Switch>
          <Route exact path="/">
            <MainPage />
          </Route>
          <Route path="/blog">
            <Blog />
          </Route>
          <Route path="/checkout">
            <Checkout />
          </Route>
          <Route path="/contacts">
            <Contacts />
          </Route>
          <Route path="/product">
            <ProductPage />
          </Route>
          <Route path="/shop">
            <ShopPage />
          </Route>
        </Switch>
      </div>
    </div>
  );
}
