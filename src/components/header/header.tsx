import { Link } from 'react-router-dom';
import { AppRoute, AuthorizationStatus } from '../../const';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { fetchMyQuestsAction, logoutAction } from '../../store/api-actions';
import { getAuthorizationStatus } from '../../store/authoriztion-user-process/selectors';

type HeaderProps = {
  isLoginScreen?: boolean;
}

export default function Header({isLoginScreen}: HeaderProps): JSX.Element {
  const authorizationStatus = useAppSelector(getAuthorizationStatus);
  const dispatch = useAppDispatch();

  return (
    <header className="header">
      <div className="container container--size-l">
        <Link className="logo header__logo" to={AppRoute.Root} aria-label="Перейти на Главную">
          <svg width="134" height="52" aria-hidden="true">
            <use xlinkHref="#logo"></use>
          </svg>
        </Link>
        <nav className="main-nav header__main-nav">
          <ul className="main-nav__list">
            <li className="main-nav__item">
              <Link className="link not-disabled active" to={AppRoute.Root}>Квесты</Link>
            </li>
            <li className="main-nav__item">
              <Link className="link" to={AppRoute.Contacts}>Контакты</Link>
            </li>
            {
              authorizationStatus === AuthorizationStatus.Auth &&
              <li className="main-nav__item">
                <Link className="link" onClick={() => {dispatch(fetchMyQuestsAction());}} to="#">Мои бронирования</Link>
              </li>
            }
          </ul>
        </nav>
        <div className="header__side-nav">
          {authorizationStatus === AuthorizationStatus.Auth && !isLoginScreen && <Link className="btn btn--accent header__side-item" to="#" onClick={()=> {dispatch(logoutAction());}}>Выйти</Link>}
          {authorizationStatus !== AuthorizationStatus.Auth && !isLoginScreen && <Link className="btn header__side-item header__login-btn" to={AppRoute.Login}>Войти</Link>}
          <Link className="link header__side-item header__phone-link" to="#">8 (000) 111-11-11</Link>
        </div>
      </div>
    </header>
  );
}
