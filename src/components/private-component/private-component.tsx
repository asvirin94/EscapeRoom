import { Navigate } from 'react-router-dom';
import { AppRoute, AuthorizationStatus, NameSpace } from '../../consts';
import { useAppSelector } from '../../hooks';
import Loading from '../loading/loading';

type Props = {
  children: JSX.Element;
}

export default function PrivateComponent({children}: Props) {
  const userStatus = useAppSelector((state) => state[NameSpace.User].authorizationStatus);

  if(userStatus === AuthorizationStatus.Unknown) {
    return <Loading />;
  } else if (userStatus === AuthorizationStatus.NoAuth){
    return <Navigate to={AppRoute.Login}/>;
  } else {
    return children;
  }
}
