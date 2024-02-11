import Intro1 from "../../../assets/icons/intro1.svg";
import Intro2 from "../../../assets/icons/intro2.svg";
import Intro3 from "../../../assets/icons/intro3.svg";
import Intro4 from "../../../assets/icons/intro4.svg";
import Intro5 from "../../../assets/icons/intro5.svg";

import "./Intro.scss";

const Intro = () => {
  const data = [
    {
      img: Intro1,
      text: "Самый большой выбор техники",
    },
    {
      img: Intro2,
      text: "Быстрое оформление заказа",
    },
    {
      img: Intro3,
      text: "Можно забрать заказ в пункте выдачи",
    },
    {
      img: Intro4,
      text: "Доставка в любую точку Москвы",
    },
    {
      img: Intro5,
      text: "Оплата картой и наличными",
    },
  ];

  const items = data.map((item, i) => {
    return (
      <div key={i} className="intro-info__item">
        <img src={item.img} alt={item.text} className="intro-info__img" />
        <p className="intro-info__text">{item.text}</p>
      </div>
    );
  });

  return (
    <>
      <section className="intro">
        <div className="container">
          <div className="intro-container">
            <div>
              <span className="intro-text intro-first text-bg">
                <span>Аренда</span> Фото
              </span>
              <br />
              <span className="intro-text text-bg">И видео</span> <br />
              <span className="intro-text text-bg intro-text-green">
                оборудования
              </span>
            </div>
          </div>
        </div>
      </section>
      <section>
      <div className="intro-info">
          <div className="container">
            <div className="intro-info-container">{items}</div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Intro;
