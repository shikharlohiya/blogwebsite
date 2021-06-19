import React from "react";



import "./Post_five.css";

function Post_five(){

    return (
        <div className="main-part container-fluid">
        <div className="left-part col-8">
          <div className="post-card">
            <div className="pc">
          {/*    <img className="main-card-img" src="./image/post3.png"></img> */}
            </div>
            <div style={{padding: "1rem"}} className="pc-content">
              <div className="pc-content-above ">
                <div className="pc-left-content w-100">
                <p style={{padding:"8px 8px"}} id="card-article">💼️ Job </p>
                </div>
                <div  className="card-heading ">
                <h3>Software Developer</h3>
                </div>

                <div class="cal-loc-container">
                                        <div class="cal-loc d-flex justify-content-between">
                                            <div class="card-cal-2 d-flex justify-content-start ">
                                                <div class="card-cal-img">
                                                    <img src="./image/suitcase2.png" alt=""/>
                                                </div>
                                                <p>Innovaccer Analytics Private Ltd.</p>
                                            </div>
                                            <div class="card-loc d-flex justify-content-end">
                                                <div class="card-loc-img">
                                                    <img src="./image/searcher.png" alt=""/>
                                                </div>
                                                <p>Noida, India</p>
                                            </div>
                                        </div>
                                    </div>

                                    <div class="apply-on-times-job">
                                        <p>Apply on Timesjobs</p>
                                    </div> 















              </div>
            
              <div  className="pc-footer d-flex justify-content-between">
                <div className="pc-footer-image-name d-flex">
                  <img  src="./image/circular4.png" className="rounded-circle" alt="Cinque Terre" width="50px" height="50px"/> 
                  <h4 style={{padding: "8px"}}>Joseph</h4>
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

export default Post_five;