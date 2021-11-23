import * as React from 'react';
// import { Route, RouterProps } from 'react-router';
import { Redirect, Route, RouteProps } from 'react-router-dom';

// export interface IPrivateRouteProps {}

export function PrivateRoute(props: RouteProps) {
  const auth = Boolean(localStorage.getItem('access_token'));
  if (!auth) return <Redirect to="/login" />;
  return <Route {...props} />;
}
