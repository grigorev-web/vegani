import React from "react";

export default function HeroSearch() {
  return (
    <div className="hero__search">
      <div className="hero__search__form">
        <form action="#">
          <div className="hero__search__categories">
            Категория
            <span className="arrow_carrot-down">
              <i className="fa fa-chevron-down" aria-hidden="true"></i>
            </span>
          </div>
          <input type="text" placeholder="Что вы ищете?" />
          <button type="submit" className="site-btn">
            ПОИСК
          </button>
        </form>
      </div>
      <div className="hero__search__phone">
        <div className="hero__search__phone__icon">
          <i className="fa fa-phone"></i>
        </div>
        <div className="hero__search__phone__text">
          <h5>+7 495 188-888</h5>
          <span>на связи 24/7 </span>
        </div>
      </div>
    </div>
  );
}
