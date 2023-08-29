import { useState } from "react";
import About from "./components/About";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";

function App() {
  const[mode, setMode] = useState('light')

  const toggleMode = ()=>{
    if(mode==='light')
    {
      setMode('dark')    
      document.body.style.backgroundColor = '#055160'  
    }
    else{
      setMode('light')
      document.body.style.backgroundColor = 'white' 
    }
  }  
  
  return (
    <>
      {/* <Navbar title="TextUtils" aboutText="About TextUtils"/> */}
      {/* <Navbar/> */}

      {/* toggleMode function sent as props*/}
      <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode}/>  
      <div className="container">
        <TextForm heading="Converter" mode={mode}/>
        {/* <About /> */}
      </div>
    </>
  );
}

export default App;
