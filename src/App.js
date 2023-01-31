import React, { useRef } from 'react';
import './App.css';

export default function App() {
  const ref = useRef(null);
  const menuref = useRef(null);
  const openMenu = (e) => {
    const span = ref.current;
    const menu = menuref.current;
    if (span.classList.contains('mobile-nav')) {
      span.classList.remove('mobile-nav');
    } else {
      span.classList.add('mobile-nav');
    }
    if (menu.classList.contains('is-active')) {
      menu.classList.remove('is-active');
    } else {
      menu.classList.add('is-active');
    }
    // document.getElementById('nav').classList.toggle('mobile-nav');
    // this.classList.toggle('is-active');
    console.log({ e });
  };
  return (
    <div className="page-wrapper">
      <div className="banner_img">
        <div className="nav-wrapper">
          <nav className="navbar">
            <span className="company_logo">Your Logo</span>
            <div
              ref={menuref}
              className="menu-toggle"
              id="mobile-menu"
              onClick={(e) => openMenu(e)}
            >
              <span className="bar"></span>
              <span className="bar"></span>
              <span className="bar"></span>
            </div>
            <ul ref={ref} className="nav no-search">
              <li className="nav-item">
                <a href="#">Explore</a>
              </li>
              <li className="nav-item">
                <a href="#">About</a>
              </li>
              <li className="nav-item">
                <a href="#">Cities</a>
              </li>
              <li className="nav-item btn">
                <a href="#">Call</a>
              </li>
            </ul>
          </nav>
        </div>
        <section className="headline">
          <h1>Rethink your living & renting</h1>
          <p>Make your stay painless with us</p>
        </section>
      </div>
    </div>
  )
}
