import React from 'react';
import { useHistory } from 'react-router-dom';
import { Card, Button } from 'react-bootstrap';
import List from './List';

const Home = ({ user, setLoading }) => {
  const history = useHistory();

  const handleLogout = () => {
    setLoading(true);
    localStorage.removeItem('currentUser');
    setTimeout(() => {
      setLoading(false);
    }, 500);
    history.push('/');
  };

  return (
    <>
      <Card>
        <Card.Body className="d-flex flex-row justify-content-between">
          <h4>Hello {user.username}</h4>
          <Button className="btn-danger waves-effect" onClick={handleLogout}>
            Log Out
          </Button>
        </Card.Body>
      </Card>
      <List />
    </>
  );
};

export default Home;
