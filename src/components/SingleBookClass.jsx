import fantasy from "../assets/fantasy.json"
import { Component } from "react";
import { Card,CardImg,CardBody,CardText, CardTitle} from "react-bootstrap";


const book = fantasy[12];

class SingleBookClass extends Component {
    state = {
        tap : false,
    }

    render() {
        return (
          /*   <Row className="justify-content-center">
    
    
            <Col className="CardBook" lg={3}> */
                <Card className=" CardTot border-0"
                onClick={() => this.setState({ selected: !this.state.tap })}
                style={{ border: this.state.tap ? '3px solid red' : 'none' }}>
                <CardImg className="ImgCard" src={this.props.book.img}></CardImg>
                <CardBody className=" CardBodySiz">
                     <CardTitle className="Titlecard" style={{ color: 'black' }}> {this.props.book.title}</CardTitle>
                    <CardText>{book.category}</CardText>
                    <CardText></CardText>
                </CardBody>
                <div className="row justify-content-center">
                    <CardText className="CardPrice col-3 d-flex justify-content-start border border-black bg-dark text-light rounded-pill" >{book.price}€</CardText>
                    <button className=" btnView col-6 border rounded-pill ms-5 border-0">View</button>
                </div>
                </Card>
            /* </Col> */
        
    /* </Row> */
        )
    }
    }
    export default SingleBookClass;