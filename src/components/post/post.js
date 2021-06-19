import React from "react";





function Post(){

    return (
      <div className="main-part container-fluid">
      <div className="left-part col-8">
        <div className="post-card">
          <div className="pc">
            <img className="main-card-img" src="./image/post2.png"></img>
          </div>
          <div style={{padding: "1rem"}} className="pc-content">
            <div className="pc-content-above ">
              <div className="pc-left-content w-100">
              <p style={{padding:"8px 8px"}}  id="card-article">🔬️ Education </p>
              </div>
              <div style={{padding: "10px"}} className="card-heading ">
              <h4>What if famous brands had regular fonts? Meet  RegulaBrands!</h4>
              </div>
            </div>
            <p  style={{padding: "10px"}} id="card-text">I’ve worked in UX for the better part of a decade. From now on, I plan <br/> to rei
            </p>
            <div  className="pc-footer d-flex justify-content-between">
              <div className="pc-footer-image-name d-flex">
                <img  src="./image/circular2.png" className="rounded-circle" alt="Cinque Terre" width="50px" height="50px"/> 
                <h4 style={{padding: "10px"}}>sarah </h4>
                </div>
                <div style={{padding: "4px", margin:"2.3rem 2.3rem"}} className=" d-flex justify-content-between">
                <div style={{marginRight:"1rem"}} className="pc-footer-right d-flex">
                  <img src="./image/eye.svg" className="" width="30px" height="25"/>
                   <p className="text-view"> 1.4k views </p>
                </div>
                <div>
                  <img src="./image/share.png"/>
                </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        </div>
    )
}

export default Post;