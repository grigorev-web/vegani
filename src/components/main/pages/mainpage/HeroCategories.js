import React from 'react'
import {Link} from 'react-router-dom'

export default function HeroCategories(){
    return(
        <div className="col-lg-3">
        <div className="hero__categories">
          <div className="hero__categories__all">
            <i className="fa fa-bars"></i>
            <span>Все категории</span>
          </div>
          <ul>
            <li>
              <Link to="/">Свежее мясо</Link>
            </li>
            <li>
              <Link to="/">Овощи</Link>
            </li>
            <li>
              <Link to="/">Фрукты &amp; Орехи</Link>
            </li>
            <li>
              <Link to="/">Свежие ягоды</Link>
            </li>
            <li>
              <Link to="/">Морепродукты</Link>
            </li>
            <li>
              <Link to="/">Масло и яйца</Link>
            </li>
            <li>
              <Link to="/">Фастфуд</Link>
            </li>
            <li>
              <Link to="/">Папайя и чипсы</Link>
            </li>
            <li>
              <Link to="/">Рыба</Link>
            </li>
            <li>
              <Link to="/">Свежие бананы</Link>
            </li>
          </ul>
        </div>
      </div>
    )
}