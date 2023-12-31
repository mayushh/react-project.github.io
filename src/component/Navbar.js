import React,{useState} from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
export default function Navbar(props) {
 

  return (
    <div>
        <nav className={`navbar navbar-expand-lg navbar-${props.theme} bg-${props.theme}`}>
  <div className="container-fluid">
    <a className="navbar-brand" href="/">{props.naambar}</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="/">{props.tittle}</a>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/AboutUs">Link</Link>
        </li>
        <li className="nav-item dropdown">
          <Link className="nav-link dropdown-toggle" to="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Dropdown
          </Link>
          <ul className="dropdown-menu">
            <li><a className="dropdown-item" href="/">Action</a></li>
            <li><a className="dropdown-item" href="/">Another action</a></li>
            <li><hr className="dropdown-divider"/></li>
            <li><a className="dropdown-item" href="/">Something else here</a></li>
          </ul>
        </li>
        
      </ul>
      <div className={`form-check form-switch text-${props.theme == "light"?"dark":"light"}`}>
  <input className={`form-check-input `} type="checkbox" role="switch" id="flexSwitchCheckDefault" onClick={props.click} />
  <label className={`form-check-label ` } htmlFor="flexSwitchCheckDefault"  >click here to set {props.type}-mode</label>
</div>
    </div>
  </div>
</nav>
    </div>
  )
}
Navbar.propTypes = {
    tittle: PropTypes.string ,
    naambar: PropTypes.string.isRequired
}
Navbar.defaultProps = {
    tittle : "tittle likh",
    naambar : "naambar likh",
    type:"dark",
    theme:"dark"
}
// these default Props will help when you have not written name of the prop or forgot to 