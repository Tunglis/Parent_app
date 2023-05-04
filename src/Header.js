import React, { useState,useEffect, CSSProperties } from 'react';
import logo from './logo.svg';
import './css/pageheaderandfooter.css';
import {Navbar,Nav,Container,NavDropdown,Form,Button,Col} from 'react-bootstrap'
import { Outlet, Link } from "react-router-dom";
import PulseLoader from "react-spinners/PulseLoader";
import PacmanLoader from "react-spinners/PacmanLoader";
import Logo from './img/logo_company.png';
function Header() {
  const [loading,setLoading] = useState(false);

  useEffect(()=>{
    setLoading(true);
    setTimeout(()=>{
    setLoading(false)
    },2000)
  },[])
  return (
 
    <div className="App" >
      {
        loading ?

        <div style={{textAlign:"center", justifyContent:"center",alignItems:"center",display:"flex",height:"100vh"}}>
        <PacmanLoader color="#36d7b7" /></div>
        :
        <div>
        <Navbar  expand="lg" id="header" >
        <Container fluid>
        <img src={Logo} style={{height:"70px",width:"70px"}}/>
          <Navbar.Brand  style={{width:"50%"}} >
          <Form.Select aria-label="Default select example">
        <option>Open this select menu</option>
        <option value="1">One</option>
        <option value="2">Two</option>
        <option value="3">Three</option>
      </Form.Select>
          </Navbar.Brand >
          <Navbar.Toggle aria-controls="responsive-navbar-nav"  />
          <Navbar.Collapse id="navbarScroll" > 
            <Nav
              className="me-auto my-2 my-lg-0"
          
              navbarScroll
            >
           
              <Nav.Link ><h3 style={{color:"white"}}>Teen News</h3></Nav.Link>
              <Nav.Link ><h3 style={{color:"white"}}>News</h3></Nav.Link>
              <Nav.Link ><h3 style={{color:"white"}}>ContactUs</h3></Nav.Link>
              <Nav.Link ><Link to="/Profile" style={{ textDecoration: 'none' }}><h3 style={{color:"white"}}>Profile&nbsp;<img src={require('./img/User-Login-30.png')}/></h3></Link></Nav.Link>
              <Nav.Link ><Link to="./ExerciesRecordPage" style={{ textDecoration: 'none' }}><h3 style={{color:"white"}}>ExerciseRecord&nbsp;<img src={require('./img/menuEx.png')}/></h3></Link></Nav.Link>
             <Nav.Link > <Link to="/Leaderboard" style={{ textDecoration: 'none' }}><h3 style={{color:"white"}}>Leaderboard&nbsp;<img src={require('./img/menuLB.png')}/></h3></Link></Nav.Link>
              <Nav.Link ><Link to="./Vip" style={{ textDecoration: 'none' }}><h3 style={{color:"white"}}>Smart VIP Club &nbsp;<img src={require('./img/menuVIP.png')}/></h3></Link></Nav.Link>
              
              
              
            </Nav>
            
          </Navbar.Collapse>
        </Container>
      </Navbar>
  
     
      <Outlet />
      <Navbar expand="lg"  id="footer" fixed="bottom" >
        <Container>
        <Col className="text-center" ><Link to="/Profile" style={{ textDecoration: 'none' }}><img src={require('./img/User-Login-30.png')}/></Link></Col>
        <Col className="text-center"><Link to="./ExerciesRecordPage" style={{ textDecoration: 'none' }}><img src={require('./img/menuEx.png')}/></Link></Col>
        <Col className="text-center"><Link to="/Main" style={{ textDecoration: 'none' }}><img src={require('./img/House-30.png')}/></Link></Col>
        <Col className="text-center"><Link to="/Leaderboard" style={{ textDecoration: 'none' }}><img src={require('./img/menuLB.png')}/></Link></Col>
        <Col className="text-center"><Link to="/Vip" style={{ textDecoration: 'none' }}><img src={require('./img/menuVIP.png')}/></Link></Col>
        </Container>
      </Navbar>
      </div>
      }
     
    </div>
  );
}

export default Header;
