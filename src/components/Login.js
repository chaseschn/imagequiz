import { useState  } from 'react';
import { useNavigate } from 'react-router-dom';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import apiAccess from '../communication/APIAccess';


const Login = (props) => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();



    let onEmailChanged = (e) => {
        setEmail(e.target.value);
    }

    let onPasswordChanged = (e) => {
        setPassword(e.target.value);
    }

    let onSubmitHandler = (e) => {
        e.preventDefault();
         let found = apiAccess.Login.customers.find(x =>
            (x.email.toLowerCase() === email.toLowerCase()) && (x.password === password));
         if(found) {
             props.customerLoggedIn(email);
             navigate('/login');
         } else {
             alert('The credentials are not valid!');
         }
    }

    return (
        <Form onSubmit={onSubmitHandler}>


            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="Enter email" value={email} onChange={onEmailChanged}/>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" value={password} onChange={onPasswordChanged}/>
            </Form.Group>

            <Button variant="primary" type="submit">
                Sign in
            </Button>
        </Form>
    );
}

export default Login;
