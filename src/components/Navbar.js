import React from 'react';
import PropTypes from 'prop-types';
import { Link }  from 'react-router-dom';

function Navbar(props) {

  const handleOnChange = (event)=>{
    
    let searchText = event.target.value.toLowerCase();
    let enteredText = document.getElementById('myBox').value;
    let myBoxDiv = document.getElementById('myBox');
    // console.log(searchText);
    // console.log(enteredText);

    
    enteredText.split(" ").map((element) => element.trim().toLowerCase()).forEach(element => {
      if(searchText === element && searchText !== ""){
        console.log("Match found!");
        // element.fontcolor("blue");
        // myBoxDiv.innerHTML.replace(element, `<mark>${element}</mark>`);
        // myBoxDiv.innerHTML = String.fontcolor("green");
        myBoxDiv.innerHTML = myBoxDiv.innerText.replace(element, `<mark>${element}</mark>`);
        // myBoxDiv.addEventListener('keyup', (event) => {
        //   console.log("Key pressed!");
        //  event.target.style.color = "blue";
        // })
        console.log(myBoxDiv.innerText, "here");
      }
    });
  }
  return (
    <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
    <div className="container-fluid">
      <Link className="navbar-brand" to="/">{props.title} </Link>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li className="nav-item">
            <Link className="nav-link active" aria-current="page" to="/">Home</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/about">{props.about}</Link>
          </li>
        </ul>
        <form className="d-flex" role="search">
          <input className="form-control me-2" onChange={handleOnChange} type="search" placeholder="Search" aria-label="Search"/>
          <button className="btn btn-primary" type="submit">Search</button>
        </form>
        <div className={`form-check form-switch mx-3 text-${props.mode==='light'?'dark':'light'}`}>
          <input className="form-check-input" onClick={props.toggleMode} type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
          <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Enable Dark Mode</label>
        </div>
      </div>
    </div>
  </nav>
  )
}

Navbar.prototype ={
    title: PropTypes.string.isRequired,
    about: PropTypes.string.isRequired
  }

Navbar.defaultProps = {
    title: "Set title here",
    about: "About"
}

export default Navbar
