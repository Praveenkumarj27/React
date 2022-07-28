import React from "react";
import { Link } from "react-router-dom";

function Register() {
  return (
    <div className="container">
      <div className="row">
        <div className="col-lg-12">
        <div className="col-lg-6">
          <label>Username</label>
          <input
            type="text"
            placeholder="username"
            className="form-control"
            name="username"
          />
        </div>
        <div className="col-lg-6">
          <label>Email</label>
          <input
            type="text"
            placeholder="email"
            className="form-control"
            name="username"
          />
        </div>
        <div className="col-lg-6 ">
          <label>Password</label>
          <input
            type="text"
            placeholder="password"
            className="form-control"
            name="username"
          />
        </div>
        <div className="col-lg-6 mt-2">
          <input type="submit" value="submit" className="btn btn-primary" />
        </div>
      </div>
      <p>Already have an account <Link to={"/"}>Login</Link></p>
    </div>
    </div>
  );
}

export default Register;
