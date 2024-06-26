import "bootstrap/dist/css/bootstrap.min.css";

import './App.css';
import TopBar from "./components/TopBar";
import MyFooter from "./components/MyFooter";
import MyAlert from "./components/MyAlert";
import { Card,Col,CardImg,CardText,CardBody,CardTitle,Container, Row } from "react-bootstrap";
import fantasy from './assets/fantasy.json'
/* import AllTheBooks from "./components/AllTheBooks"; */


function App() {
  return (
    <div className="App">
      <TopBar/>
      <MyAlert/>
      <Container>
        <Row>
          {fantasy.map((fantasy)=>{
            return(
              <Col className="CardBook" lg={3}>
                                <Card className="bg-body-tertiary border-0">
                                    <CardImg className="ImgCard" src={fantasy.img}></CardImg>
                                    <CardBody className=" CardBodySiz">
                                        <CardTitle className="Titlecard">{fantasy.title}</CardTitle>
                                        <CardText>{fantasy.category}</CardText>
                                        <CardText></CardText>
                                    </CardBody>
                                        <CardText className="CardPrice col-3 d-flex justify-content-start border border-black bg-dark text-light rounded-pill ps-1 " >{fantasy.price}€</CardText>
                                </Card>
              </Col>
            )
          })}
        </Row>
      </Container>
      <MyFooter/>
      
    </div>
  );
}

export default App;
