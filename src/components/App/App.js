import { useEffect, lazy, Suspense } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Switch } from 'react-router-dom';
import { getIsRefreshCurrentUser } from '../../redux/auth/authSelectors.js';
import { refreshCurrentUser } from '../../redux/auth/authOperations.js';
import Header from '../Header/Header.jsx';
import PrivateRoute from '../Header/PrivateRoute.js';
import PublicRoute from '../Header/PublicRoute.js';

const HomePage = lazy(() => import('../../pages/HomePage/HomePage'));
const ContactsPage = lazy(() =>
  import('../../pages/ContactsPage/ContactsPage'),
);
const RegisterPage = lazy(() =>
  import('../../pages/RegisterPage/RegisterPage'),
);
const LoginPage = lazy(() => import('../../pages/LoginPage/LoginPage'));

const App = () => {
  const dispatch = useDispatch();

  const isRefreshCurrentUser = useSelector(getIsRefreshCurrentUser);

  useEffect(() => {
    dispatch(refreshCurrentUser());
  }, [dispatch]);

  return (
    !isRefreshCurrentUser && (
      <>
        <Header />
        <main>
          <Suspense fallback={<p>Loading...</p>}>
            <Switch>
              {/* <Route exact path="/">
              <HomePage />
            </Route> */}
              {/* <Route path="/register">
              <RegisterPage />
            </Route> */}
              {/* <Route path="/login">
              <LoginPage />
            </Route> */}
              {/* <Route path="/contacts">
              <ContactsPage />
            </Route> */}

              <PublicRoute exact path="/">
                <HomePage />
              </PublicRoute>
              <PublicRoute exact path="/register" restricted>
                <RegisterPage />
              </PublicRoute>
              <PublicRoute exact path="/login" restricted>
                <LoginPage />
              </PublicRoute>
              <PrivateRoute path="/contacts">
                <ContactsPage />
              </PrivateRoute>
            </Switch>
          </Suspense>
        </main>
      </>
    )
  );
};

export default App;
