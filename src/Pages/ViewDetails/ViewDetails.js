import React, { useState } from 'react'
import { Data } from '../../Data/Data'
import { Button, Card, Col, Row } from 'react-bootstrap'
import './ViewDetails.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from '../../NavBar/NavBar';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';


const ViewDetails = () => {
    const Datalist = Data
   

    const editfn = (id) => {
      

    }

  return (
    <div>
      <NavBar/>

      <div className="cardDetails">

    {Datalist.map((item)=>(
      <Row>
      <Col md={3}>
        <Card style={{ maxWidth : 345  }} key={item.id} >
        <Card.Body>
        <Card.Subtitle className="mb-2 text-muted" >ID : {item.id}</Card.Subtitle>
        <Card.Title>Name : {item.name}</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">Age : {item.age}</Card.Subtitle>
        <Card.Subtitle className="mb-2 text-muted">Gender : {item.Gender}</Card.Subtitle>
        <Card.Subtitle className="mb-2 text-muted">User ID : {item.Email}</Card.Subtitle>
        </Card.Body>
        <span>
          <Link to={{pathname : '/AddDetails', state:{id :item.id}}} >
        <Button >Edit</Button>
          </Link>
        <Button>Delete</Button>
        </span>
        </Card>
      </Col>
      </Row>

))}
</div>
    </div>

  )
}

export default ViewDetails