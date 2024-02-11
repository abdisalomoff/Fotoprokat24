import { FaCartPlus } from "react-icons/fa"
import "./EmptyCart.scss"
import { Link } from "react-router-dom"
const EmptyCart = () => {
  return (
   <div className="empty__wrapper">
    <FaCartPlus size={100} color="#8ee901" />
    <p className="empty__text">Ваша корзина пуста</p>
    <p className="empty__textline">Здесь появятся заказанные вами товары.</p>
    <Link to="/">
        <button className="empty__btn">
            Back to Menu
        </button>
      </Link>
   </div>
  )
}

export default EmptyCart