import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';



const Menu = (props) => {
  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="#home">Image Quiz</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            {props.customer ?
            <>
            <Nav.Link href="#/home">Home</Nav.Link>
            <Nav.Link href="#/login">Login</Nav.Link>
            <Nav.Link href="#/register">Register</Nav.Link>
            </>
            :
            <Navbar.Text>
              Signed in as {props.customer}
            </Navbar.Text>
          }
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Menu;
