import { Link } from 'react-router-dom';
import { AppRoutes } from '../../consts';

export default function LoginButton() {
  return (
    <Link className="btn header__side-item header__login-btn" to={AppRoutes.Login}>Вход</ Link>
  );
}
