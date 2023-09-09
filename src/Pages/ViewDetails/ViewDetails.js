import React from 'react'
import { Data } from '../../Data/Data'
import { Card } from 'react-bootstrap'

const ViewDetails = () => {
    const Datalist = Data
  return (
    <div>
    {Datalist.map((item)=>(
        <Card style={{ maxWidth : 345 }} key={item.id}>
        <Card.Body>
        <Card.Subtitle className="mb-2 text-muted">ID : {item.id}</Card.Subtitle>
        <Card.Title>Name : {item.name}</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">Age : {item.age}</Card.Subtitle>
        <Card.Subtitle className="mb-2 text-muted">Gender : {item.Gender}</Card.Subtitle>
        <Card.Subtitle className="mb-2 text-muted">User ID : {item.Email}</Card.Subtitle>
        
        {/* <Button variant="outline-success" onClick={()=>editUserData(user.id)} >EDIT</Button>
        <Button variant="outline-success" onClick={()=>deleteUserData(user.id)}>DELETE</Button> */}
        </Card.Body>
    </Card>

    ))}
    </div>
  )
}

export default ViewDetails