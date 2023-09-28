import { Route, Switch } from 'react-router-dom';
import './App.css';
import AddDetails from './Pages/AddDetails/AddDetails';
import ViewDetails from './Pages/ViewDetails/ViewDetails';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './NavBar/NavBar';
// import { useEffect } from 'react';


function App() {


  return (
    <div className="App">
      <Switch>        
     
      <Route exact path="/">
        <NavBar/>
      {/* <AddDetails/> */}
      </Route>
      <Route path="/AddDetails">
      <AddDetails/>
      </Route>
      <Route path="/ViewDetails">
        <ViewDetails/>

      </Route>

      
      </Switch>
      
    </div>
  );
}

export default App;
