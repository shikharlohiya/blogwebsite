import React from "react";

import  "./Post_four.css";
function Post_four() {
  return(
      <>
    

<button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
  Launch static backdrop modal
</button>


<div className="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
  <div style={{maxWidth: "max-content!important", margin: " 0 auto"}} className="modal-dialog">
    <div style={{width: "50rem"}} className="modal-content">
      <div className="modal-header">
        <h6 style={{marginLeft:"4rem"}} className="modal-title" id="staticBackdropLabel">Let's learn, share &amp; inspire each other with our passion for computer engineering. </h6>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div className="modal-body">
            <div className="form-row" >
           <div className="  d-flex  ">
           <div className="  create-acc-part w-50">
               <h3>Create Account </h3>
                   <div className=" name d-flex">
                       <input style={{width: "13rem"}} className="" placeholder="first Name"/>
                       <input placeholder="Secand Name"/>               
                    </div>
                    <div className=" other detail  ">
                          <input className="w-100" placeholder="Email" /> 
                          <input className="w-100" placeholder="Password" />
                          <input className="w-100" placeholder="Confirm Password" />
                          <div onclick="create_acc()" id="modal-1-create-acc-btn" class="modal-1-create-acc-btn">
                                        Create Account
                           </div>
                           <div className="signup-sm d-flex">
                                        <img style={{margin:"7px"}} src="./image/facebook.png" alt=""/>
                                       <h5 style={{marginTop:"4px"}}> Sign up with Facebook </h5>
                                    </div>
                                    <div class="signup-sm">
                                        <img  style={{margin:"7px"}} src="./image/google.png" alt=""/>
                                        <h5 style={{marginTop:"4px"}} > Sign up with google</h5>
                                    </div>
                    </div>
            </div>
           
                <div style={{marginLeft:"2rem"}} className="right-content-form">
                    <p style={{marginLeft:"1.5rem"}} > Already have an account ? sign In </p>
                      <img src="image/illutrate.png" />
                      
                </div>
        </div>
    </div>

      </div>
      <div style={{justifyContent:"center"}} className="modal-footer">
        <p> By signing up, you agree to our Terms &amp; conditions,
                                Privacy</p>
      </div>
    </div>
  </div>
</div>
  </>
  )
}
export default Post_four;