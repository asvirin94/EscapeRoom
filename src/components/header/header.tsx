import { Link } from 'react-router-dom';
import { AppRoute } from '../../consts';
import Logo from '../logo/logo';
import LoginButton from '../login-button/login-button';

type props = {
  isMainPage?: boolean;
  isMyQuestsPage?: boolean;
}

export default function Header({isMainPage, isMyQuestsPage}: props) {
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
              <Link className='link' to={AppRoute.Contacts}>Контакты</ Link>
            </li>
            <li className="main-nav__item">
              <Link className={`link ${isMyQuestsPage ? 'active' : ''}`} to={AppRoute.Quests}>Мои бронирования</ Link>
            </li>
          </ul>
        </nav>
        <div className="header__side-nav">
          <LoginButton />
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
