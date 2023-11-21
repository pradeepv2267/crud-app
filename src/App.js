import React,{ useEffect, useState } from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import ViewDetails from './Pages/ViewDetails/ViewDetails';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './NavBar/NavBar';
import Home from './Pages/Home/Home';

import AddDetails from './Pages/AddDetails/AddDetails';




function App() {
  const [data,setData] = useState([])

  const getDetails = async () =>{
    try{
      const response = await fetch('https://6516e62e09e3260018ca74cb.mockapi.io/details',{
        method: 'GET',
      })
     const responseData = await response.json()
     setData(responseData)
    }catch(e){

    }
  }
  
  useEffect(()=>{
    getDetails()
    //eslint-disable-next-line
  },[]);


  return (
    <div className="App">
      <Switch>        
     
      <Route exact path="/">
        <NavBar/>
        <Home        />
      </Route>
      <Route path="/AddDetails">
      <AddDetails
        data={data}
        setData={setData}
        />
      </Route>
      <Route path="/ViewDetails">
      {/* <Suspense fallback={<div>Loading...</div>}> */}
        <ViewDetails
        data={data}
        setData={setData}
        />
        {/* </Suspense> */}

      </Route>

      
      </Switch>
      
    </div>
  );
}

export default App;
