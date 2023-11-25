import { Link } from 'react-router-dom';
import { AppRoute } from '../../consts';

export default function Logo() {
  return (
    <Link to={AppRoute.Main}>
      <span className="logo header__logo">
        <svg width="134" height="52" aria-hidden="true">
          <use xlinkHref="#logo"></use>
        </svg>
      </span>
    </Link>
  );
}
