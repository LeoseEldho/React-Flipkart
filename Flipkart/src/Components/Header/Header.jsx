import React from "react";
import "../Styles/HeaderStyle.css";

const Header = () => {
  return (
    <div className="header">
      <div className="header-top">
        <div className="header-container">
          <div className="header-logo">
            <a href="" className="header-logo-img">
              <img
                alt="Menu"
                src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNSIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI1IDI0IiBmaWxsPSJub25lIj4KPGcgY2xpcC1wYXRoPSJ1cmwoI2NsaXAwXzExNzg3Xzg3NzY3KSI+CjxwYXRoIGQ9Ik00LjUgMTJIMjAuNSIgc3Ryb2tlPSJibGFjayIgc3Ryb2tlLXdpZHRoPSIxLjQiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIvPgo8cGF0aCBkPSJNNC41IDYuMjVIMjAuNSIgc3Ryb2tlPSJibGFjayIgc3Ryb2tlLXdpZHRoPSIxLjQiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIvPgo8cGF0aCBkPSJNNC41IDE3Ljc1SDIwLjUiIHN0cm9rZT0iYmxhY2siIHN0cm9rZS13aWR0aD0iMS40IiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiLz4KPC9nPgo8ZGVmcz4KPGNsaXBQYXRoIGlkPSJjbGlwMF8xMTc4N184Nzc2NyI+CjxyZWN0IHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0id2hpdGUiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDAuNSkiLz4KPC9jbGlwUGF0aD4KPC9kZWZzPgo8L3N2Zz4K"
                width="24"
                height="24"
              ></img>
            </a>
            <div className="header-img">
              <a href="">
                <picture title="Flipkart"><source srcSet="https://static-assets-web.flixcart.com/batman-returns/batman-returns/p/images/fkheaderlogo_exploreplus-44005d.svg" media="(min-width:767px)"/><source srcSet="https://static-assets-web.flixcart.com/batman-returns/batman-returns/p/images/fkheaderlogo_exploreplus_mobile-39120d.svg" media="(max-width:766px)"/><img src="https://static-assets-web.flixcart.com/batman-returns/batman-returns/p/images/fkheaderlogo_exploreplus-44005d.svg" width="160" height="40" title="Flipkart"/></picture>
              </a>
            </div>
            <div>
              <div className="header-search-box">
                <div className="header-search-container">
                  <div className="header-search-container-btn"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><title>Search Icon</title><path d="M10.5 18C14.6421 18 18 14.6421 18 10.5C18 6.35786 14.6421 3 10.5 3C6.35786 3 3 6.35786 3 10.5C3 14.6421 6.35786 18 10.5 18Z" stroke="#717478" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"></path><path d="M16 16L21 21" stroke="#717478" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"></path></svg></div>
                  <div className="header-search-container-text"><input  type="text" title="Search for Products, Brands and More" name="q" placeholder="Search for Products, Brands and More" fdprocessedid="40if6a"/></div>
                </div>
              </div>
            </div>
          </div>
          <div className="header-cart">
            <div>
              <a href="" className="header-cart-list">
                <img className="header-download"
                  src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIj4KICA8ZyBjbGlwLXBhdGg9InVybCgjY2xpcDBfMTE1NzBfODc5OTgpIj4KICAgIDxwYXRoIGQ9Ik0xOCAyMC4yNVYzLjc1QzE4IDIuOTIxNTcgMTcuMzI4NCAyLjI1IDE2LjUgMi4yNUw3LjUgMi4yNUM2LjY3MTU3IDIuMjUgNiAyLjkyMTU3IDYgMy43NUw2IDIwLjI1QzYgMjEuMDc4NCA2LjY3MTU3IDIxLjc1IDcuNSAyMS43NUgxNi41QzE3LjMyODQgMjEuNzUgMTggMjEuMDc4NCAxOCAyMC4yNVoiIHN0cm9rZT0iYmxhY2siIHN0cm9rZS13aWR0aD0iMS40IiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiLz4KICAgIDxwYXRoIGQ9Ik0xMiAxMC4xMDU1TDEyIDE3LjYwNTUiIHN0cm9rZT0iYmxhY2siIHN0cm9rZS13aWR0aD0iMS40IiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiLz4KICAgIDxwYXRoIGQ9Ik05Ljc1IDE1LjM1NTVMMTIgMTcuNjA1NUwxNC4yNSAxNS4zNTU1IiBzdHJva2U9ImJsYWNrIiBzdHJva2Utd2lkdGg9IjEuNCIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIi8+CiAgICA8cGF0aCBkPSJNMTAuNSA0LjVIMTMuNSIgc3Ryb2tlPSJibGFjayIgc3Ryb2tlLXdpZHRoPSIxLjQiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIvPgogIDwvZz4KICA8ZGVmcz4KICAgIDxjbGlwUGF0aCBpZD0iY2xpcDBfMTE1NzBfODc5OTgiPgogICAgICA8cmVjdCB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIGZpbGw9IndoaXRlIi8+CiAgICA8L2NsaXBQYXRoPgogIDwvZGVmcz4KPC9zdmc+Cg=="
                  width="24"
                  height="24"
                  alt="Get App"
                />{" "}
              </a>
            </div>
            <div>
              <div className="header-login">
                <div></div>
                <a href="" className="header-cart-list">
                  <img
                    src="https://static-assets-web.flixcart.com/batman-returns/batman-returns/p/images/profile-52e0dc.svg"
                    alt="Login"
                    width="24"
                    height="24"
                  />
                  <div className="header-login-text">Login</div>
                  <img  className="header-login-icon" id="header-login-icon-svg" src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTQiIGhlaWdodD0iMTEiIHZpZXdCb3g9IjAgMCAxNCAxMSIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPGcgZmlsdGVyPSJ1cmwoI2ZpbHRlcjBfZF80OTc0Xzc1OTY5KSI+CjxwYXRoIGQ9Ik0zIDJMNyA2TDExIDIiIHN0cm9rZT0iIzExMTExMiIgc3Ryb2tlLXdpZHRoPSIxLjUiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIvPgo8L2c+CjxkZWZzPgo8ZmlsdGVyIGlkPSJmaWx0ZXIwX2RfNDk3NF83NTk2OSIgeD0iMC4yNSIgeT0iMC4yNSIgd2lkdGg9IjEzLjUiIGhlaWdodD0iOS44MTI1IiBmaWx0ZXJVbml0cz0idXNlclNwYWNlT25Vc2UiIGNvbG9yLWludGVycG9sYXRpb24tZmlsdGVycz0ic1JHQiI+CjxmZUZsb29kIGZsb29kLW9wYWNpdHk9IjAiIHJlc3VsdD0iQmFja2dyb3VuZEltYWdlRml4Ii8+CjxmZUNvbG9yTWF0cml4IGluPSJTb3VyY2VBbHBoYSIgdHlwZT0ibWF0cml4IiB2YWx1ZXM9IjAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDEyNyAwIiByZXN1bHQ9ImhhcmRBbHBoYSIvPgo8ZmVPZmZzZXQgZHk9IjEiLz4KPGZlR2F1c3NpYW5CbHVyIHN0ZERldmlhdGlvbj0iMSIvPgo8ZmVDb2xvck1hdHJpeCB0eXBlPSJtYXRyaXgiIHZhbHVlcz0iMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMC4xNiAwIi8+CjxmZUJsZW5kIG1vZGU9Im5vcm1hbCIgaW4yPSJCYWNrZ3JvdW5kSW1hZ2VGaXgiIHJlc3VsdD0iZWZmZWN0MV9kcm9wU2hhZG93XzQ5NzRfNzU5NjkiLz4KPGZlQmxlbmQgbW9kZT0ibm9ybWFsIiBpbj0iU291cmNlR3JhcGhpYyIgaW4yPSJlZmZlY3QxX2Ryb3BTaGFkb3dfNDk3NF83NTk2OSIgcmVzdWx0PSJzaGFwZSIvPgo8L2ZpbHRlcj4KPC9kZWZzPgo8L3N2Zz4K" alt="Chevron"  width="12" height="12"></img>
                </a>
              </div>
            </div>
            <div>
              <div className="header-login">
                <a href="" className="header-cart-list">
                  <img
                    src="https://static-assets-web.flixcart.com/batman-returns/batman-returns/p/images/header_cart-eed150.svg"
                    alt="Cart"
                    width="24"
                    height="24"
                  />
                </a>
              </div>
            </div>
            <div>
              <div className="header-shop"><img src="https://static-assets-web.flixcart.com/batman-returns/batman-returns/p/images/Store-9eeae2.svg" alt="Become a Seller"/></div>
            </div>
            <div><div className="header-shop-box"><div className="header-option"><img className="header-option-svg" src="https://static-assets-web.flixcart.com/batman-returns/batman-returns/p/images/header_3verticalDots-ea7819.svg" width="24" height="24" alt="Dropdown with more help links"/></div></div></div>
          </div>
        </div>
      </div>
      <div className="header-bottom">
        <div className="header-location">
          <div>
            <div className="header-location-main">
              <a href="" className="header-location-sub">
                <div className="location">
                  <svg width="16" height="16" viewBox="0 0 16 16">
                    <path
                      d="M9.08414 13.8688C10.5546 12.555 13 9.89704 13 6.75C13 5.42392 12.4732 4.15215 11.5355 3.21447C10.5979 2.27678 9.32608 1.75 8 1.75C6.67392 1.75 5.40215 2.27678 4.46447 3.21447C3.52678 4.15215 3 5.42392 3 6.75C3 9.89704 5.4454 12.555 6.91586 13.8688C7.38418 14.2872 7.61834 14.4964 8 14.4964C8.38166 14.4964 8.61582 14.2872 9.08414 13.8688ZM10.5 6.75C10.5 8.13071 9.38071 9.25 8 9.25C6.61929 9.25 5.5 8.13071 5.5 6.75C5.5 5.36929 6.61929 4.25 8 4.25C9.38071 4.25 10.5 5.36929 10.5 6.75Z"
                      fill="#1F1F1F"
                    ></path>
                    <path
                      d="M9.08414 13.8688L8.68438 13.4214L8.68438 13.4214L9.08414 13.8688ZM6.91586 13.8688L7.31562 13.4214L6.91586 13.8688ZM12.4 6.75C12.4 8.16783 11.8481 9.50544 11.0906 10.6696C10.3343 11.832 9.39653 12.7851 8.68438 13.4214L9.4839 14.3162C10.2422 13.6387 11.2624 12.606 12.0964 11.3241C12.9292 10.0441 13.6 8.47922 13.6 6.75H12.4ZM11.1113 3.63873C11.9364 4.46389 12.4 5.58305 12.4 6.75H13.6C13.6 5.26479 13.01 3.84041 11.9598 2.7902L11.1113 3.63873ZM8 2.35C9.16695 2.35 10.2861 2.81357 11.1113 3.63873L11.9598 2.7902C10.9096 1.74 9.48521 1.15 8 1.15V2.35ZM4.88873 3.63873C5.71389 2.81357 6.83305 2.35 8 2.35V1.15C6.51479 1.15 5.09041 1.74 4.0402 2.7902L4.88873 3.63873ZM3.6 6.75C3.6 5.58305 4.06357 4.46389 4.88873 3.63873L4.0402 2.7902C2.99 3.84041 2.4 5.26479 2.4 6.75H3.6ZM7.31562 13.4214C6.60347 12.7851 5.66569 11.832 4.90943 10.6696C4.15193 9.50544 3.6 8.16783 3.6 6.75H2.4C2.4 8.47922 3.07077 10.0441 3.90359 11.3241C4.73765 12.606 5.75779 13.6387 6.5161 14.3162L7.31562 13.4214ZM8 13.8964C7.94117 13.8964 7.89717 13.887 7.81199 13.833C7.69818 13.7607 7.56373 13.643 7.31562 13.4214L6.5161 14.3162C6.93321 14.6889 7.34507 15.0964 8 15.0964V13.8964ZM8.68438 13.4214C8.43627 13.643 8.30182 13.7607 8.18801 13.833C8.10283 13.887 8.05883 13.8964 8 13.8964V15.0964C8.65493 15.0964 9.06679 14.6889 9.4839 14.3162L8.68438 13.4214ZM8 9.85C9.71208 9.85 11.1 8.46208 11.1 6.75H9.9C9.9 7.79934 9.04934 8.65 8 8.65V9.85ZM4.9 6.75C4.9 8.46208 6.28792 9.85 8 9.85V8.65C6.95066 8.65 6.1 7.79934 6.1 6.75H4.9ZM8 3.65C6.28792 3.65 4.9 5.03792 4.9 6.75H6.1C6.1 5.70066 6.95066 4.85 8 4.85V3.65ZM11.1 6.75C11.1 5.03792 9.71208 3.65 8 3.65V4.85C9.04934 4.85 9.9 5.70066 9.9 6.75H11.1Z"
                      fill="#1F1F1F"
                    ></path>
                  </svg>
                  <div className="location-text">Location not set</div>
                </div>
              </a>
              <div className="set-location">
                <div className="location">
                  <div className="loction-delivery">
                    {" "}
                    Select delivery location{" "}
                  </div>
                  <svg width="16" height="16" fill="none" viewBox="0 0 17 17" ><path d="m6.627 3.749 5 5-5 5" stroke="#1254E7" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"></path></svg>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="header-search">
          <div className="header-search-main">
            <div>
              <div className="header-search-subb">
                <div className="header-search-btn">
                <svg width="24" height="24" viewBox="0 0 256 256"><path fill="none" d="M0 0h256v256H0z"></path><circle cx="116" cy="116" r="84" fill="none" stroke="#1254E7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"></circle><path fill="none" stroke="#1254E7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16" d="M175.4 175.4 224 224"></path></svg>
                </div>
                <div className="header-search-button">
                  <a href="">Search for Products</a>
                </div>
                </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;