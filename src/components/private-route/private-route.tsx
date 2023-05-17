import {Navigate} from 'react-router-dom';
import {AppRoute} from '../../const';

type PrivateRouteProps = {
  children: JSX.Element;
}

export default function PrivateRoute({children}: PrivateRouteProps): JSX.Element {

  return (
    <Navigate to={AppRoute.Login} />
  );
}

