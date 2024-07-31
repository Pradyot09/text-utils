import React, { useState } from 'react';

function TextForm(props) {

  const [text, setText] = useState('');

  const handleUpClick = ()=>{
    // console.log("Uppercase was clicked" + text);
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Converted to uppercase!", "success");
  }

  const handleLoClick = ()=>{
    // console.log("Lowercase was clicked" + text);
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Converted to lowercase!", "success");
  }

  const handleClearClick = ()=>{
    // console.log("Clear was clicked" + text);
    let newText = '';
    setText(newText);
    props.showAlert("Cleared text!", "success");
  }

  const handleOnChange = (event)=>{
    // console.log('On change');
      setText(event.target.value);
  }

  const handleCapitalCharClick = ()=>{
    // console.log("Uppercase was clicked" + text);
    let newText = text.split(".").map((element) => element.trim().charAt(0).toUpperCase() + element.trim().slice(1)).join(".");
    // newText = newText.charAt(0).toUpperCase() + newText.slice(1);
    // newText.forEach(element => {
    //   newText = element.charAt(0).toUpperCase();
    // });
    setText(newText);
    // console.log(newText);
    props.showAlert("First letter capitalized!", "success");
  }

  const handleExtraSpacesClick = ()=>{
    // console.log("Uppercase was clicked" + text);
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
    props.showAlert("Extra spaces removed!", "success");
  }
  return (
    <>
    <div className='container' style={{color: props.mode === 'dark' ? 'white' : 'black'}}>
      <h1>{props.heading}</h1>
        <div className="mb-3">
          <textarea className="form-control" id="myBox" value={text} onChange={handleOnChange} 
          style ={{backgroundColor: props.mode === 'dark' ? 'grey' : 'white', color: props.mode === 'dark' ? 'white' : 'black'}} rows="10"></textarea>
        </div>
      <div className="mb-3">
        <button className="btn btn-primary " onClick={handleUpClick}>Convert to Uppercase</button>
        <button className="btn btn-primary mx-1" onClick={handleLoClick}>Convert to Lowercase</button>
        <button className="btn btn-primary mx-1" onClick={handleClearClick}>Clear Text</button>
        <button className="btn btn-primary mx-1" onClick={handleCapitalCharClick}>Make First Letter Capital</button>
        <button className="btn btn-primary mx-1" onClick={handleExtraSpacesClick}>Remove Extra White Spaces</button>
      </div>
    </div>
    <div className="container my-3" style={{color: props.mode === 'dark' ? 'white' : 'black'}}>
        <h2>Your Text Summary Here</h2>
        <p>{text.split(" ").length} words and {text.length} characters in your text</p>
        <p>{0.008 * text.split(" ").length} Minutes read</p>
        <h2>Preview</h2>
        <p>{text.length > 0 ? text : 'Nothing to preview'}</p>
    </div>
    </>
  )
}

export default TextForm
