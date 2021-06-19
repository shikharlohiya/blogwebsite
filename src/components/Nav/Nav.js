import React from "react";

import "./Nav.css";
function Nav() {
  return (
    <>
      <div className="main-part container-fluid">
        <div className="nav-2">
        <div className="secand-mobile-nav"> 
                 <div className="d-flex justify-content-between">
                <p
                      className="nav-link nav-link-bold"
                      area-aria-current="page" style={{color: "black"}}>
                      
                      
                      All post(32) </p>
                      <button
                    type="button"
                    className=" nav-btn2  btn btn-light"
                    data-bs-toggle="modal"
                    data-bs-target="#staticBackdrop">Filter All
                    </button>
                    </div>
                    </div>
                  
                  
                  

          <nav className="secand-nav navbar navbar-expand-lg navbar-light bg-light"
            id="secand-nav">
          
            <div className="navigation container-fluid">
              <div className="secand-nav-container" id="navbarsupprtedcontent">
                
                <ul className="li-container navbar-nav me-auto">
                  <li className="nav-item nav-active-tab  id= nav-item-1">
                    <a
                      className="nav-link nav-link-bold"
                      area-aria-current="page"
                      href="#"
                    >
                      {" "}
                      All post(32)
                    </a>
                   
                  </li>
                  <li className="nav-item nav-active-tab  id= nav-item-2">
                    <a className="nav-link" area-itemn="page" href="#">
                      Article
                    </a>
                  </li>
                  <li className="nav-item nav-active-tab  id= nav-item-3">
                    <a className="nav-link" area-itemn="page" href="#">
                      Event
                    </a>
                  </li>
                  <li className="nav-item nav-active-tab  id= nav-item-4">
                    <a className="nav-link" area-itemn="page" href="#">
                      Education
                    </a>
                  </li>
                  <li className="nav-item nav-active-tab  id= nav-item-5">
                    <a className="nav-link" area-itemn="page" href="#">
                      Job
                    </a>
                  </li>
                </ul>
                <div className="d-flex">
                  <button type="button" className=" nav-btn1 btn btn-light">
                    Write a Post
                  </button>
                  <button
                    type="button"
                    className=" nav-btn2  btn btn-primary"
                    data-bs-toggle="modal"
                    data-bs-target="#staticBackdrop"
                  >
                    Join Group
                  </button>
                </div>
              </div>
            </div>
            
          </nav>
        </div>

        <div className="row">
          <div className="left-part col-8">
            <div className="post-card">
              <div className="pc">
                <img
                  className="main-card-img"
                  src="./image/Rect1.png"
                ></img>
              </div>
              <div style={{ padding: "1rem" }} className="pc-content">
                <div className="pc-content-above ">
                  <div className="pc-left-content w-100">
                    <p style={{ padding: "8px 8px" }} id="card-article">
                      ✍️ Article{" "}
                    </p>
                  </div>
                  <div style={{ padding: "10px" }} className="card-heading ">
                    <h4>
                      What if famous brands had regular fonts? Meet
                      RegulaBrands!
                    </h4>
                  </div>
                </div>
                <p style={{ padding: "10px" }} id="card-text">
                  I’ve worked in UX for the better part of a decade. From now
                  on, I plan <br /> to rei
                </p>
                <div className="pc-footer d-flex justify-content-between">
                  <div className="pc-footer-image-name d-flex">
                    <img
                      src="./image/circular1.png"
                      className="rounded-circle"
                      alt="Cinque Terre"
                      width="50px"
                      height="50px"
                    />
                    <h4 style={{ padding: "5px" }}>sarthak </h4>
                  </div>
                  <div
                    style={{padding: "4px", margin:"2.3rem 2.3rem"}}
                    className=" d-flex justify-content-between"
                  >
                    <div
                      style={{ marginRight: "1rem" }}
                      className="pc-footer-right d-flex"
                    >
                      <img
                        src="./image/eye.svg"
                        className=""
                        width="30px"
                        height="25"
                      />
                      <p className="text-view"> 1.4k views </p>
                    </div>
                    <div>
                      <img src="./image/share.png" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div style={{ margin: "2.4rem" }} className="right-part col-3">
            <div className=" right-underline justify-content-between d-flex">
              <div className="location d-flex ">
                <img style={{ height: "1.8rem" }} src="./image/location.png" />
                <p>Noida,india</p>
              </div>
              <div className="right-part-pen">
                <img src="./image/pencil.png" />
              </div>
            </div>
            <div className="right-lower-part d-flex">
              <img className="" />
              <p>
                Your location will help us serve <br /> better <br /> and extend
                a personalised <br /> experience
              </p>
            </div>
          </div>
        </div>
      </div>

      <div
        className="modal fade"
        id="staticBackdrop"
        data-bs-backdrop="static"
        data-bs-keyboard="false"
        tabindex="-1"
        aria-labelledby="staticBackdropLabel"
        aria-hidden="true"
      >
        <div
          style={{ width: "max-content !important" }}
          className="modal-dialog"
        >
          <div className="modal-content">
            <div className="modal-header">
              <h6
                style={{ marginLeft: "4rem" }}
                className="modal-title"
                id="staticBackdropLabel"
              >
                Let's learn, share &amp; inspire each other with our passion for
                computer engineering.{" "}
              </h6>
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <div className="form-row">
                <div className="  d-flex modal_login ">
                  <div className="mobile_close">
                  <button
                    type="button"
                    class="btn-close"
                    data-bs-dismiss="modal"
                    aria-label="Close"
                  ></button>
                  </div>
                  <div className="  create-acc-part">
                    <div className="login_container">
               
                    <div className=" d-flex justify-content-between " id="mobile-create-signin">
                            <h3> Create Account  </h3>
                            <h5> 
                            <button type="button" style={{border: "none", background:"none"}} className=" nav-btn2  " data-bs-toggle="modal" data-bs-target="#staticBackdrops">
        
                                         Sign up</button>
                              </h5>  
                          </div>
                      <h3 id="hide">Create Account </h3>
                      <div className=" name d-flex">
                        <input className="input_name" placeholder="First Name" />
                        <input className="input_name" placeholder="Secand Name" />
                      </div>
                      <div className=" other detail  ">
                        <input className="w-100 input_name" placeholder="Email" />
                        <input className="w-100 input_name" placeholder="Password" />
                        <input
                          className="w-100 input_name"
                          placeholder="Confirm Password"
                        />
                        <div
                          onclick="create_acc()" 
                          id="modal-1-create-acc-btn"
                          class="modal-1-create-acc-btn"
                        >
                          
                          Create Account
                        </div>
                      </div>
                      {/* <h3>Create Account </h3>
                   <div className=" name d-flex">
                       <input className="" placeholder="first Name"/>
                       <input placeholder="Secand Name"/>               
                    </div>
                    <div className=" other detail  ">
                          <input className="w-100" placeholder="Email" /> 
                          <input className="w-100" placeholder="Password" />
                          <input className="w-100" placeholder="Confirm Password" />
                          <div onclick="create_acc()" id="modal-1-create-acc-btn" class="modal-1-create-acc-btn">
                                        Create Account
                           </div> */}
                      <div className="signup-sm d-flex">
                        <img
                          style={{ margin: "7px" }}
                          src="./image/facebook.png"
                          alt=""
                        />
                        <h5 style={{ marginTop: "4px" }}>
                          {" "}
                          Sign up with Facebook{" "}
                        </h5>
                      </div>
                      <div class="signup-sm">
                        <img
                          style={{ margin: "7px" }}
                          src="./image/google.png"
                          alt=""
                        />
                        <h5 style={{ marginTop: "4px" }}>
                          {" "}
                          Sign up with google
                        </h5>
                      </div>
                    </div>
                  </div>

                  <div
                    style={{ marginLeft: "2rem" }}
                    className="right-content-form"
                  >
                    <p style={{ marginLeft: "1.5rem" }}>
                      {" "}
                      Already have an account ?
                      <button style={{marginTop: "-3px ", color: "blue"}} type="button"  className=" nav-btn2  btn " data-bs-toggle="modal" data-bs-target="#staticBackdrops">
                            Sign In
                      </button>
                  
                       
                    
                    </p>
                    <img src="image/illutrate.png" />
                  </div>
                </div>
              </div>
            </div>
            <div style={{ justifyContent: "center" }} className="modal-footer">
              <p>
                {" "}
                By signing up, you agree to our Terms &amp; conditions, Privacy
              </p>
            </div>
          </div>
        </div>
      </div>
    
    </>
  );
}
export default Nav;
