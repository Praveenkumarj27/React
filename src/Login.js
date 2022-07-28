import axios from 'axios';
import { useFormik } from 'formik';
import React from 'react'
import { Link } from 'react-router-dom';

function Login() {

    let formik=useFormik({
        initialValues:{
          email:"",
          password:""
        },
        onSubmit:async (values)=>{
        }
      });
    
  return (
    <div className="container">
      <div className="row">
        <div className="col-lg-6">
          <form onSubmit={formik.handleSubmit}>
            <div className="col-lg-12">
              <label>Email</label>
              <input
                type="text"
                placeholder="Search"
                className="form-control"
                name="email"
                value={formik.values.email}
                onChange={formik.handleChange}

              />
            </div>
            <div className="col-lg-12">
              <label>Password</label>
              <input
                type="text"
                placeholder="Search"
                className="form-control"
                name="password"
                value={formik.values.password}
                onChange={formik.handleChange}
              />
            </div>
            <div className="col-lg-12 mt-2">
              <input
                type="submit"
                value="submit"
                className="btn btn-primary"
              />
            </div>
          </form>
      </div>
      </div>
      <p>Dont have account? Please <Link to={"/register"}>register</Link> </p>
    </div>
  )
}

export default Login