import React, { useEffect, useState } from 'react'
import { Button, Card, Col, Row } from 'react-bootstrap'
import './ViewDetails.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from '../../NavBar/NavBar';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';


const ViewDetails = () => {
    const [datas, setDatas] = useState([])



    useEffect(()=>{
      getDetails()
      //eslint-disable-next-line
    },[])
    const getDetails = async () =>{
      try{
        const response = await fetch('https://6516e62e09e3260018ca74cb.mockapi.io/details',{
          method: 'GET',
        })
       const data = await response.json()
       setDatas(data)
      }catch(e){

      }
    }

    const deleteStudent = (studentId)=>{

      const response =   fetch(`https://6516e62e09e3260018ca74cb.mockapi.io/details/${studentId}`, { method: 'DELETE' })
      response.then(
        (data)=>{
          const repData = data.response
          getDetails()
        }
      )
    }

  return (
    <div>
      <NavBar/>

      <div className="cardDetails">

    {datas.map((item, idx)=>(
      <Row>
      <Col md={3}>
        <Card style={{ maxWidth : 345  }} key={idx} >
        <Card.Body>
        <Card.Subtitle className="mb-2 text-muted" >ID : {item.id}</Card.Subtitle>
        <Card.Title>Name : {item.name}</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">Age : {item.age}</Card.Subtitle>
        <Card.Subtitle className="mb-2 text-muted">Gender : {item.gender}</Card.Subtitle>
        <Card.Subtitle className="mb-2 text-muted">User ID : {item.email}</Card.Subtitle>
        </Card.Body>
        <span>
          <Link to={{pathname : '/AddDetails', state:{id : item.id}}} >
        <Button >Edit</Button>
          </Link>
        <Button onClick={()=>deleteStudent(item.id)}>Delete</Button>
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