import React, { useEffect, useState } from 'react'
import { Toast, ToastContainer } from 'react-bootstrap'

const Toaster = (props) => {
    const [toaster ,setToaster] = useState("");
    const [show , setShow] = useState(false);

  useEffect(()=>{
if(props){
    setToaster(props.Message)
    setShow(props.show)
    console.log("isCalled");
}
//eslint-disable-next-line
},[])


  return (
    <div>
        {show? 
         <ToastContainer className="p-3">
      <Toast>
        <Toast.Header>
          <img src="holder.js/20x20?text=%20" className="rounded me-2" alt="" />
          <strong className="me-auto">Bootstrap</strong>
          <small className="text-muted">2 seconds ago</small>
        </Toast.Header>
        <Toast.Body>{toaster}</Toast.Body>
      </Toast>
    </ToastContainer>
    : ""}
    </div>
  )
}

export default Toaster