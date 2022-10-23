import { Link } from "react-router-dom";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";

// Styling the Navbar
function Navbars() {
  const style = {
    textDecoration: "none",
    color: "white",
    margin: "25px",
    fontWeight: 'bold',
    fontSize: '30px'
  };

  return (
    <Navbar bg="success" variant="dark">
      <Container>
        <Navbar.Brand>
          <Link to="/" style={style}>
            Home
          </Link>
        </Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link>
            <Link to="/album" style={style}>
              Album
            </Link>
          </Nav.Link>
          <Nav.Link>
            <Link to="/newalbum" style={style}>
              {" "}
              Add Album
            </Link>
          </Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
}

export default Navbars;
