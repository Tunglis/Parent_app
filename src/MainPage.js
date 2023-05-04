import React  from 'react'
import {Carousel,Navbar,Container,Nav,Row,Col,Card} from 'react-bootstrap';
import './css/mainpage.css';
function MainPage()
{
    return(
      <div className="Carousel" >
        <br/>
        <Carousel id="carouseslide" >
      <Carousel.Item >
        <img
          className="d-block w-100"
          src={require('./img/TOEFLAWARD2021BANNER.jpg')}
          alt="First slide"
        />
        
      </Carousel.Item>
      <Carousel.Item > 
        <img
          className="d-block w-100"
          src={require('./img/TOEFLAWARD2021BANNER.jpg')}
         
          alt="Second slide"
        />

        
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={require('./img/TOEFLAWARD2021BANNER.jpg')}
          alt="Third slide"
        />

       
      </Carousel.Item>
    </Carousel>
   <br/>
        <Container>
       <Row>
        <Col>  <div className="zoom"><img src={require('./img/Announcement-50.png')} style={{ weight:"30px", height:"30px",alignItems:"Center"}}/><br/><br/>News</div></Col>
        <Col> <div className="zoom"><img src={require('./img/Announcement-50.png')} style={{ weight:"30px", height:"30px"}}/><br/><br/>Events</div></Col>
        <Col>  <div className="zoom"><img src={require('./img/Announcement-50.png')} style={{ weight:"30px", height:"30px"}}/><br/><br/>TOEFL</div></Col>
        <Col>  <div className="zoom"><img src={require('./img/Announcement-50.png')} style={{ weight:"30px", height:"30px"}}/><br/><br/>E-Learning</div></Col>
          </Row>
        </Container>
    <br/>
    <br/>
    <br/>
   
    <Container>
    <h1>News</h1>
    <br/>
    <Card style={{maxWidth:"90%",marginLeft:"5%"}}>
      <Card.Img variant="top" src={require('./img/Cathay Pacific TOEIC Eng.png')}/>
      <Card.Body>
        <Card.Title ><strong>Cathay Pacific Recruits Flight Attendants with a Valid TOEIC Score</strong> </Card.Title>
        <small className="text-body-secondary">Last updated 3 mins ago</small>
       
      </Card.Body>
    </Card>
    </Container>    
    <br/>
    <br/>
    </div>

    
    )
}

export default MainPage;