import { Link } from "react-router-dom";
import Registration from "../Registartion";
import "./index.css";

function Login() {
  return (
    <div className="login">
      <h2 className="title">Авторизация</h2>
      <p className="title-m">Введите свои данные, чтобы продолжить.</p>
      <from className="reg-form" action="#">
          <label className="input-box">
            <input
              className="email-input"
              type="email"
              placeholder="Email"
              required
            />
          </label>

          <label className="input-box">
            <input
              className="password-input"
              type="password"
              placeholder="Пароль"
              required
            />
          </label>

        <div className="podvr">
          <label>
            <input className="check-input" type="checkbox" />Я даю согласие на
            обработку персональных данных.
          </label>
          {/* <span className="title-n">
              Я даю согласие на обработку персональных данных.
            </span> */}
        </div>
        <div className="button">
          <input type="submit" value="Зарегистрироваться" />
        </div>
      </from>
      <Link to="/rgitegistration">Register</Link>
    </div>
  );
}

export default Login;
