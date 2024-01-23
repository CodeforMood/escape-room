import { FormEvent, useRef } from 'react';
import { Link, Navigate } from 'react-router-dom';
import Footer from '../../components/footer/footer';
import Header from '../../components/header/header';
import { AppRoute, AuthorizationStatus } from '../../const';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { loginAction } from '../../store/api-actions';
import { getAuthorizationStatus } from '../../store/authoriztion-user-process/selectors';
import { AuthData } from '../../types/auth-data';

export default function LoginScreen (): JSX.Element {
  const authorizationStatus = useAppSelector(getAuthorizationStatus);
  const loginRef = useRef<HTMLInputElement | null>(null);
  const passwordRef = useRef<HTMLInputElement | null>(null);

  const dispatch = useAppDispatch();

  const onSubmit = (authData: AuthData) => {
    dispatch(loginAction(authData));
  };

  const handleSubmit = (evt: FormEvent<HTMLFormElement>) => {
    evt.preventDefault();

    if (loginRef.current !== null && passwordRef.current !== null) {
      onSubmit({
        login: loginRef.current.value,
        password: passwordRef.current.value,
      });
    }
  };
  return (
    authorizationStatus !== AuthorizationStatus.Auth ?
      <div className="wrapper">
        <Header isLoginScreen/>
        <main className="decorated-page login">
          <div className="decorated-page__decor" aria-hidden="true">
            <picture>
              <source type="image/webp" srcSet="img/content/maniac/maniac-size-m.webp, img/content/maniac/maniac-size-m@2x.webp 2x" /><img src="img/content/maniac/maniac-size-m.jpg" srcSet="img/content/maniac/maniac-size-m@2x.jpg 2x" width="1366" height="768" alt="" />
            </picture>
          </div>
          <div className="container container--size-l">
            <div className="login__form">
              <form className="login-form" action="https://echo.htmlacademy.ru/" method="post" onSubmit={handleSubmit}>
                <div className="login-form__inner-wrapper">
                  <h1 className="title title--size-s login-form__title">Вход</h1>
                  <div className="login-form__inputs">
                    <div className="custom-input login-form__input">
                      <label className="custom-input__label" htmlFor="email">E&nbsp;&ndash;&nbsp;mail</label>
                      <input type="email" id="email" name="email" ref={loginRef} placeholder="Адрес электронной почты" required />
                    </div>
                    <div className="custom-input login-form__input">
                      <label className="custom-input__label" htmlFor="password">Пароль</label>
                      <input type="password" id="password" name="password" ref={passwordRef} placeholder="Пароль" required />
                    </div>
                  </div>
                  <button className="btn btn--accent btn--general login-form__submit" type="submit">Войти</button>
                </div>
                <label className="custom-checkbox login-form__checkbox">
                  <input type="checkbox" id="id-order-agreement" name="user-agreement" required />
                  <span className="custom-checkbox__icon">
                    <svg width="20" height="17" aria-hidden="true">
                      <use xlinkHref="#icon-tick"></use>
                    </svg>
                  </span>
                  <span className="custom-checkbox__label">Я&nbsp;согласен с
                    <Link className="link link--active-silver link--underlined" to="#">правилами обработки персональных данных</Link>&nbsp;и пользовательским соглашением
                  </span>
                </label>
              </form>
            </div>
          </div>
        </main>
        <Footer />
      </div>
      :
      <Navigate to={AppRoute.Root} />
  );
}
