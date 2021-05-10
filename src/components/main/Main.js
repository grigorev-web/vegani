import React from "react";
import MainPage from "./pages/MainPage";
import ShopPage from "./pages/ShopPage";
import ProductPage from "./pages/ProductPage";
import Blog from "./pages/Blog";
import Contacts from "./pages/Contacts";
import Checkout from "./pages/Checkout";

import { Switch, Route } from "react-router-dom";

export default function Main() {
  return (
    <div className="container">
      <div className="row">
        <Switch>
          <Route exact path="/vegani/build/">
            <MainPage />
          </Route>
          <Route path="/vegani/build/blog">
            <Blog />
          </Route>
          <Route path="/vegani/build/checkout">
            <Checkout />
          </Route>
          <Route path="/vegani/build/contacts">
            <Contacts />
          </Route>
          <Route path="/vegani/build/product">
            <ProductPage />
          </Route>
          <Route path="/vegani/build/shop">
            <ShopPage />
          </Route>
        </Switch>
      </div>
    </div>
  );
}
