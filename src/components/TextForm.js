import React, { useState } from 'react'

export default function TextForm(props) {

  const handleOnChange = (e) => {
    setText(e.target.value)
  }

  const handleUpClick = () => {
    let newText = text.toUpperCase()
    setText(newText)
  }

  const handleLowClick = () => {
    let newText = text.toLowerCase()
    setText(newText)
  }

  const handleWordCount = () => {
    let word = document.querySelector('#searchWord').value    
    if (word !== "")
    {
      let wordArray = text.split(" ")
      let count = 0
      wordArray.forEach(x => {        
        if (x===word)
        {
          count++
        }       
      });
      document.querySelector('#output').value = count      
    }
  }

  const [text, setText] = useState('')
  return (
    <>
      <div className="container" style={{color:(props.mode==='light')?'black':'white'}}>
        <h1>{props.heading}</h1>
        <div className="mb-3">
          <label htmlFor="myBox" className="form-label">Words</label>
          <textarea className="form-control" id="myBox" rows="8" value={text} onChange={handleOnChange} style={{backgroundColor:(props.mode==='light')?'white':'grey',color:(props.mode==='light')?'black':'white'}}/>
        </div>
        <button type="button" className="btn btn-primary mx-2" onClick={handleUpClick}>Convert to Upper Case</button>
        <button type="button" className="btn btn-primary mx-2" onClick={handleLowClick}>Convert to Lower Case</button>
        <div className="wordCount my-3 row">
          <div className="col">
            <button type="button" className="btn btn-secondary mx-2" onClick={handleWordCount}>Word Count</button>
          </div>
          <div className="col">
            <div className="input-group col">
              <span className="input-group-text">Count</span>
              <input type="text" aria-label="First name" className="form-control" id="output" disabled />
            </div>
            </div>
            <div className="input-group col">
              <span className="input-group-text">Word to search</span>
              <input type="text" aria-label="First name" className="form-control" id="searchWord" />
            </div>
          </div>
        </div>
        <div className="container my-3" style={{color:(props.mode==='light')?'black':'white'}}>
          <h2>Your Summary</h2>
          <p>{text.split(" ").length - 1} words, {text.length} characters</p>
          <p>{text.split(" ").length * 0.008} minutes to read</p>
          <h2>Preview</h2>
          <p>{text.length>0?text:'Enter you text to preview it here'}</p>
        </div>
      </>
      )
}
