import { useState } from 'react';
import { Container } from 'react-bootstrap';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from 'react-router-dom';

import List from './List';
import Login from './Login';

function App() {
  const [user, setUser] = useState();
  console.log(user, 'user');

  return (
    <>
      <Container
        className="d-flex align-items-center justify-content-center"
        style={{ minHeight: '100vh' }}
      >
        <div className="w-100" style={{ maxWidth: '400px' }}>
          <Router>
            <Switch>
              <Route
                path="/"
                exact
                render={() => <Login setUser={setUser} />}
              />
              <Route
                path="/home"
                render={(props) => {
                  return user ? (
                    <List user={user} {...props} />
                  ) : (
                    <Redirect to="/" />
                  );
                }}
              />
            </Switch>
          </Router>
        </div>
      </Container>
    </>
  );
}

export default App;
