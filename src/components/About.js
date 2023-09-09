import React, { useState } from 'react'

export default function About(props) {

  let myStyle = {
    color:(props.mode==='dark')?'white':'black',
    backgroundColor:(props.mode==='dark')?'#373535':'white'
  }

  // const [myStyle, setMyStyle] = useState({
  //   color: 'black',
  //   backgroundColor: 'white'    
  // })
  // const [btnText, setButtontext] = useState('Enable Dark Mode')

  // const toggleMode = () => {
  //   if (myStyle.color === 'black') {
  //     setMyStyle(
  //       {
  //         color: 'white',
  //         backgroundColor: 'black',
  //         border: '0.5px solid white'         
  //       }
  //     )
  //     setButtontext('Enable Light Mode')
  //   }
  //   else {
  //     setMyStyle(
  //       {
  //         color: 'black',
  //         backgroundColor: 'white'
  //       }
  //     )
  //     setButtontext('Enable Dark Mode')
  //   }
  // }

  return (
    <div className="container">
      <h1 className='my-2' style={{color:(props.mode==='dark')?'white':'black'}}>About Us</h1>
      <div className="accordion" id="accordionExample">
        <div className="accordion-item " style={myStyle}>
          <h2 className="accordion-header">
            <button className="accordion-button" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
              About Us
            </button>
          </h2>
          <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
            <div className="accordion-body">
              <strong>Lorem ipsum dolor sit, amet consectetur</strong> adipisicing elit. Esse impedit, ullam quo libero iste facere exercitationem sit praesentium inventore molestiae tempora dolores! Dicta, sint?
            </div>
          </div>
        </div>
        <div className="accordion-item" style={myStyle}>
          <h2 className="accordion-header">
            <button className="accordion-button collapsed" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
              Our Clients
            </button>
          </h2>
          <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
            <div className="accordion-body">
              <strong>This is the second item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classNamees that we use to style each element. These classNamees control the overall appearance, as well as the showing and hiding via CSS transitions. Y though the transition does limit overflow.
            </div>
          </div>
        </div>
        <div className="accordion-item" style={myStyle}>
          <h2 className="accordion-header">
            <button className="accordion-button collapsed" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
              Locations
            </button>
          </h2>
          <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
            <div className="accordion-body">
              <strong>This is the third item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classNamees th go within the , though the transition does limit overflow.
            </div>
          </div>
        </div>
      </div>
      {/* <div className="container my-2">
        <div className="btn btn-primary" onClick={toggleMode}>{btnText}</div>
      </div> */}
    </div>
  )
}
