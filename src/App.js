import { useState } from "react";
import About from "./components/About";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import Alert from "./components/Alert";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";

function App() {
  const[mode, setMode] = useState('light')
  const[alertMsg, setAlertMsg] = useState(null)

  const showAlert = (message,type) =>{
    setAlertMsg({
      msg:message,
      type:type
    })

    setTimeout(()=>{
      setAlertMsg(null)
    }, 1000)
  }

  const toggleMode = ()=>{
    if(mode==='light')
    {
      setMode('dark')    
      document.body.style.backgroundColor = '#055160'  
      showAlert('Dark Mode Enabled','success')
      document.title = "TextUtils - Dark Mode"
    }
    else{
      setMode('light')
      document.body.style.backgroundColor = 'white' 
      showAlert('Light Mode Enabled','success')
      document.title = "TextUtils - Light Mode"
    }
  }  
  
  return (
    <>
    <Router>    
      {/* <Navbar title="TextUtils" aboutText="About TextUtils"/> */}
      {/* <Navbar/> */}
      {/* toggleMode function sent as props*/}
      <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode}/>  
      <Alert alertMsg={alertMsg}/>
      <div className="container">
        <Routes>
          <Route exact path="/" element={<TextForm heading="Converter" mode={mode} showAlert={showAlert}/>}/>
            {/* <TextForm heading="Converter" mode={mode} showAlert={showAlert}/> */}          
          <Route exact path="/about" element={<About mode={mode}/>}/>   
        </Routes>        
      </div>
      </Router>
    </>
  );
}

export default App;


