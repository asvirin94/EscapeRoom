import { useAppDispatch } from '../../hooks';
import { logoutAction } from '../../store/api-actions';

export default function LogoutButton() {
  const dispatch = useAppDispatch();

  const handleLogoutClick = () => {
    dispatch(logoutAction());
  };

  return (
    <a onClick={handleLogoutClick} className="btn btn--accent header__side-item" href="#">Выйти</a>
  );
}
