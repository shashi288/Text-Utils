import React, { useState } from "react";


export default function Textform(props) {
    const handleUpClick= ()=>{
        let newText=text.toUpperCase();
        setText(newText)
    }
    const handleLoClick= ()=>{
        let newText=text.toLowerCase();
        setText(newText)
    }
    const handleClearClick= ()=>{
      if (!window.confirm('Do you want to delete the text')) return;
        let newText="";
        setText(newText)
    }
    const onChange= (event)=>{
        
        setText(event.target.value)
    }
    const handleExtraSpaces= ()=>{
        let newText=text.split(/[ ]+/);
        setText(newText.join(" "))
        return setText;
    }
 
    const handleCopyClick = () => {
      var text = document.getElementById("myBox");
      navigator.clipboard.writeText(text.value);
    };
    
    const [text,setText]=useState("")
    const textFormStyle= {
      height: 225, width: 1000, marginLeft: 200, marginTop: 0 , backgroundColor:"white"
    }
    
    if(props.mode==="light"){
      textFormStyle.backgroundColor="white";
      textFormStyle.color="black";
    
    }
    else{
      textFormStyle.backgroundColor="#303030";
      textFormStyle.color="white";
      
    }
  return (
    <>
      <div style={{ marginLeft: 205, marginTop: 30, fontSize: 30 }}>
        <strong>{props.heading}</strong>
      </div>
      <div className="form-floating">
        <textarea
          className="form-control"
          placeholder="Enter Text"
          value={text}
          id="myBox"
          style={textFormStyle}
          onChange={onChange}
        > </textarea>
      </div>

      <button
        className={`btn btn-${props.buttonColor} my-3`}
        style={{ marginLeft: 200, marginTop: 0 }}
        onClick={handleUpClick}
        disabled={text.split(" ").filter((element)=>{return element.length!==0}).length===0 || text===text.toUpperCase()}
      >
        Convert to Upper Case
      </button>
      <button
        className={`btn btn-${props.buttonColor} my-3 mx-1`}
        onClick={handleLoClick}
        disabled={text.split(" ").filter((element)=>{return element.length!==0}).length===0 || text===text.toLowerCase()}
      >
        Convert to Lower Case
      </button>
      <button
        className={`btn btn-${props.buttonColor} my-3 mx-1`}
        onClick={handleExtraSpaces}
        disabled={text.length<=1}
      >
        Remove Extra Spaces
      </button>
      <button
        className={`btn btn-${props.buttonColor} my-3 mx-1`}
        onClick={handleCopyClick}
        disabled={text.length<1}
      >
        Copy Text
      </button>
      <button
        className={`btn btn-${props.buttonColor} my-3 mx-1`}
        onClick={handleClearClick}
        disabled={text.length===0}
      >
        Clear
      </button>
      <div style={{ marginLeft: 200, marginTop: 0 }}>
       <strong style={{fontSize:20}} >Text Summary</strong> 
       <p style={{marginBottom: 0.1}}>{text.split(" ").filter((element)=>{return element.length!==0}).length} Words & {text.length} Characters</p>
       <p style={{marginBottom: 0.5}}>{0.08 * text.split(" ").filter((element)=>{return element.length!==0}).length} Minutes Read</p>
       <strong style={{fontSize:20}} >Preview</strong> 
       <p>{text}</p>
      </div>
    </>
  );
}
