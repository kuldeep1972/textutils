import React,{useState} from 'react'


export default function TextForm(props) {

  const handleOnChange = (e) =>  {
    setText(e.target.value)    
  }

  const handleUpClick = () =>  {    
    let newText = text.toUpperCase()
    setText(newText)
  }

  const[text, setText] = useState('Enter text here')
  return (
    <div>
      <h1>{props.heading}</h1>
      <div className="mb-3">
        <label htmlFor="myBox" className="form-label">Words</label>
        <textarea className="form-control" id="myBox" rows="8" value={text} onChange={handleOnChange}></textarea>               
      </div>
      <button type="button" className="btn btn-primary" onClick={handleUpClick}>Convert to Upper Case</button>
    </div>
  )
}
