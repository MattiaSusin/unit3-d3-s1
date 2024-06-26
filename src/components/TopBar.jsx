import { Container, Nav, NavLink, Navbar } from "react-bootstrap"; //!BISOGNA SEMPRE IMPORTARE QUALSIASI COSA SI USI DA BOOTSTRAP 

const TopBar = props => (
    <Navbar expand="lg" className="bg-body-dark">
        <Container fluid className="justify-content-center bg-secondary">
        <Navbar.Brand href="#home" className="text-danger fw-bold ms-5">EPICLIBRARY — {props.txt}</Navbar.Brand>
        <Navbar.Brand href="#home" className="fw-bold text-light ms-3">Home</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link href="#home" className="fw-bold text-light me-2">About</Nav.Link>
            <Nav.Link href="#link" className="fw-bold text-light me-5">Browse</Nav.Link>
          </Nav>
        </Navbar.Collapse>
        </Container>
    </Navbar>
);

export default TopBar;                                              //!BISOGNA SEMPRE ESPORTARE 