import { HashRouter, Route, Routes} from 'react-router-dom';
import React, { useState } from 'react';
import Home from './components/Home.js';
import Login from './components/Login.js';
import Header from './components/Header.js';
import Footer from './components/Footer.js';
import Register from './components/Register.js';
import Menu from './components/Menu.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function App() {
  const[customer, setCustomer] = useState(undefined);
  let customerLoggedInHandler = (customerEmail) => {
    setCustomer(customerEmail);
  }
  return (
    <HashRouter>
      <Container fluid>

        <Row>
          <Col>
            <Menu customer={customer} />
          </Col>
        </Row>

        <Routes>
          <Route exact path='/' element={<Home />}>
          </Route>
          <Route exact path='/register' element={<Register />}>
          </Route>
          <Route exact path='/login' element={<Login customerLoggedIn={customerLoggedInHandler}/>}>
          </Route>
          <Route exact path='/home' element={<Home />}>
          </Route>
        </Routes>

      </Container>
    </HashRouter>
  );
}

export default App;
