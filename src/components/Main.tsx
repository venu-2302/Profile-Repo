import React from 'react'

import '../css/my.css'
export default function Main() {
  return (
    <div className="container mt-4 mb-4 p-3 d-flex justify-content-center"> <div className="card p-4"> 
    <div className=" image d-flex flex-column justify-content-center align-items-center"> 
        <button className="btn btn-secondary"> 
            <img src="https://i.imgur.com/wvxPV9S.png" height="100" width="100" />
            </button> 
            <span className="name mt-3">Venu Gopal </span> 
            <span className="idd">@venugopal</span> 
            <div className="d-flex flex-row justify-content-center align-items-center gap-2"> 
                <span className="idd1">venu-2302</span>
                 <span><i className="fa fa-copy"></i></span>
                  </div> 
                  <div className="d-flex flex-row justify-content-center align-items-center mt-3"> 
                    <span className="number">7411<span className="follow">Followers</span></span>
                     </div>
                     <div className=" d-flex mt-2">
                         <button className="btn1 btn-dark">Edit Profile</button> 
                         </div>
                          <div className="text mt-3">
                             </div> 
                             <div className="gap-3 mt-3 icons d-flex flex-row justify-content-center align-items-center">
                                 <span><i className="fa fa-twitter"></i></span>
                              <span><i className="fa fa-facebook-f"></i></span> <span><i className="fa fa-instagram"></i></span>
                               <span><i className="fa fa-linkedin"></i></span> </div> <div className=" px-2 rounded mt-4 date "> 
                                <span className="join">Joined Feb,2004</span> 
                                </div> 
                                </div> 
                                </div>
</div>
  )
}