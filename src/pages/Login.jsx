
import { Link } from "react-router-dom";
import useLogin from "../hooks/useLogin";
import "./Login.scss"

const Login = () => {
  const {
    error,
    handleSubmit,
    handleEmailChange,
    handlePasswordChange,
  } = useLogin();

  return (
    <div className="login">
      <form className="login-form" onSubmit={handleSubmit}>
        <h1>Login</h1>
        <div className="form-control">
          <input
            type="email"
            onChange={handleEmailChange}
            placeholder="Enter your email"
          />
          {error.email && <p>{error.email}</p>}
        </div>
        <div className="form-control">
          <input
            type="password"
            onChange={handlePasswordChange}
            placeholder="Enter your password"
          />
          {error.password && <p>{error.password}</p>}
        </div>
        <button type="submit">
          Login
        </button>
        <p>
          Don't have an account? <Link to="/register">Register</Link>
        </p>
      </form>
    </div>
  );
};

export default Login;