import React from "react";
import logo from "../../img/logo.png";
import { Link } from "react-router-dom";

export default function HeaderMiddle(props) {
  return (
    <div className="container">
      <div className="row">
        <div className="col-lg-3">
          <div className="header__logo">
            <Link to="/">
              <img src={logo} alt="" />
            </Link>
          </div>
        </div>
        <div className="col-lg-6">
          <nav className="header__menu">
            <ul>
              <li className="active">
                <Link to={`${process.env.PUBLIC_URL}/`}>Главная</Link>
              </li>
              <li>
                <Link to={`${process.env.PUBLIC_URL}/shop`}>Магазин</Link>
              </li>
              <li>
                <a href="#/">Страницы</a>
                <ul className="header__menu__dropdown">
                  <li>
                    <Link to={`${process.env.PUBLIC_URL}/product`}>Страница товара</Link>
                  </li>
                  <li>
                    <Link to={`${process.env.PUBLIC_URL}/checkout`}>Корзина</Link>
                  </li>
                  <li>
                    <Link to={`${process.env.PUBLIC_URL}/blog`}>Статья блога</Link>
                  </li>
                </ul>
              </li>
              <li>
                <Link to={`${process.env.PUBLIC_URL}/blog`}>Блог</Link>
              </li>
              <li>
                <Link to={`${process.env.PUBLIC_URL}/contacts`}>Контакты</Link>
              </li>
            </ul>
          </nav>
        </div>
        <div className="col-lg-3">
          <div className="header__cart">
            <ul>
              <li>
                <a href="#/">
                  <i className="fa fa-heart"></i> <span>1</span>
                </a>
              </li>
              <li>
              <Link to={`${process.env.PUBLIC_URL}/checkout`}>
                  <i className="fa fa-shopping-bag"></i> <span>3</span>
                </Link>
              </li>
            </ul>
            <div className="header__cart__price">
              корзина: <span>$150.00</span>
            </div>
          </div>
        </div>
      </div>
      <div className="humberger__open">
        <i className="fa fa-bars"></i>
      </div>
    </div>
  );
}
