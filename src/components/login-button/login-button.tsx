import { Link } from 'react-router-dom';
import { AppRoute } from '../../consts';

export default function LoginButton() {
  return (
    <Link className="btn header__side-item header__login-btn" to={AppRoute.Login}>Вход</ Link>
  );
}
