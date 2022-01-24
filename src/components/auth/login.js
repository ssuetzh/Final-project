import React, { useState } from "react"
import axios from "axios"
import { useHistory } from "react-router-dom"

import { Link, NavLink } from "react-router-dom";
const Login = () => {

  const history = useHistory()
  const loggedIn = localStorage.getItem('loggedIn');
  console.log(loggedIn)
  if (loggedIn) {
    history.push('/dashboard')
    
  }


  const [user, setUser] = useState({
    email: "",
    password: ""
  })
  const handleChange = e => {
    const { name, value } = e.target
    setUser({
      ...user,
      [name]: value
    })
  }
  const login = () => {
    const { email, password } = user
    axios.post("http://localhost:3001/login", user).then(res => {
      if (res.data) {
        localStorage.setItem('id', res.data.session.user.userid);
        localStorage.setItem('username', res.data.session.user.username);
        localStorage.setItem('loggedIn', true);
        history.push('/dashboard')
        window.location.reload(true);

      } else {
        alert("No User Found")
      }

    })

  }


  return (
    // <div className="container">
    //   <div className="py-4">
    //   {console.log("User", user)}
    //     <h1>Login Page</h1>
    //     <form>
    //       <label>
    //         <p>Username</p>
    //         <input type="text"  name="email" value={user.email} placeholder="Your Email" onChange={ handleChange } />
    //       </label>
    //       <label>
    //         <p>Password</p>
    //         <input type="password" name="password" value={user.password} placeholder="Your Password" onChange={ handleChange } />
    //       </label>
    //       <div>
    //         <div className="button" onClick={login} >login</div>

    //       </div>
    //     </form>
    //   </div>
    // </div>


    <div className="container-xxl py-5 bg-dark hero-header mb-5">
       <section className="h-100">
        <div className="container h-100">
          <div className="row justify-content-sm-center h-100">
            <div className="col-xxl-4 col-xl-5 col-lg-5 col-md-7 col-sm-9">
              <div className="text-center my-5">
                
              </div>
              <div className="card shadow-lg">
                <div className="card-body p-5">
                  <h1 className="fs-4 card-title fw-bold mb-4">Login</h1>
                  <form method="POST" className="needs-validation" noValidate autoComplete="off">
                    <div className="mb-3">
                      <label className="mb-2 text-muted" htmlFor="email">E-Mail Address</label>
                      <input type="email" className="form-control" name="email" value={user.email} placeholder="Your Email" onChange={ handleChange } />
                      <div className="invalid-feedback">
                        Email is invalid
                      </div>
                    </div>
                    <div className="mb-3">
                      <div className="mb-2 w-100">
                        <label className="text-muted" htmlFor="password">Password</label>
                        <a href="forgot.html" className="float-end">
                          Forgot Password?
                        </a>
                      </div>
                      <input type="password"  className="form-control"  name="password" value={user.password} placeholder="Your Password" onChange={ handleChange } />
                      <div className="invalid-feedback">
                        Password is required
                      </div>
                    </div>
                    <div className="d-flex align-items-center">
                      <div className="form-check">
                        <input type="checkbox" name="remember" id="remember" className="form-check-input" />
                        <label htmlFor="remember" className="form-check-label">Remember Me</label>
                      </div>
                      <div  className="btn btn-primary ms-auto" onClick={login} >login</div>
                    </div>
                  </form>
                </div>
                <div className="card-footer py-3 border-0">
                  <div className="text-center">
                    Don't have an account?<Link className="text-dark" to="/register"> Register</Link>
                  </div>
                </div>
              </div>
              <div className="text-center mt-5 text-muted">
                Copyright © 2017-2021 — Your Company 
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>

  );
};

export default Login;
