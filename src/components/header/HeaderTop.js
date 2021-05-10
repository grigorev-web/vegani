import React from "react";

export default function HeaderTop() {
  return (
    <div className="header__top">
      <div className="container">
        <div className="row">
          <div className="col-lg-6 col-md-6">
            <div className="header__top__left">
              <ul>
                <li>
                  <i className="fa fa-envelope"></i> dm-grig@mail.ru
                </li>
                <li>Бесплатная доставка от $99</li>
              </ul>
            </div>
          </div>
          <div className="col-lg-6 col-md-6">
            <div className="header__top__right">
              <div className="header__top__right__social">
                <a href="#">
                  <i className="fa fa-facebook"></i>
                </a>
                <a href="#">
                  <i className="fa fa-twitter"></i>
                </a>
                <a href="#">
                  <i className="fa fa-linkedin"></i>
                </a>
                <a href="#">
                  <i className="fa fa-pinterest-p"></i>
                </a>
              </div>
              <div className="header__top__right__language">
                <img src="img/language.png" alt="" />
                <div>Русский</div>
                <span className="arrow_carrot-down"></span>
                <ul>
                  <li>
                    <a href="#">English</a>
                  </li>
                  <li>
                    <a href="#">Русский</a>
                  </li>
                </ul>
              </div>
              <div className="header__top__right__auth">
                <a href="#">
                  <i className="fa fa-user"></i> Войти
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
