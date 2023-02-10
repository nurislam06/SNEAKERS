import "./index.css";
const Registration = () => {
  return (
    <div className="registration">
      <h2 className="title">Регистрация</h2>
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

        <div className="user-details-s">
          <label className="input-box-s">
            <input
              className="name-input"
              type="text"
              placeholder="Имя"
              required
            />
          </label>
          <label className="input-box-s">
            <input
              className="first-name-input"
              type="text"
              placeholder="Фамилия"
              required
            />
          </label>
        </div>

        <label className="input-box">
          <input
            className="password-input"
            type="password"
            placeholder="Пароль"
            required
          />
        </label>
        <label className="input-box">
          <input
            className="password-input"
            type="text"
            placeholder="Подтвердить пароль"
            required
          />
        </label>

        <label className="title-n">
          <input className="check-input" type="checkbox" />
          Я даю согласие на обработку персональных данных.
        </label>
        <div className="button">
          <input type="submit" value="Зарегистрироваться" />
        </div>
      </from>
    </div>
  );
};

export default Registration;
