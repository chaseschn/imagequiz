import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

const Menu = (props) => {
  let google = "http://localhost:4002/auth/google";
    return (
        <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand href="#">ISTA 330</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              {
              props.customer ?
              <Navbar.Text>
                Signed in as {props.customer}
              </Navbar.Text>
              :
              <>
              <Nav.Link href="#/register">Register</Nav.Link>
              <Nav.Link href="#/login">Login</Nav.Link>
              <Nav.Link href={google}>Sign In with Google</Nav.Link>
              </>
            }

            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    );
 }

 export default Menu;
