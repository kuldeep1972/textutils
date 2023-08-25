import React,{useState} from 'react'

export default function TextForm(props) {

  const handleOnChange = (e) =>  {
    setText(e.target.value)    
  }

  const handleUpClick = () =>  {    
    let newText = text.toUpperCase()
    setText(newText)
  }

  const handleLowClick = () =>  {    
    let newText = text.toLowerCase()
    setText(newText)
  }

  const[text, setText] = useState('')
  return (
    <>
    <div className="container">
      <h1>{props.heading}</h1>
      <div className="mb-3">
        <label htmlFor="myBox" className="form-label">Words</label>
        <textarea className="form-control" id="myBox" rows="8" value={text} onChange={handleOnChange}></textarea>               
      </div>
      <button type="button" className="btn btn-primary mx-2" onClick={handleUpClick}>Convert to Upper Case</button>
      <button type="button" className="btn btn-primary mx-2" onClick={handleLowClick}>Convert to Lower Case</button>
    </div>
    <div className="container my-3" >
      <h2>Your Summary</h2>
      <p>{text.split(" ").length-1} words, {text.length} characters</p>
      <p>{text.split(" ").length * 0.008} minutes to read</p>
      <h2>Preview</h2>
      <p>{text}</p>
    </div>
    </>
  )
}
