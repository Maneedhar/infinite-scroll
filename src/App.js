import { useState } from 'react';
import { Container } from 'react-bootstrap';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from 'react-router-dom';
import Home from './Home';
import Login from './Login';

import loadingImage from './preloader.gif';

function App() {
  const [user, setUser] = useState(
    JSON.parse(localStorage.getItem('currentUser'))
  );
  const [loading, setLoading] = useState(false);

  return (
    <>
      <Container
        className="d-flex align-items-center justify-content-center"
        style={{ minHeight: '100vh' }}
      >
        {loading ? (
          <img src={loadingImage} alt="loading" className="mx-auto" />
        ) : (
          <div className="w-100" style={{ maxWidth: '768px' }}>
            <Router>
              <Switch>
                <Route
                  path="/"
                  exact
                  render={() => (
                    <Login
                      setUser={setUser}
                      setLoading={setLoading}
                      loading={loading}
                    />
                  )}
                />
                <Route
                  path="/home"
                  render={() => {
                    return user ? (
                      <Home
                        user={user}
                        setLoading={setLoading}
                        loading={loading}
                      />
                    ) : (
                      <Redirect to="/" />
                    );
                  }}
                />
              </Switch>
            </Router>
          </div>
        )}
      </Container>
    </>
  );
}

export default App;
