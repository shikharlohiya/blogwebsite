import React from "react";

function SignIn(){
    return(
 <>

<div className="modal fade" id="staticBackdrops" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
  <div style={{maxWidth: "max-content!important", margin: " 0 auto"}} className="modal-dialog">
    <div className="modal-content">
      <div className="modal-header">
        <h6 style={{marginLeft:"4rem"}} className="modal-title" id="staticBackdropLabel">Let's learn, share &amp; inspire each other with our passion for computer engineering. </h6>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div className="modal-body">
            <div className="form-row" >
           <div className="  d-flex modal_signin">
             <div className="mobile_close">
             <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
               </div>
           <div className="  create-acc-part">
               <h3>Sign In </h3>
                  
                    <div className=" other detail  ">
                          <input className="w-100 input_name" placeholder="Email" /> 
                          <input className="w-100 input_name" placeholder="Password" />
                          
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
                    <p style={{marginLeft:"1.5rem"}} > Don't have an account yet ? 
                    
                    <button style={{marginTop: "-3px ", color: "blue"}} type="button"  className=" nav-btn2  btn " data-bs-toggle="modal" data-bs-target="#staticBackdrop">
                    Create New Account </button>
                     </p>
                      <img src="image/illutrate.png" />
                      
                </div>
        </div>
    </div>

      </div>
      <div  className="modal-footer">
        <p> By signing up, you agree to our Terms &amp; conditions,
         Privacy</p>
      </div>
    </div>
  </div>
</div>

 <button type="button"  className=" nav-btn2 " data-bs-toggle="modal" data-bs-target="#staticBackdrops" data-dismiss="modal"    aria-labe="close"  >
 <span aria-hidden="true">&times;</span>
   join </button>

       
      
   </>  
 
    
    )
};
export default SignIn;