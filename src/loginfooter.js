import React from "react";
import { Container, Row } from "react-bootstrap";

function LoginFooter(){
    return(
        <div >
        <Container>
        <div className='d-flex justify-content-center'>
          
            <img src={require('./img/ICON-Facebook.png')} width="50px" height="50px" />
            <img src={require('./img/ICON-04.png')} width="50px" height="50px" />
            <img src={require('./img/ICON-Email.png')} width="50px" height="50px" />
      </div>
      <div className='d-flex justify-content-center'>
      Copyright @ 2023 by Smart Edcucation Gourp
    </div>
    <p style={{textAlign:"center"}}>
        <a href="https://www.flaticon.com/free-icons/support" title="support icons">Support icons created by Freepik - Flaticon</a>
        </p>
        <img src={require("./img/ICON-02.png")} style={{width:"108%",height:"15px",marginLeft:"-20px"}}></img>
        </Container>
        </div>
    )


};


export default LoginFooter;