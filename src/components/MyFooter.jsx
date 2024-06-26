import { Nav } from "react-bootstrap";

const MyFooter = (props) => (
  <>
    <Nav className="FooterPage justify-content-center bg-secondary" activeKey="/home">
    <Nav.Item>
        <Nav.Link eventKey="link-1" className="text-light">Horror</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="link-1" className="text-light">Commedy</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="link-1" className="text-light">Romance</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="link-1" className="text-light">Fantasy</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="link-1" className="text-light">Comics</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="link-1" className="text-light">Kids</Nav.Link>
      </Nav.Item>
    </Nav>

  </>
);

export default MyFooter;
