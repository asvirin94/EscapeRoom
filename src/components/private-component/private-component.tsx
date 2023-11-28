import { useLocation, useNavigate } from 'react-router-dom';
import { AppRoute, AuthorizationStatus } from '../../consts';
import { useAppSelector } from '../../hooks';
import Loading from '../loading/loading';
import { useEffect, useState } from 'react';
import { getUserStatus } from '../../store/user-process/user-process.selectors';

type Props = {
  children: JSX.Element;
}

export default function PrivateComponent({children}: Props) {
  const userStatus = useAppSelector(getUserStatus);
  const navigate = useNavigate();
  const location = useLocation();
  const [test, setTest] = useState<JSX.Element | null>(null);

  useEffect(() => {
    if(userStatus === AuthorizationStatus.Unknown) {
      setTest(<Loading />);
    } else if (userStatus === AuthorizationStatus.NoAuth){
      navigate(AppRoute.Login, {state: {from: location.pathname}});
      setTest(null);
    } else {
      setTest(children);
    }
  });

  return test;
}
