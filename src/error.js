import React  from 'react'
import {Carousel,Navbar,Container,Nav,Row,Col,Card} from 'react-bootstrap';
import './css/error404.css'
import Button from 'react-bootstrap/Button';

import { Outlet, Link } from "react-router-dom";
function error(){
    return(
        <div className="error404">
        <div className="errphoto">
       <img  src={require('./img/error-404.png')} width={"50%"} height={"50%"}/>
       </div>
       <br/>
       <br/>
       <Link to="/Main" style={{ textDecoration: 'none' }}>
       <Button variant="secondary" size="lg">
          Back to main Page
        </Button>
        </Link>
       </div>
       
    )
}

export default error;