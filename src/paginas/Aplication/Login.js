import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { login } from '../../redux/actions/loginactions';
import { Container, Form, Button } from 'react-bootstrap';


const LoginForm = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(login(username, password));
  };

  return (
    <Container className="d-flex justify-content-center align-items-center mt-4">
  <div>
    <h1>Iniciar sesión</h1>
    <p>CITAS MEDICAS</p>
    <Form onSubmit={handleSubmit}>
      <Form.Group controlId="formUsername">
        <Form.Control
          size="sm"
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder="Nombre de usuario"
        />
      </Form.Group>

      <Form.Group className='mt-1' controlId="formPassword">
        <Form.Control
          size="sm"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Contraseña"
        />
      </Form.Group>

      <Button className='mt-2' variant="primary" type="submit">
        Iniciar sesión
      </Button>
    </Form>
  </div>
</Container>
  );
};

export default LoginForm;