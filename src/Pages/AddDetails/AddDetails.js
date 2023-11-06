import React, { useEffect, useState } from 'react'
import { Button, Card, Col, Container, Form, Row } from 'react-bootstrap'
import './AddDetails.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from '../../NavBar/NavBar';
import { useLocation } from 'react-router-dom/cjs/react-router-dom';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';

// const createContxt = createContxt()


const AddDetails = (props) => {
  const history = useHistory();
  const location = useLocation()
  
    const [isEdit,setIsEdit] = useState(false)
    const[AddData,setData] = useState([])
    const[name,setName] = useState("");
    const[age,setAge] = useState("");
    const[email,setEmail] = useState("");
    const[password,setPassword] = useState("");
    const[gender,setGender] = useState("");
    const[dob,setDob] = useState("");
    const[Update,setUpdate] = useState(false);



    const AddUser = async (event)=>{
      event.preventDefault();
      try{
        const newUser ={
          name,
          age,
          password,
          gender,
          dob,
          email
  }
  const response = await fetch("https://6516e62e09e3260018ca74cb.mockapi.io//details",{
    method: "POST",
    body: JSON.stringify(newUser),
    headers: {'Content-Type': 'application/json'},

  })
  const data = await response.json

  setData([...AddData,data])
  setAge("")
  setDob("")
  setGender("")
  setName("")
  setPassword("")
  setEmail("")
  history.push("/ViewDetails")
      }catch (error){

      }
        
    }
    console.log(AddData)



    const editDetails = (id)=>{
      setIsEdit(!isEdit)   
      let editData = AddData[id]? AddData[id] : ''
      // setID(editData.id)
      setAge(editData.age)
      setDob(editData.dob)
      setGender(editData.gender)
      setName(editData.name)
      setPassword(editData.password)
      setEmail(editData.Email)
      setUpdate(true)

          
    }

    useEffect(()=>{
      const getDetails = async () =>{
        try{
          const response = await fetch('https://6516e62e09e3260018ca74cb.mockapi.io/details/',{
            method: 'GET',
          })
         const data = await response.json()
         setData(data)
        }catch(e){

        }
      }
      getDetails()
      //eslint-disable-next-line
    },[])



  const UpdateUserDetails = () =>{
    const Updateobject = {
        name: name,
        age : age,
        gender : gender,
        dob : dob,
        email : email,
        password : password 
    }

    fetch(`https://6516e62e09e3260018ca74cb.mockapi.io//details/${ID}`, {
      method: "PUT",
      body: JSON.stringify(Updateobject),
      headers: {
        "Content-Type": "application/json"
      },
    })
      .then((data) => data.json())
      history.push('/ViewDetails')



  }
    
    
    
    
    useEffect(()=>{
      if(location.state){
        let editId = location.state ? location.state.id : ''; 
        editDetails(editId)
        console.log(location.state);
      }
    },[])
    
    
 console.log(Update);

  return (
   
    <div className='main'>

<NavBar/>
     <Container key={age}>
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
                <Form.Control type="text" placeholder="Enter Your Email" value={email} onChange={(e)=>setEmail(e.target.value)}/>
                </Row></Col>
        <Col md='5 mx-auto'>
        <Row className="mb-3 ">
        <Form.Group as={Col}  controlId="formGridState">
          <Form.Label  >Select Gender</Form.Label>
          <Form.Select value={gender} defaultValue="Choose..." onChange={(e)=>setGender(e.target.value)}>
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
        {/* <Col md='5 mx-auto'>
            <Row className="mb-3 ">
                <Form.Label>id</Form.Label>
                <Form.Control type="text" placeholder="Enter ID" value={id} onChange={(e)=>setID(e.target.value)}/>
                </Row></Col> */}
        <Col md='5 mx-auto'>
            <Row className="mb-3 ">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Enter the Password" value={password} onChange={(e)=>setPassword(e.target.value)}/>
                </Row></Col>
                {Update ? <Button className="mb-3" size="lg" variant="outline-warning" onClick={UpdateUserDetails}>Update</Button> : <Button className="mb-3" size="lg" variant="outline-warning" onClick={AddUser}>Save</Button>}
        
      {/* </Card.Body>
    </Card>        */}
        </Col>
      </Row>
    </Container>
    </div>
  
  )
}

export default AddDetails