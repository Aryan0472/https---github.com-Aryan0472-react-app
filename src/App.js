
import'./App.css';
// import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import React, { useState } from 'react';
import Alert from './components/Alert';
// import {
//   BrowserRouter as Router,
//   Switch,
//   Route,
//   Link
// } from "react-router-dom";
 
function App() {
  const [mode, setMode] = useState('light') ;
  const [alert, setAlert] = useState(null);

  const showAlert = (message,type) =>{
    setAlert({
      msg:message,
      type:type
    })
    setTimeout(() => {
      setAlert(null);
    }, 3000);
  }

  const toggleMode = () =>{
    if(mode === 'light'){
      setMode ('dark');
      document.body.style.backgroundColor= 'rgb(24 46 127)';
      showAlert (" Dark mode has been enabled." , "success");
    }

    else
    {
      setMode ('light');
      document.body.style.backgroundColor= 'white';
      showAlert (" Light mode has been enabled." , "success");
    }
  }

  
  return (
    // <Router>
   <div className="blank">
     <>
     <Navbar title ="TextUtils" mode ={mode} toggleMode = {toggleMode} about = "About TextUtils"/>
     <Alert alert = {alert}/>
     <div className ="container my-3">
     {/* <Switch>
          <Route exact path="/about">
            <About />
          </Route>
         
          <Route exact path="/"> */}
          <TextForm showAlert = {showAlert}  mode ={mode} heading = "Textutils : On Your Command"/>
          {/* </Route>
        </Switch> */}
     
     
     </div>
     </>
   </div>
  //  </Router>
  );
}

export default App;