import React from "react";

import HeroCategories from "./mainpage/HeroCategories";
import HeroSearch from "./mainpage/HeroSearch";
import HeroItem from './mainpage/HeroItem';
export default function MainPage() {
  return (
    <div className="container">
      <div className="row">
        <HeroCategories />

        <div className="col-lg-9">
          <HeroSearch />

          <HeroItem />
        </div>
      </div>
    </div>
  );
}
