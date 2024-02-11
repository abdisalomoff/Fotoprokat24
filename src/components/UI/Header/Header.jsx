import { Link } from "react-router-dom";
import Logo from "../../../assets/icons/site-logo.svg";
import SearchIcon from "../../../assets/icons/search.svg";
import Star from "../../../assets/icons/star.svg";
import Compare from "../../../assets/icons/compare.svg";
import Cart from "../../../assets/icons/shopping-cart.svg";
import "./Header.scss";
import { useSelector } from "react-redux";


const Header = () => {
    const cartItems = useSelector((state) => state.cart.cart);
  return (
    <header className=" header">
      <div className="header__inner container">
        <Link to="/">
          <img src={Logo} alt="Fotoprokat24" />
        </Link>
        <nav>
          <ul className="header__menu">
            <li className="header__item">
              <Link to="/products">продукты</Link>
            </li>
            <li className="header__item">
              <Link to="/about">О компании</Link>
            </li>
            <li className="header__item">
              <Link to="/news">Новости</Link>
            </li>
            <li className="header__item">
              <Link to="/contact">Контакты</Link>
            </li>
          </ul>
        </nav>
        <form className="search-bar">
          <input
            className="search-query-input"
            type="text"
            name="search-query-input"
            placeholder="Поиск"
          />
          <button
            className="search-query-submit"
            type="submit"
            name="search-query-submit"
          >
            <img className="search-icon" width={15} src={SearchIcon} alt="" />
          </button>
        </form>
        <p className="header_login">ВОЙТИ</p>
        <div className="header__buttons">
          <Link to="/star">
            <img src={Star} alt="Star" />
          </Link>
          <Link to="/compare">
            <img src={Compare} alt="Compare" />
          </Link>
          <Link className="header__cart" to="/cart">
            <img src={Cart} alt="Cart" />
          </Link>
          <span className="header__cartresults" >{cartItems.length}</span>
        </div>
      </div>
    </header>
  );
};

export default Header;
