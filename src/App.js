import logo from './logo.svg';
import './App.css';
import Navbar from './component/Navbar';
import TextForm from './component/TextForm';
import Alert from './component/Alert';
import AboutUs from './component/AboutUs';
import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


function App() {
  const [mode, setmode] = useState("light")
  const [unmode, setunmode] = useState("dark")
  const [style, setStyle] = useState({
    border: "solid grey 1px",
    color: "black",
    //  backgroundColor:"black"
  })
  const [formstyle, setformstyle] = useState({
    border: "solid grey 1px",
    //  color:"white",
    //  backgroundColor:"black"
  })
  const [alert, setAlert] = useState(null)
  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null)
    }, 4000);
  }

  const toggle = () => {
    if (mode === "dark") {
      setmode("light");
      setunmode("dark");
      document.body.style.backgroundColor = "white";
      const formControlElement = document.getElementsByClassName("form-control")[0];
      if (formControlElement) {
        // Access properties only if the element exists
        formControlElement.style.backgroundColor = "white"; //if this(form control element)  won't be then it return false value then no error will be show 
        // previously when this code was build by me it was showing can't read the property style
      }
            setStyle({
        color: "yellow",
        border: "solid 2px pink",
        // backgroundColor: "white"
      });
      setformstyle({
        color: "black"
      })
      showAlert("light mode has been set", "success")
    } else {
      setmode("dark");
      setunmode("light");
      document.body.style.backgroundColor = "grey";
      const formControlElement = document.getElementsByClassName("form-control")[0];
      if (formControlElement) {
        // Access properties only if the element exists
        formControlElement.style.backgroundColor = "grey"; 
      }
            setStyle({
        color: "blue",
        border: "solid 1px red",
        // backgroundColor: "black"
      });
      setformstyle({
        color: "white"
      })
      showAlert("dark mode has been set", "dark")
    }
  };



  return (
  
    <Router>
    <Navbar naambar="naambar hai ye" tittle="Home" theme={mode} click={toggle} type={unmode} />
      <Alert alert={alert} />  
        <Routes> 
        <Route path="/" element={ <TextForm showAlert={showAlert} formStyle={formstyle} example="apna text daalo dost" heading="analyze below" />} />          {/*don't know why using props in placeholder (attributes) won't work */}  
          <Route path="/AboutUs" element={<AboutUs style={style}/>} />
        </Routes>
   </Router>


  );
}

export default App;
