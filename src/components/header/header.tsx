import { Link } from 'react-router-dom';
import { AppRoute, AuthorizationStatus, NameSpace } from '../../consts';
import Logo from '../logo/logo';
import LoginButton from '../login-button/login-button';
import { useAppSelector } from '../../hooks';
import LogoutButton from '../logout-button/logout-button';

type props = {
  isMainPage?: boolean;
  isMyQuestsPage?: boolean;
  isContactsPage?: boolean;
}

export default function Header({isMainPage, isMyQuestsPage, isContactsPage}: props) {
  const userStatus = useAppSelector((state) => state[NameSpace.User].authorizationStatus);

  return (
    <header className="header">
      <div className="container container--size-l">
        <Logo />
        <nav className="main-nav header__main-nav">
          <ul className="main-nav__list">
            <li className="main-nav__item">
              <Link className={`link ${isMainPage ? 'active' : ''}`} to={AppRoute.Main}>Квесты</ Link>
            </li>
            <li className="main-nav__item">
              <Link className={`link ${isContactsPage ? 'active' : ''}`} to={AppRoute.Contacts}>Контакты</ Link>
            </li>
            {userStatus === AuthorizationStatus.Auth &&
            <li className="main-nav__item">
              <Link className={`link ${isMyQuestsPage ? 'active' : ''}`} to={AppRoute.Quests}>Мои бронирования</ Link>
            </li>}
          </ul>
        </nav>
        <div className="header__side-nav">
          {userStatus === AuthorizationStatus.NoAuth ? <LoginButton /> : <LogoutButton />}
          <a
            className="link header__side-item header__phone-link"
            href="tel:88003335599"
          >8 (000) 111-11-11
          </a>
        </div>
      </div>
    </header>
  );
}
