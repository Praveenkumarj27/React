import "./App.css";
import { useFormik } from "formik";
import axios from "axios";
import { useEffect, useState } from "react";

function App() {
  const[users,setUser]=useState([])
  const [isEdit,setIsEdit]=useState(false)
  const[editUser,setEditUser]=useState({})
  let fetchData=async ()=>{
    try {
     let res= await axios.get("https://express-nodejs-dem0.herokuapp.com/students") 
     setUser(res.data);
    
    } catch (error) {
      console.log(error);
    }
  }
  
  useEffect(()=>{
    fetchData(); 
  },[]);

  let formik=useFormik({
    initialValues:{
      email:"",
      password:""
    },
    onSubmit:async (values)=>{
   try {
    if(!isEdit){
      await axios.post('https://express-nodejs-dem0.herokuapp.com/student',values)
       fetchData();
    }else{
      delete values._id
      await axios.put(`https://express-nodejs-dem0.herokuapp.com/student/${editUser._id}`,values)
      setIsEdit(false)
      fetchData();
    }
   } catch (error) {
    
   }
    }
  });

  let handleEdit=async (id)=>{
    try {
      let student=await axios.get(`https://express-nodejs-dem0.herokuapp.com/student/${id}`)
      formik.setValues(student.data)
      setEditUser(student.data)
      setIsEdit(true)
    } catch (error) {
      console.log(error);
    }
  }
  let handleDelete=async (id)=>{
    let student=await axios.delete(`https://express-nodejs-dem0.herokuapp.com/student/${id}`)
    formik.setValues(student.data)
  }
 
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
        <div className="col-lg-6">
          <table class="table">
            <thead class="thead-dark">
              <tr>
                <th scope="col">#</th>
                <th scope="col">Email</th>
                <th scope="col">Password</th>
                <th scope="col">Action</th>
              </tr>
            </thead>
            <tbody>
              {
                users.map((user,index)=>{
                  return (
                    <tr>
                      <th scope="row">{user._id}</th>
                      <td>{user.email}</td>
                      <td>{user.password}</td>
                     <td>
                     <button className="btn btn-primary"
                      onClick={()=>handleEdit(user._id)}
                     >Edit</button>
                     <button className="btn btn-danger"
                      onClick={()=>handleDelete(user._id)}
                     >Delete</button>
                     </td>
                    </tr>
                  )
                })
              }
            
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default App;