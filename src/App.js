
import React, {useEffect} from "react"
import './App.css';
import Header from './Header.js';
import Home from './Home';
import Checkout from './Checkout';
import Payment from './Payment.js';

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from "./Login";
import { auth } from "./firebase";
import { useStateValue } from "./StateProvider";


function App() {

  const[{},dispatch] = useStateValue();

  useEffect(() => {
   //will only run once when the app component loads...and never again
      
   
   auth.onAuthStateChanged(authUser => {
  
    console.log('THE USER IS >>>' ,authUser);

  if(authUser){
    //the user just logged in or the user was already logged in 

      dispatch({
        type:'SET_USER',
        user:authUser
      })
      
      
  } else{
    //the user is logged out 

    dispatch({
      type:'SET_USER',
      user:null
    })
  
  }

}) 

  }, [])

  return (
    // BEM
    <Router>
    <div className="app">

    
     
     <Switch>
        
     <Route path='/login'>
          
          <Login/>
 
 
         </Route>
        <Route path='/checkout'>
          <Header />

         <Checkout/>
        
        </Route>

        <Route path='/payment'>
          <Header />
          <Payment />
        </Route>
        <Route path='/'>
          <Header />
          
           <Home />
        </Route>
      
      </Switch>  
     

    </div>

    </Router>
  );
}

export default App;
