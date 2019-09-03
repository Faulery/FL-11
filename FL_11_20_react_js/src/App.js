import React, {Component} from 'react';
import './index.css';
import Header from "./components/Header/header";
import {Container, Row, Col} from 'reactstrap';
import Basket from "./components/Basket/basket";

class App extends Component {
  render () {
    return (
      <div className="App">
        <Container>
          <Row>
            <Col lg="8"><Header/></Col>
            <Col lg="4"><Basket/></Col>
          </Row>
        </Container>
      </div>
    )
  }
}

export default App;