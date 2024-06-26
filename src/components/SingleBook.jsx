import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Row  from "react-bootstrap/Row";
import fantasy from "../assets/fantasy.json"
import CardBody  from "react-bootstrap/CardBody";
import CardTitle  from "react-bootstrap/CardTitle";
import CardText  from "react-bootstrap/CardText";
import CardImg  from "react-bootstrap/CardImg";
import Col  from "react-bootstrap/Col";


const book = fantasy[12];


const SingleBook = props => (
<Row className="justify-content-center">
    
    
            <Col className="CardBook" lg={3}>
                <Card className=" CardTot border-0">
                <CardImg className="ImgCard" src={book.img}></CardImg>
                <CardBody className=" CardBodySiz">
                    <CardTitle className="Titlecard">{book.title}</CardTitle>
                    <CardText>{book.category}</CardText>
                    <CardText></CardText>
                </CardBody>
                <div className="row justify-content-center">
                    <CardText className="CardPrice col-3 d-flex justify-content-start border border-black bg-dark text-light rounded-pill" >{book.price}€</CardText>
                    <button className=" btnView col-6 border rounded-pill ms-5 border-0">View</button>
                </div>
                </Card>
            </Col>
        
    </Row>
);

export default SingleBook;