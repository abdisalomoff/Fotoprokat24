import { Link } from 'react-router-dom';
import { FaPhoneAlt , FaFacebookF, FaTwitter, FaLinkedin, FaInstagram } from 'react-icons/fa';
import { HiOutlineMailOpen } from "react-icons/hi";
import Logo from "../../../assets/icons/site-logo.svg";
import "./Footer.scss"

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer__row">
        <div className="footer__row_wrapper">
          <Link to="#" className="footer__row_text">
            <HiOutlineMailOpen color='white'  size={40}/>
            <div className="footer__row_descr">
              <span>Подпишитесь</span>
              <br />
              на новости и акции
            </div>
          </Link>
          <form action="#" className="footer-form">
            <div className="footer-form_input">
              <input name="email" required placeholder="Введите email" type="email" />
              <button className="footer-form_button">Подписаться</button>
            </div>
          </form>
          <div className="footer__row_call">
            <FaPhoneAlt color='white'/>
            <Link to="#" className="footer__row_order">Заказать звонок</Link>
          </div>
        </div>
      </div>
      <div className="footer__main">
        <div className="container">
          <div className="footer__main_wrapper">
            <div id="footer__descr" className="footer__section">
              <img src={Logo} alt="logo" className="footer__section_logo" />
              <div className="footer__section_descr">
                самый удобный в Москве сервис аренды
                <br />
                фото-, видео-, и кинотехники.
              </div>
              <div className="footer__section_years">
                <span>2015-2019</span> Fotoprokat24
              </div>
              <div className="footer__section_social">
                <Link to="https://www.facebook.com/abdisalomoff" target='_blank' className="footer__section_social_f"><FaFacebookF color='white' size={25} style={{paddingTop: "7px"}} /></Link>
                <Link to="#" className="footer__section_social_t"><FaTwitter color='white'  size={25} style={{paddingTop: "7px",} }/></Link>
                <Link to="#" className="footer__section_social_l"><FaLinkedin color='white'  size={25} style={{paddingTop: "7px",} }/></Link>
                <Link to="https://www.instagram.com/abdisalomoff/" target='_blank' className="footer__section_social_i"><FaInstagram color='white' size={25} style={{paddingTop: "7px"}} /></Link>
              </div>
            </div>
            <div className="footer__main-item">
              <div className="footer__main_title">Компания</div>
              <Link to="#" className="footer__main_link">О компании</Link>
              <Link to="#" className="footer__main_link">Новости</Link>
              <Link to="#" className="footer__main_link">Вакансии</Link>
              <Link to="#" className="footer__main_link">Политика <br /> конфиденциальности</Link>
            </div>
            <div className="footer__main-item">
              <div className="footer__main_title">Клиентам</div>
              <Link to="#" className="footer__main_link">Точки выдачи</Link>
              <Link to="#" className="footer__main_link">Скидки</Link>
              <Link to="#" className="footer__main_link">Бонусные программы</Link>
            </div>
            <div className="footer__main-item">
              <div className="footer__main_title">Помощь</div>
              <Link to="#" className="footer__main_link">Вопрос-ответ</Link>
              <Link to="#" className="footer__main_link">Правила аренды</Link>
              <Link to="#" className="footer__main_link">Доставка</Link>
              <Link to="#" className="footer__main_link">Оплата</Link>
            </div>
            <div className="footer__main-item">
              <div className="footer__main_title">Контакты</div>
              <div className="footer__main_link">Fotoprokat24</div>
              <div className="footer__main_link">г.Москва, Проспект <br /> мира, дом12</div>
              <div className="footer__main_link">Пн--Вс 09:00--21:00</div>
              <Link to="tel:+79999999999" className="footer__main_link">+79 (999) 999-99-99</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
