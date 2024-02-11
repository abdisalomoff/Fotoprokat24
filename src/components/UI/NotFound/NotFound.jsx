import { Link } from "react-router-dom";
import { FaExclamationTriangle } from "react-icons/fa";
import "./NotFound.scss";

const NotFound = () => {
  return (
    <div className="not-found__wrapper">
      <FaExclamationTriangle size={100} color="#e44d26" />
      <p className="not-found__text">404 - Page Not Found</p>
      <p className="not-found__textline">The page you are looking for might be unavailable or does not exist.</p>
      <Link to="/">
        <button className="not-found__btn">Go Back to Home</button>
      </Link>
    </div>
  );
};

export default NotFound;
