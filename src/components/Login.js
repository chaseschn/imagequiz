import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import React, { useState } from 'react';
import local_temp_store from '../data_access_layer/local_temporarily_storage.js';
import { useNavigate } from 'react-router-dom';

const Login = (props) => {

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  let onNameChanged = (e) => {
    setName(e.target.value);
  }

  let onEmailChanged = (e) => {
    setEmail(e.target.value);
  }

  let onPasswordChanged = (e) => {
    setPassword(e.target.value);
  }

  let onSubmitHandler = (e) => {
    e.preventDefault();
    let found = local_temp_store.customers.find(x =>
      (x.email.toLowerCase() === email.toLowerCase()) && (x.password === password));
      if(found) {
        props.customerLoggedIn(email);
        navigate('/');
      } else {
        alert('The credentials are not valid!');
      }
  }

  return (
    <Form onSubmit = {onSubmitHandler}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" />
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Check me out" />
      </Form.Group>
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  );
}

export default Login;
