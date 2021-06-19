import React from "react";
import "../Navbar/Navbar.css"
import "./Home.css";

function Home() {
  return(
    <div className="main-page">
      
      <img src="./image/Rectangle2.png"/>
      <div className="mobile-button">
      
        <button 
                     type="button"
                    className="join-group "
                    data-bs-toggle="modal"
                    data-bs-target="#staticBackdrop">
        Join Group </button> 
       </div>
      
      <div className="words">
        <h1> Computer Engineering </h1>
        <h4>142,765 computer Engineers follow this</h4>
      </div>
      </div>
  );
}

export default Home;
