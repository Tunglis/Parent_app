import React  from "react";
import {Form,Col,Row,Card,Container,ProgressBar } from 'react-bootstrap';
function Leaderboard()
{
    return(
        <div>
            <Container>
            <br/>
            <Row>
                <Col>
    <Form.Select>
        <option>Default select</option>
      </Form.Select>
      </Col>
      <Col>
      <Form.Select>
        <option>Default select</option>
      </Form.Select>
      </Col>
      <Col>
      <Form.Select>
        <option>Default select</option>
      </Form.Select>
      </Col>
      </Row>
      </Container>
      <hr style={{width:"90%",marginLeft:"5%"}}/>
        </div>
    )
}

export default Leaderboard;
