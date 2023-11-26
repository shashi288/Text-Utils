import React from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'


export default function Navbar(props) {
  const mystylee={

    fontSize: "1.3rem",
    cursor: "pointer",
    color: "black",
    marginLeft:"72vw",

 
};
if(props.mode==="light"){
  mystylee.color="black";
}
else{
  mystylee.color="white";
}
  return (<>
 
<link
  rel="stylesheet"
  href="https://use.fontawesome.com/releases/v5.0.7/css/all.css"
/>

    <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">{props.title}</Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link className="nav-link" aria-current="page" to="/">Home</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/about">About</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" onClick={props.act} to="/feedback">Feedback</Link>
              </li>
             
            </ul>
            <div id="theme-btn" className={`far fa-${props.stat}  my-2`} onClick={props.toggle} style={mystylee}  type="checkbox" ></div>
          </div>
        </div>
      </nav>
      </>
  )
}
// to define the prop types, and "isRequired" is used that this prop is necessary to be passed
Navbar.propTypes={
  title:PropTypes.string.isRequired
}
Navbar.defaultProps={
  title:'Set Title'
}
