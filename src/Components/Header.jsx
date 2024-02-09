import React from 'react';
import Styles from './Header.module.css';
import Search from '../assets/search.svg?react';
import Cart from './Cart';

const Menu = () => {
  const [mobile, setMobile] = React.useState(false);
  function handleMobile() {
    if (mobile) setMobile(false);
    else setMobile(true);
  }

  return (
    <header className={Styles.header}>
      <div className={`container ${Styles.Headercontainer}`}>
        <div className={Styles.logo}>
          <h1>Lux Wine</h1>
        </div>

        <div className={Styles.barra}>
          <input type="search" />
          <button className={Styles.btnBarra} type="submit">
            <Search />
          </button>
        </div>

        <div
          className={`${Styles.navMobile} ${
            mobile ? Styles.mobileIAtivo : ''
          } `}
          onClick={handleMobile}
        ></div>

        <nav className={`${Styles.nav}`}>
          <ul>
            <li>
              <a href="/" className={Styles.active}>
                Home
              </a>
            </li>

            <li>
              <a href="/vinho">Vinhos</a>
            </li>

            <li>
              <a href="/vinho">Espumantes</a>
            </li>

            <li>
              <a href="#contato">Contato</a>
            </li>
          </ul>
        </nav>
      </div>

      <Cart classe={Styles.cart} />
    </header>
  );
};

export default Menu;
