import React, { useState } from 'react';
import signup from '../img/signup.svg';
import menuBurger from '../img/menu-burger.svg';
import arrowDown from '../img/arrow-down.svg';
import logo from '../img/logo.svg';
import lock from '../img/lock.svg';

const Header = () => {
  const [isMenuVisible, setIsMenuVisible] = useState(false);

  const toggleMenu = () => {
    setIsMenuVisible(!isMenuVisible);
    const bodyElem = document.querySelector('body');
    bodyElem.classList.toggle('lock');
  };

  return (
    <header className="header">
      <div className="header__container">
        <img src={logo} alt="Logotype" className="header__logo" />

        <nav className={`header__menu menu header__menu_${isMenuVisible ? 'shown' : 'hidden'}`}>
          <ul className="menu__list">
            <li className="menu__item">
              <a href="#" className="menu__link">
                Expertise
              </a>
            </li>
            <li className="menu__item">
              <a href="#" className="menu__link">
                Industries
              </a>
            </li>
            <li className="menu__item">
              <a href="#" className="menu__link">
                News
              </a>
            </li>
            <li className="menu__item">
              <a href="#" className="menu__link">
                Partners
              </a>
            </li>
            <li className="menu__item">
              <a href="#" className="menu__link">
                Careers
              </a>
            </li>
            <li className="menu__item">
              <a href="#" className="menu__link">
                About <span>us</span>
              </a>
              <img src={arrowDown} alt="Arrow-down" className="menu__arrow" />
            </li>
          </ul>
        </nav>

        <div className="header__actions">
          <a className="header__btn btn btn_black btn_small">
            <img src={lock} alt="Lock" className="btn__icon" />
            <span>Sign in</span>
          </a>
          <a className="header__btn btn btn_small">
            <img src={signup} alt="Sign up" className="btn__icon" />
            <span>Sign up</span>
          </a>
          <img
            src={menuBurger}
            alt="Menu icon"
            className="header__menu-icon"
            onClick={toggleMenu}
          />
        </div>
      </div>
    </header>
  );
};

export default Header;
