import { useState } from 'react';
// import {
//   BrowserRouter  ,
//   Routes,
//   Route,
  
// } from "react-router-dom";
import Alert from '../../texutils/src/components/Alert';
import Navbar from '../../texutils/src/components/Navbar';
// import About from './components/About';
import TextForm from '../../texutils/src/components/TextForm';

import './App.css';

function App() {
  const [alert, setAlert] = useState(null); 
  const showAlert= (message,type) =>{
    setAlert({
      message: message,
      type:type
    })
    setTimeout(() => {
      setAlert(null);
    },1500 );
  }
  return (
    <>
 <Navbar title="TextUtils" aboutText="About Us"/>
 <Alert alert={alert}/>
    <div className="container">
   
    <TextForm showAlert={showAlert} heading="Enter the text below to analyze"/>
    </div>
    
   
    </>
   
  );
}

export default App;
