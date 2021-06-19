import React from "react";
import "./Navbar.css";

const Navbar = () =>{
return (
  <>

<div className= "navbar navbar-expand-lg navbar-light bg-light" >
{console.log(window.innerWidth)}
    <div className="mainnav-container" >
         <a className="navbar-brand " href="#"><img src="./image/logo.png" alt="" />  </a>
        <div className=" navbar-nav " >
            <div className="search bar d-flex">
              
             
              <input className="form-control"placeholder="Search for your favorite group of ATG"
                aria-label="Search" /> 
                
            </div>
        </div>
        <div className="d-flex" id="create-account"> 
        <h4> Create account </h4> 
        <button type="button"  className="btn" data-bs-toggle="modal" data-bs-target="#staticBackdrop">It's Free
        
        </button>
        </div>
       </div>
       </div>
        </>
      );
}



export default Navbar;