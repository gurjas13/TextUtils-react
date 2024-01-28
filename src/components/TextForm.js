import React, {useState} from 'react'

export default function TextForm(props) {
    const[text,setText]= useState("");
    const handleUpClick = () =>{
        // console.log("Uppercase was clicked"+text);
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to Uppercase","success")
    }

    const handleLoClick = () =>{
        // console.log("Uppercase was clicked"+text);
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("Converted to Lowercase","success")
    }

    const handleClrClick = () =>{
        // console.log("Uppercase was clicked"+text);
        let newText = " ";
        setText(newText);
        props.showAlert("Text cleared","success")
    }
    const handleRvrClick = () =>{
        
        let newText = text.split('').reverse().join('');;
        setText(newText);
        props.showAlert("Text is reversed","success")
    }
    const handleCopy = () =>{
        
        var text= document.getElementById("myBox");
        text.select();
        navigator.clipboard.writeText(text.value);
        props.showAlert("copied to clipboard","success")
    }

     


    const handleOnChange = (event) =>{
        // console.log("On change");
        setText(event.target.value);
    }

    
  return (
    <>
    <div className="container">
    <div className="mb-3">
      <h1>{props.heading}</h1>
  <textarea className="form-control" value={text} onChange={handleOnChange} id="myBox" rows="8"></textarea>
</div>
<button className="btn btn-primary mx-1" onClick={handleUpClick} >Convert to UpperCase</button>
<button className="btn btn-primary mx-1" onClick={handleLoClick} >Convert to LowerCase</button>
<button className="btn btn-primary mx-1" onClick={handleClrClick} >Clear Text</button>
<button className="btn btn-primary mx-1" onClick={handleRvrClick} >Reverse Text</button>
<button className="btn btn-primary mx-1" onClick={handleCopy} >Copy Text</button>
    </div>
    <div className="container my-2">
        <h2>Your Text Summary</h2>
        <p>{text.split(" ").filter((element)=>{return element.length!==0}).length}characters</p>
        <p>{0.08 * text.split(" ").length} Minutes read</p>
        <h2>Preview </h2>
        <p>{text.length>0? text:"Enter something in the textbox above to preview it here"}</p>
    </div>
     
</>
  )
}
