import React from "react";
import "./App.css";

function SignIn() {
  return (
        <>
        <div
            className="signin-container d-grid z-50 bg-light rounded-3 border-1 p-3  text-center m-auto "
            onClick={(e) => e.stopPropagation()} >
            <h2>Sign In</h2>
            <input type="email" placeholder="Email"  className=" m-2 p-1 rounded-2 border-1 border-secondary" autoFocus/>
            <input type="password" placeholder="Password" className=" m-2 p-1 rounded-2 border-1 border-secondary" />
           <input type="password" placeholder="Comfaim-Password" className=" m-2  p-1 rounded-2 border-1 border-secondary" />
            <button className="submit-btn mt-5 m-auto bg-danger text-light rounded-2 border">Login</button>

        </div>
        </>
  );
}

export default SignIn;
