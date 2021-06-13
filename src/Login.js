import React, { useRef, useState } from 'react';
import { Button, Card, Form } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';

const Login = ({ setUser }) => {
  const usernameRef = useRef();
  const passwordRef = useRef();

  const [loading, setLoading] = useState('');

  const history = useHistory();

  async function handleSubmit(e) {
    e.preventDefault();
    setLoading(true);
    setUser({
      username: usernameRef.current.value,
      password: passwordRef.current.value,
    });
    history.push('/home');
    setLoading(false);
  }

  return (
    <Card>
      <Card.Body>
        <h2 className="text-center mb-4">Log In</h2>
        <Form onSubmit={handleSubmit}>
          <Form.Group id="username" className="mb-4">
            <Form.Label>Username</Form.Label>
            <Form.Control type="username" required ref={usernameRef} />
          </Form.Group>
          <Form.Group id="password" className="mb-4">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" required ref={passwordRef} />
          </Form.Group>
          <Button disabled={loading} className="w-100" type="submit">
            Log In
          </Button>
        </Form>
      </Card.Body>
    </Card>
  );
};

export default Login;
