import React from "react";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <div className="container">
      <div className="row">
        <div className="col-lg-3 col-md-6 col-sm-6">
          <div className="footer__about">
            <div className="footer__about__logo">
              <Link to={`${process.env.PUBLIC_URL}/`}>
                <img src="img/logo.png" alt="" />
              </Link>
            </div>
            <ul>
              <li>Адрес: 60-49 Road 11378 Москва</li>
              <li>Телефон: +7 494 188-888</li>
              <li>Email: dm-grig@mail.ru</li>
            </ul>
          </div>
        </div>
        <div className="col-lg-4 col-md-6 col-sm-6 offset-lg-1">
          <div className="footer__widget">
            <h6>Useful Links</h6>
            <ul>
              <li>
                <Link to={`${process.env.PUBLIC_URL}/about`}>About Us</Link>
              </li>
              <li>
                <Link to={`${process.env.PUBLIC_URL}/about-shop`}>
                  About Our Shop
                </Link>
              </li>
              <li>
                <Link to={`${process.env.PUBLIC_URL}/secure-shopping`}>
                  Secure Shopping
                </Link>
              </li>
              <li>
                <Link to={`${process.env.PUBLIC_URL}/delivery-info`}>
                  Delivery infomation
                </Link>
              </li>
              <li>
                <Link to={`${process.env.PUBLIC_URL}/privacy-policy`}>
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link to={`${process.env.PUBLIC_URL}/sitemap`}>
                  Our Sitemap
                </Link>
              </li>
            </ul>
            <ul>
              <li>
                <Link to={`${process.env.PUBLIC_URL}/who-we-are`}>
                  Who We Are
                </Link>
              </li>
              <li>
                <Link to={`${process.env.PUBLIC_URL}/our-sevices`}>
                  Our Services
                </Link>
              </li>
              <li>
                <Link to={`${process.env.PUBLIC_URL}/projects`}>Projects</Link>
              </li>
              <li>
                <Link to={`${process.env.PUBLIC_URL}/contacts`}>Contact</Link>
              </li>
              <li>
                <Link to={`${process.env.PUBLIC_URL}/innovation`}>
                  Innovation
                </Link>
              </li>
              <li>
                <Link to={`${process.env.PUBLIC_URL}/testimonials`}>
                  Testimonials
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="col-lg-4 col-md-12">
          <div className="footer__widget">
            <h6>Join Our Newsletter Now</h6>
            <p>Get E-mail updates about our latest shop and special offers.</p>
            <form action="#">
              <input type="text" placeholder="Enter your mail" />
              <button type="submit" className="site-btn">
                Subscribe
              </button>
            </form>
            <div className="footer__widget__social">
              <Link to={`${process.env.PUBLIC_URL}/facebook`}>
                <i className="fa fa-facebook"></i>
              </Link>
              <Link to={`${process.env.PUBLIC_URL}/instagram`}>
                <i className="fa fa-instagram"></i>
              </Link>
              <Link to={`${process.env.PUBLIC_URL}/twitter`}>
                <i className="fa fa-twitter"></i>
              </Link>
              <Link to={`${process.env.PUBLIC_URL}/pinterest`}>
                <i className="fa fa-pinterest"></i>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-lg-12">
          <div className="footer__copyright">
            <div className="footer__copyright__text">
              <p>
                {new Date().getFullYear()} 2021 All rights reserved | This
                template is made with{" "}
                <i className="fa fa-heart" aria-hidden="true"></i> by{" "}
                <Link to={`${process.env.PUBLIC_URL}/colorlib`} target="_blank">
                  Colorlib
                </Link>
              </p>
            </div>
            <div className="footer__copyright__payment">
              <img src="img/payment-item.png" alt="" /></div>
            </div>
          </div>
        </div>
      </div>
  );
}
