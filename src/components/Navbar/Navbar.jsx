import React from "react";
import "./Navbar.css";
import {Link} from "react-router-dom";

export default function Navbar() {
  return (
    <>
      <div className="info">
        <h1 style={{ margin: 0 }}>Denzel Ekes</h1>
        <div className="info-bar">
          <p className="info-item">dekes@college.harvard.edu</p>
        </div>
        <div className="info-bar">
          <Link 
          className="info-link"
          to = {{pathname: "https://instagram.com/denzel.ekes"}}
          target="_blank"
          >
            Instagram
            </Link>
        </div>
      </div>
      <div className="nav-background">
        <Link className="nav-link" to={{pathname: "/about"}}>About</Link>
        <Link className="nav-link" to={{pathname: "/experience"}}>Experience</Link>
        <Link className="nav-link" to={{pathname: "/projects"}}>Projects</Link>
        <Link className="nav-link" to={{pathname: "/education"}}>Education</Link>
      </div>
    </>
  );
}
