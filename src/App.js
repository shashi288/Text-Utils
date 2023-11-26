
import './App.css';
import About from './componenets/About';
import Navbar from './componenets/Navbar'
import Textform from './componenets/Textform';
import Feedback from './componenets/Feedback';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import React,{useState} from 'react';
function App() {
  const [mode,setMode]= useState("light");
  const [stat,setStat]= useState("moon")
  const [buttonColor,setButtonColor]= useState("dark");

  
  const toggleMode = ()=>{
    if(mode==="light"){
      setMode("dark");
      setStat("sun");
      setButtonColor("light");
      document.body.style.backgroundColor='#303030';
      document.body.style.color="white"
    }
    else{
      setMode("light");
      setStat("moon");
      setButtonColor("dark");
      document.body.style.backgroundColor='	white';
      document.body.style.color="black"
    }
  }
  return (
    <>
    <Router>
    <Navbar title="Text-Utils" mode={mode} toggle={toggleMode} stat={stat}/>
    <Routes>
          <Route path="/" element={<Textform heading="Enter the text to analyze below" mode={mode} buttonColor={buttonColor} />}/>
          <Route path="/about" element={<About mode={mode}/>}/>
          
          <Route path="/feedback"element={<Feedback/>}/>
     
          
        </Routes>
      </Router>
    </>
      
  );
}

export default App;
