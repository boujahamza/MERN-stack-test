import React from "react";
 
// We import bootstrap to make our application look better.
import "bootstrap/dist/css/bootstrap.css";
 
// We import NavLink to utilize the react router.
import { NavLink, Navigate } from "react-router-dom";
 
// Here, we display our Navbar
class Navbar extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      isLoggedIn: null,
    }

    this.logout = this.logout.bind(this);
  }

  logout() {
    localStorage.removeItem("information");
    this.setState({
      isLoggedIn: null,
      name: ""
    })
    window.location.replace("/");
  }

  render(){
    if(localStorage.getItem("information")){
      return(
        <div>
        <nav className="navbar navbar-expand-lg navbar-light bg-light ">
          <NavLink className="navbar-brand" to="/">
            MERN
          </NavLink>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
  
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <NavLink className="nav-link" to="/upload">
                  Upload
                </NavLink>
              </li>
              <li>
                <NavLink className="nav-link" to="/show">
                  Show
                </NavLink>
              </li>
              <li>
                <a href="#" className="nav-link" onClick={this.logout}>
                  Logout
                </a>
              </li>
              <span class="navbar-text pull-right"><b>
                {localStorage.getItem("information")?"Logged in as: "+JSON.parse(localStorage.getItem("information"))["name"]:null}
              </b></span>
            </ul>
          </div>
        </nav>
      </div>
      );
    }
    else
    return (
      <div>
        <nav className="navbar navbar-expand-lg navbar-light bg-light justify-content-between">
          <NavLink className="navbar-brand" to="/">
            MERN
          </NavLink>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
  
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <NavLink className="nav-link" to="/login">
                  Login
                </NavLink>
              </li>
              <li>
                <NavLink className="nav-link" to="/signup">
                  Signup
                </NavLink>
              </li>
              <li>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    );}
};
 
export default Navbar;
