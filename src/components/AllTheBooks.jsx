import { Component } from "react";
import {Card, CardBody, CardImg, CardText, CardTitle, Col, Container, Row } from "react-bootstrap";
import fantasy from '../assets/fantasy.json'
class AllTheBooks extends Component {

state={
    book:fantasy[0]
}

render(){
    return(
        <Container>
            <Row>
                {
                    fantasy.map(fanta=> {
                        return(
                            <Col  key={`fanta-${fanta.asin}`}>
                               {
                                <Card>
                                    <CardImg src={this.state.img}></CardImg>
                                    <CardBody>
                                        <CardTitle>{fantasy.title}</CardTitle>
                                        <CardText>{fantasy.category}</CardText>
                                        <CardText>{fantasy.price}</CardText>
                                        <CardText></CardText>
                                    </CardBody>
                                </Card>
                               }
                            </Col>
                        )
                    }

                    )
                }
            </Row>
        </Container>
    )
}

}

export default AllTheBooks;