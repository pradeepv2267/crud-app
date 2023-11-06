import React from 'react';
import '../Home/Home.css';
import { Col, Container, Image, Row } from 'react-bootstrap'
import Welcome from "../Home/Welcome.jpg.png";
const Home = () => {
  return (
    <div className='home'>
    <Container>
      
        <Col>
        <Col >
        <h1>Hiii...</h1>
        <br/> 
        <h1>Welcome To Our Platform</h1>
        <br/> 
        <h1>This is a Crud Application Using React Js</h1>
        </Col>
        </Col>
      

    </Container>
    </div>
  )
}

export default Home