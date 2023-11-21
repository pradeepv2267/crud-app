import React, { useEffect, useState } from 'react'
import { Button, Card, Col, Container, Row } from 'react-bootstrap'
import './AddDetails.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from '../../NavBar/NavBar';
import { useLocation } from 'react-router-dom/cjs/react-router-dom';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';
import Toaster from '../../Toaster/Toaster';

// const getvalid = () =>{
//   const valid = {
//     name : false,
//     years : false,
//     email : false,
//     password : false,
//     gender : false,
//     dob : false,


//   }
// }

const AddDetails = (props) => {
  const history = useHistory();
  const location = useLocation();
  
    const [isEdit,setIsEdit] = useState(false);
    const[AddData,setData] = useState([]);
    const[name,setName] = useState("");
    const[years,setYears] = useState("");
    const[email,setEmail] = useState("");
    const[password,setPassword] = useState("");
    const[gender,setGender] = useState("");
    const[dob,setDob] = useState("");
    const[Update,setUpdate] = useState(false);
    const[message,setMessage] = useState("");
    const[showToast,setShowToast] = useState(false);
    // const [isValid,setIsValid] = useState(getvalid())



    const AddUser = async (event)=>{
      event.preventDefault();
      try{
        const newUser ={
          name,
         age: years,
          password,
          gender,
          dob,
          email
  }
  const response = await fetch("https://6516e62e09e3260018ca74cb.mockapi.io/details",{
    method: "POST",
    body: JSON.stringify(newUser),
    headers: {'Content-Type': 'application/json'},

  })
  const data = await response.json

  setData([...AddData,data])
  setYears("")
  setDob("")
  setGender("")
  setName("")
  setPassword("")
  setEmail("")
  setShowToast(true)
  setMessage("Details Added Successfully") 
      }catch (error){

      }
        
    }
    console.log(AddData)



    const editDetails = (data)=>{
      if(data){
      setIsEdit(!isEdit)   
      setYears(data.years)
        setDob(data.dob)
        setGender(data.gender)
        setName(data.name)
        setPassword(data.password)
        setEmail(data.email)  
      setUpdate(true)     
    }
    }

    useEffect(()=>{
      const getDetails = async () =>{
        try{
          const response = await fetch('https://6516e62e09e3260018ca74cb.mockapi.io/details/',{
            method: 'GET',
          })
         const data = await response.json()
         setData(data)
         //eslint-disable-next-line
        }catch(e){
          console.log(e);

        }
      }
      getDetails()
      //eslint-disable-next-line
    },[])


    const getDetails = async (id) =>{
      const response = await fetch(`https://6516e62e09e3260018ca74cb.mockapi.io/details/${id}`,{
        method: 'GET',
      })
      const data = await response.json()
      editDetails(data)
    }



  const UpdateUserDetails = (id) =>{
    const Updateobject = {
        name: name,
        years : years,
        gender : gender,
        dob : dob,
        email : email,
        password : password 
    }

    fetch(`https://6516e62e09e3260018ca74cb.mockapi.io/details/${id}`, {
      method: "PUT",
      body: JSON.stringify(Updateobject),
      headers: {
        "Content-Type": "application/json"
      },
    })
      .then((data) => data.json()
      )
      history.push('/ViewDetails')

  } 

    
    useEffect(()=>{
      if(location?.state){
        getDetails(location.state.id)
        console.log(location.state);
      }
      //eslint-disable-next-line
    },[])
    
    
 console.log(Update);

  return (
   
    <div className='main'>

<NavBar/>
     <Container key={name}>
      <Row>
        <Col md="12" className='mt-5'>
                  <Card.Header><h1>Create Profile</h1></Card.Header>

        <Col md='5 mx-auto'>
            <Row className="mb-3 ">
              <label>Name</label>
              <input type='text' className='p-2' value={name} style={{backgroundColor : "white", borderRadius : "10px", border : "none"}}  placeholder="Enter Your Name"  onChange={(e)=>setName(e.target.value)} />
                </Row></Col>
        <Col md='5 mx-auto'>
            <Row className="mb-3 ">
                <label>Email</label>
                <input type="text" placeholder="Enter Your Email" className='p-2' style={{backgroundColor : "white", borderRadius : "10px", border : "none"}} value={email} onChange={(e)=>setEmail(e.target.value)}/>
                </Row></Col>
        <Col md='5 mx-auto'>
        <Row className="mb-3 ">
          <label  >Select Gender</label>
          <select value={gender} className='p-2' style={{backgroundColor : "white", borderRadius : "10px", border : "none"}} defaultValue="Choose..." onChange={(e)=>setGender(e.target.value)}>
          <option>Gender</option>
            <option>Male</option>
            <option>Female</option>
            <option>Others</option>
          </select>
        </Row>
        </Col>   
        <Col md='5 mx-auto'>
            <Row className="mb-3 ">
                <label>Age</label>
            <input type="text" placeholder="Enter Your Age" className='p-2' style={{backgroundColor : "white", borderRadius : "10px", border : "none"}} value={years} onChange={(e)=>setYears(e.target.value)}/>

            </Row>
            </Col>
            
        <Col md='5 mx-auto'>
            <Row className="mb-3 ">
                <label>D.O.B</label>
            <input type="text" placeholder="Enter D.O.B" className='p-2' style={{backgroundColor : "white", borderRadius : "10px", border : "none"}} value={dob} onChange={(e)=>setDob(e.target.value)}/>
            </Row></Col>
        <Col md='5 mx-auto'>
            <Row className="mb-3 ">
                <label>Password</label>
                <input type="password" placeholder="Enter the Password" className='p-2' style={{backgroundColor : "white", borderRadius : "10px", border : "none"}} value={password} onChange={(e)=>setPassword(e.target.value)}/>
                </Row></Col>
                {Update ? <Button className="mb-3" size="lg" variant="outline-warning" onClick={()=>UpdateUserDetails(location.state.id)}>Update</Button> : <Button className="mb-3" size="lg" variant="outline-warning" onClick={AddUser}>Save</Button>}
        

        </Col>
      </Row>
      <Toaster
      Message={message}
      show={showToast}
      />
    </Container>
    </div>
  
  )
}

export default AddDetails
