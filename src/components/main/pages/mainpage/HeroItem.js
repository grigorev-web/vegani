import React from 'react';
import { Link } from "react-router-dom";
import banner from "../../../../img/banner.jpg";



export default function HeroItem(){
    return(
        <div
        className="hero__item set-bg"
        //data-setbg="img/hero/banner.jpg"
        style={{ backgroundImage: `url("${banner}")` }}
      >
        <div className="hero__text">
          <span>СВЕЖИЕ ФРУКТЫ</span>
          <h2>Овощи 100% Натуральные</h2>
          <p>Самовывоз и доставка за 45 мин</p>
          <Link to="/" className="primary-btn">
            SHOP NOW
          </Link>
        </div>
      </div>
    )
}