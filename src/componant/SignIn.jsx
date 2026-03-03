import React from "react";

function SignIn({ close }) {
  return (
    <div
      className="bg-white rounded-4 shadow p-4 w-100"
      style={{ maxWidth: "400px" }}
      onClick={(e) => e.stopPropagation()}
    >
      <h4 className="fw-bold text-center mb-4">Sign In</h4>

      <input
        type="email"
        placeholder="Email"
        className="form-control mb-3"
        autoFocus
      />

      <input
        type="password"
        placeholder="Password"
        className="form-control mb-3"
      />

      <input
        type="password"
        placeholder="Confirm Password"
        className="form-control mb-4"
      />

      <button className="btn btn-danger w-100 mb-3">
        Login
      </button>

      <p className="text-center small text-muted">
        By continuing, you agree to BookMyShow terms
      </p>
    </div>
  );
}

export default SignIn;