import React, { useState }  from "react";
import {Form,Col,Row,Card,Container,ProgressBar,ListGroup,Button,Modal } from 'react-bootstrap';
import { Outlet, Link } from "react-router-dom";
function MyVerticallyCenteredModal(props) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Logout
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <h1>Are you sure you want to Logout?</h1>
        <div className='d-flex justify-content-center'>
        <Link to="/" style={{ textDecoration: 'none' }}>
      <Button variant="danger" type="submit" >
      Logout
      </Button>
      </Link>
      &nbsp;
      <Button variant="primary" type="submit"   onClick={props.onHide}>
        Cancel
      </Button>
      </div>
      </Modal.Body>
      
    </Modal>
  );
}
function Profile()
{
  const [modalShow, setModalShow] = React.useState(false);

    return(
        <div>
            <Container>
            <p style={{textAlign:"center"}}>
            <img src={require('./img/ICON-My Profile.png')} className="card-img-top"  style={{width:"170px",height:"200px"}}/>
            </p>
            <strong><h3>Student Information</h3></strong>
            <Card >
    
      <ListGroup variant="flush">
        <ListGroup.Item>Name:</ListGroup.Item>
        <ListGroup.Item>School Name:</ListGroup.Item>
        <ListGroup.Item>Class:</ListGroup.Item>
        <ListGroup.Item>Smart Point:</ListGroup.Item>
      </ListGroup>
    </Card>
    <br/>
    <strong><h3>Setting</h3></strong>
            <Card >
    
      <ListGroup variant="flush" >
        <ListGroup.Item className='d-flex justify-content-between'>Account Information <span ><img src={require("./img/next.png")} style={{width:"16px",height:"16px"}}/></span></ListGroup.Item>
        <ListGroup.Item className='d-flex justify-content-between'>Language<div> <Button variant="primary" size="sm">
          Small button
        </Button>{' '}
        <Button variant="secondary" size="sm">
          Small button
        </Button></div></ListGroup.Item>
        <ListGroup.Item className='d-flex justify-content-between'>Guide<span ><img src={require("./img/next.png")} style={{width:"16px",height:"16px"}}/></span></ListGroup.Item>
        <ListGroup.Item className='d-flex justify-content-between'>Logout<span onClick={() => setModalShow(true)}><img src={require("./img/LOGOUT.png")} style={{width:"30px",height:"30px"}}/></span></ListGroup.Item>
      </ListGroup>
      <MyVerticallyCenteredModal
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
    </Card>
    </Container>
    <br/>
    <br/>
    <br/>
    <br/>
        </div>
    )
}

export default Profile;
