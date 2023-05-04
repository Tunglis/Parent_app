import {useEffect,useState}  from "react";
import {Form,Col,Row,Card,Container,ProgressBar,Button } from 'react-bootstrap';
import './css/Login.css'
import { Outlet, Link } from "react-router-dom";
import LoginFooter from "./loginfooter";
function Login()
{
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    function simulateNetworkRequest() {
      return new Promise((resolve) => setTimeout(resolve, 2000));
    }

    if (isLoading) {
      simulateNetworkRequest().then(() => {
        setLoading(false);
      });
    }
  }, [isLoading]);

  const handleClick = () => setLoading(true);
    return(
      <div id="Login" >
        &nbsp;
          <Container>
          <div className="box">
          <p  className="tittle">  Welcome to Smart Parents App</p>
          <Form >
       
          <div className='d-flex justify-content-center'>
        <Form.Control type="email" placeholder="Enter UserID"  style={{width:"70%"}}/>
        </div>
      <br/>
      <div className='d-flex justify-content-center'>
        <Form.Control type="password" placeholder="Password" style={{width:"70%"}}/>
        </div>
        <br/>
        <div className='d-flex justify-content-center'>
        <Link to="/Main" style={{ textDecoration: 'none' }}>
      <Button variant="success" type="submit"  disabled={isLoading}
      onClick={!isLoading ? handleClick : null}
       >
        {isLoading ? 'Loading…' : 'Login'}
      </Button>
      </Link>
      </div>
      <br/>
   
          </Form>
          <div className='d-flex justify-content-center'>
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <Button variant="warning" type="submit" >
        Sign Up
      </Button>
      &nbsp;&nbsp;&nbsp;
      <Button variant="danger" type="submit" >
        Forget Password
      </Button>
      </div>
      <div className='d-flex justify-content-center'>
      <Button variant="link">Chinese</Button>
      <Button variant="link">English</Button>
      </div>
      </div>
      
          </Container>
          <LoginFooter/>
          
        </div>
 
     
    )
   
}

export default Login;
