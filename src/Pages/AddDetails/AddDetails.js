import React, { useEffect, useState } from 'react'
import { Button, Card, Col, Container, Form, Row } from 'react-bootstrap'
import './AddDetails.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Data } from '../../Data/Data';
import NavBar from '../../NavBar/NavBar';
import { useLocation } from 'react-router-dom/cjs/react-router-dom';
import { useParams } from 'react-router-dom/cjs/react-router-dom.min';

// const createContxt = createContxt()


const AddDetails = (props) => {
  const location = useLocation()

    const[AddData,setData] = useState(Data)
    const[id,setID] = useState("");
    const[name,setName] = useState("");
    const[age,setAge] = useState("");
    const[Email,setEmail] = useState("");
    const[password,setPassword] = useState("");
    const[Gender,setGender] = useState("");
    const[dob,setDob] = useState("");

    const {ID} = useParams();


    const AddUser = ()=>{
        const newUser ={
            id,
            name,
            age,
            password,
            Gender,
            dob,
            Email
    }
    setData([...AddData,newUser])
    setID("")
    setAge("")
    setDob("")
    setGender("")
    setName("")
    setPassword("")
    setEmail("")
    }
    console.log(AddData)



    const editDetails = (ID)=>{
      const editUser = {
        

      }

    }




    useEffect(()=>{
      setID(id.ID)
      setAge("")
      setDob("")
      setGender("")
      setName("")
      setPassword("")
      setEmail("")
    },[location.state.id])
    
    
 

  return (
   
    <div className='main'>

<NavBar/>
     <Container key={password}>
      <Row>
        <Col md="12" className='mt-5'>
        {/* <Card auto>
      <Card.Body >
        <Card.Title></Card.Title> */}
                  <Card.Header><h1>Create Profile</h1></Card.Header>

        <Col md='5 mx-auto'>
            <Row className="mb-3 ">
                <Form.Label>Name</Form.Label>
                <Form.Control type="text" placeholder="Enter Your Name" value={name} onChange={(e)=>setName(e.target.value)}/>
                </Row></Col>
        <Col md='5 mx-auto'>
            <Row className="mb-3 ">
                <Form.Label>Email</Form.Label>
                <Form.Control type="text" placeholder="Enter Your Email" value={Email} onChange={(e)=>setEmail(e.target.value)}/>
                </Row></Col>
        <Col md='5 mx-auto'>
        <Row className="mb-3 ">
        <Form.Group as={Col}  controlId="formGridState">
          <Form.Label  >Select Gender</Form.Label>
          <Form.Select value={Gender} defaultValue="Choose..." onChange={(e)=>setGender(e.target.value)}>
          <option>Gender</option>
            <option>Male</option>
            <option>Female</option>
            <option>Others</option>
          </Form.Select>
        </Form.Group>   
        </Row>
        </Col>   
            
        <Col md='5 mx-auto'>
            <Row className="mb-3 ">
                <Form.Label>D.O.B</Form.Label>
            <Form.Control type="text" placeholder="Enter D.O.B" value={dob} onChange={(e)=>setDob(e.target.value)}/>
            </Row></Col>
        <Col md='5 mx-auto'>
            <Row className="mb-3 ">
                <Form.Label>Age</Form.Label>
            <Form.Control type="text" placeholder="Enter Your Age" value={age} onChange={(e)=>setAge(e.target.value)}/>
            </Row></Col>
        <Col md='5 mx-auto'>
            <Row className="mb-3 ">
                <Form.Label>id</Form.Label>
                <Form.Control type="text" placeholder="Enter ID" value={id} onChange={(e)=>setID(e.target.value)}/>
                </Row></Col>
        <Col md='5 mx-auto'>
            <Row className="mb-3 ">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Enter the Password" value={password} onChange={(e)=>setPassword(e.target.value)}/>
                </Row></Col>
        <Button className="mb-3" size="lg" variant="outline-warning" onClick={AddUser}>Save</Button>
      {/* </Card.Body>
    </Card>        */}
        </Col>
      </Row>
    </Container>
    </div>
  
  )
}

export default AddDetails