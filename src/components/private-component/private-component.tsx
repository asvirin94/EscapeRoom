import { Navigate } from 'react-router-dom';
import { AppRoute, AuthorizationStatus, NameSpace } from '../../consts';
import { useAppSelector } from '../../hooks';

type Props = {
  children: JSX.Element;
}

export default function PrivateComponent({children}: Props) {
  const userStatus = useAppSelector((state) => state[NameSpace.User].authorizationStatus);

  if(userStatus === AuthorizationStatus.Auth) {
    return children;
  } else {
    return <Navigate to={AppRoute.Login}/>;
  }
}
