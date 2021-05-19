import React from "react";
import { Link, withRouter } from "react-router-dom";
import InputBase from '@material-ui/core/InputBase';
import SearchIcon from '@material-ui/icons/Search';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import Avatar from '@material-ui/core/Avatar';


function Navigation(props) {
  return (
    
    <div className="navigation" color="secondary">
      
      <nav class="navbar navbar-expand navbar-light " style={{color: "black", background: "#f9f9f9"}}>
        <div class="container" >
        <img width="130px" height="47px"src={"./Logo_studybored.png"} />
          <div >
            <SearchIcon />
            
          <InputBase
          
              placeholder="Search…"
              color="secondary"
              
              inputProps={{ 'aria-label': 'search' }}
            />
          </div>
         

          <div style={{color: "red"}}>
            <ul class="navbar-nav ml-auto">
              <li
                class={`nav-item  ${
                  props.location.pathname === "/" ? "active" : ""
                }`}
              >
                <Link class="nav-link" to="/">
                  
                  <span class="sr-only">(current)</span>
                </Link>
              </li>
              <li
                class={`nav-item  ${
                  props.location.pathname === "/Webdeveloper" ? "active" : ""
                }`}
              >
                <Link class="nav-link" to="/Webdeveloper" >
                
                </Link>
              </li>
              <li
                class={`nav-item  ${
                  props.location.pathname === "/contact" ? "active" : ""
                }`}>
                 <Link class="nav-link" to="/About" >
                 <Avatar aria-label="recipe" style={{backgroundColor: "#FF0000"}}> M </Avatar><label>MAHESH R</label>
                </Link>
          
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default withRouter(Navigation);