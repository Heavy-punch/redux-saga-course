import studentApi from 'api/studentApi';
import { NotFound, PrivateRoute } from 'components/Common';
import { AdminLayout } from 'components/Layout';
import LoginPage from 'features/auth/pages/LoginPage';
import { ListParams } from 'models';
import React, { useEffect } from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';

function App() {
  useEffect(() => {
    const params: ListParams = {
      _page: 1,
      _limit: 10,
      _sort: '',
      _order: 'asc',
    };
    studentApi.getAll(params).then((response) => console.log(response));
  }, []);
  return (
    <Switch>
      <Route path="/login">
        <LoginPage />
      </Route>
      <PrivateRoute path="/admin">
        <AdminLayout />
      </PrivateRoute>
      <Route>
        <NotFound />
      </Route>
    </Switch>
    // <Routes>
    //   <Route path="login" element={<LoginPage />}></Route>
    //   <Route path="admin" element={<PrivateRoute />}>
    //     <Route path="" element={<AdminLayout />} />
    //     <Route path="student" element={<Student />} />
    //   </Route>
    //   <Route path="*" element={<NotFound />} />
    // </Routes>
  );
}

export default App;

/*
function RequireAuth({ children }: { children: JSX.Element }) {
  let auth = useAuth();
  let location = useLocation();

  if (!auth.user) {
    // Redirect them to the /login page, but save the current location they were
    // trying to go to when they were redirected. This allows us to send them
    // along to that page after they login, which is a nicer user experience
    // than dropping them off on the home page.
    return <Navigate to="/login" state={{ from: location }} />;
  }

  return children;
}

...

<Route
  path="/protected"
  element={
    <RequireAuth>
      <ProtectedPage />
    </RequireAuth>
  }
/>




OR****
import { Navigate, useLocation } from "react-router";

export const RequireAuth: React.FC<{ children: JSX.Element }> = ({ children }) => {
  let auth = useAuth();
  let location = useLocation();

  if (!auth.user) {
    return <Navigate to="/login" state={{ from: location }} />;
  }

  return children;
};


<Route path="/protected" element={<RequireAuth><ProtectedPage /></RequireAuth>} />

*/
