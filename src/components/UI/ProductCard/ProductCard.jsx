import { Link } from "react-router-dom";
import Star from "../../../assets/icons/star.svg";
import Compare from "../../../assets/icons/compare.svg";
import ShopCart from "../../../assets/icons/cart.svg";

import "../../UI/Popular/Popular.scss";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, removeToCart } from "../../redux/slice/cart.slice";
import { useState } from "react";


const ProductCard = ({ item }) => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.cart);
  
  const [isInCart, setIsInCart] = useState(false);

//   const handleClick = () =>{
//     dispatch(addToCart(item));
//   }

  const handleAddToCart = () => {
    dispatch(addToCart(item));
    setIsInCart(true);
  };

  const handleRemoveFromCart = () => {
    const findCartItem = cartItems.find((cartItem) => cartItem.product_id === item.product_id);
    if (findCartItem && findCartItem.quantity > 1) {
      dispatch(removeToCart({ product_id: item.product_id }));
    } else {
      dispatch(removeToCart({ product_id: item.product_id }));
      setIsInCart(false);
    }
  };

  const findCartItem = cartItems.find((cartItem) => cartItem.product_id === item.product_id);
  const quantityInCart = findCartItem ? findCartItem.quantity : 0;

//   console.log(cartItems);
  return (
    <div className="products-item">
      <div className="product-head">
        <Link to={`/product/${item?.product_id}`} className="product-head">
          <img
            src={item?.product_photos[0]}
            alt="Photoaparat"
            className="products__img"
          />
        </Link>
        <a href="#">
          <img src={Compare} alt="graphic" className="products-item_icon_1" />
        </a>
        <a href="#">
          <img src={Star} alt="star" className="products-item_icon_2" />
        </a>
        <div className="products__descr">
          <p>{item?.product_title}</p>
          <span>{item?.offer?.store_name}</span>
        </div>
      </div>
      <ul className="products-item_wrapper">
        <li className="products__price">
            {/* PRODUCT PRICE SI SIFATIDA API DA KELGAN QANDAYDIR NUMBER KO"RINISHDAGI MANZILDAN FOYDALANILDI PRICE YO'Q EKANLIGI UCHUN (Total price da faqatgina будний dagi qiymat hisoblandi)
            */}
          <p>{item?.product_num_reviews} ₽</p>
          <span>Будний</span>
        </li>
        <li className="products__price">
          <p>750 ₽</p>
          <span>Выходной</span>
        </li>
        <li className="products__price">
          <p>4350 ₽</p>
          <span>Неделя</span>
        </li>
        <li className="products__price">
          <p>12 250 ₽</p>
          <span>Месяц</span>
        </li>
      </ul>
      <div className="products__buttons">
        <button className="products__btn_1">Подробнее</button>{" "}
        {isInCart ? (
          <div className="table__buttons" style={{margin: "0px", width: "140px", gap: "27px"}}>
            <button className="table__dec" onClick={handleRemoveFromCart}>
              -
            </button>
            <span style={{fontSize: "16px"}}>{quantityInCart}</span>
            <button className="table__inc" onClick={handleAddToCart}>
              +
            </button>
          </div>
        ) : (
          <button className="products__btn_2" onClick={handleAddToCart}>
            <img src={ShopCart} alt="shopping cart" /> В корзину
          </button>
        )}
      </div>
    </div>
  );
};

export default ProductCard;
