import React, { useState } from 'react';
// import {useState} to use hooks concept

export default function TextForm(props) {
    const handleOnChange = (event)=>{
        setText(event.target.value);
    }
    const handleUpCase = ()=>{
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Yayyy you have successfully converted your text to UPPER CASE!", "success");
    }
    const handleLoCase = ()=>{
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("Yayyy you have successfully converted your text to lower case!", "success");
    }
    const handleClearText = ()=>{
        let newText = "";
        setText(newText);
        props.showAlert("Yayyy you have successfully cleared your text!", "success");
    }
    const handleCopy = ()=>{
        let newText = document.getElementById("myBox");
        newText.select();
        navigator.clipboard.writeText(newText.value);
        props.showAlert("Yayyy your text has been copied!", "success");
    }
    const handleExtraSpaces = ()=>{
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "));
        props.showAlert("Yayyy all the extra spaces have been removed from your text!", "success");
    }
    // declare const in hooks concept
    const [text, setText] = useState(``);
    return (
        <>
        <div className='container' style={{color : props.mode==='dark'?'white':'#042743'}}>
        <h1>{props.heading}</h1>
        <div className="mb-3">
            <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor : props.mode==='light'?'white':'grey', color: props.mode==='dark'?'white':'#042743' }} id="myBox" rows="10"></textarea>
        </div>
        <button className='btn btn-primary mx-2' onClick={handleUpCase}>Convert to UpperCase</button>
        <button className='btn btn-primary mx-2' onClick={handleLoCase}>Convert to LowerCase</button>
        <button className='btn btn-primary mx-2' onClick={handleClearText}>Clear Text</button>
        <button className='btn btn-primary mx-2' onClick={handleCopy}>Copy Text</button>
        <button className='btn btn-primary mx-2' onClick={handleExtraSpaces}>Remove Extra Spaces</button>
        </div>
        <div className='container my-3' style={{color : props.mode==='dark'?'white':'#042743'}}>
        <h2>Your Text Summary</h2>
        <p><strong>{text.split(" ").length}</strong> words and <strong>{text.length}</strong> characters.</p>
        <p>This text will take you {0.008 * text.split(" ").length} minutes to read.</p>
        <h3>TEXT PREVIEW </h3>
        <p>{text.length>0?text:"Enter something in the text box to preview"}</p>
        </div>
        </>
    )
}
