import React, { useState } from "react"
import axios from "axios"
import { useHistory } from "react-router-dom"

const Register = () => {
    const history = useHistory()
    const loggedIn = localStorage.getItem('loggedIn');
    console.log(loggedIn)
    if (loggedIn) {
        history.push('/')
    }
    const [user, setUser] = useState({
        name: "",
        email: "",
        password: "",
        reEnterPassword: ""
    })

    const handleChange = e => {
        const { name, value } = e.target
        setUser({
            ...user,
            [name]: value
        })
    }

    const register = () => {
        const { name, email, password, reEnterPassword } = user
        if (name && email && password && (password === reEnterPassword)) {
            axios.post("http://localhost:3001/register", user)
                .then(res => {
                    if (res.data) {
                        history.push("/login")
                    }

                })
        } else {
            alert("invlid input")
        }

    }

    return (
        // <div className="register">
        //     {console.log("User", user)}
        //     <h1>Register</h1>
        //     
        //     
        //     
        //    
        //     <div className="button" onClick={register} >Register</div>
        //     <div>or</div>
        //     <div className="button" onClick={() => history.push("/login")}>Login</div>
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
                                    <h1 className="fs-4 card-title fw-bold mb-4">Registration</h1>
                                    <form method="POST" className="needs-validation" noValidate autoComplete="off">
                                        <div className="mb-3">
                                            <label className="mb-2 text-muted" htmlFor="email">Name</label>
                                            <input type="text" className="form-control" name="name" value={user.name} placeholder="Your Name" onChange={handleChange}></input>
                                            <div className="invalid-feedback">
                                                Name is invalid
                                            </div>
                                        </div>
                                        <div className="mb-3">
                                            <label className="mb-2 text-muted" htmlFor="email">E-Mail Address</label>
                                            <input type="email" className="form-control" name="email" value={user.email} placeholder="Email Address" onChange={handleChange}></input>
                                            <div className="invalid-feedback">
                                                Email is invalid
                                            </div>
                                        </div>
                                        <div className="mb-3">
                                            <label className="mb-2 text-muted" htmlFor="email">Password</label>
                                            <input type="password" className="form-control" name="password" value={user.password} placeholder="Password" onChange={handleChange}></input>
                                            <div className="invalid-feedback">
                                                Password is required
                                            </div>
                                        </div>
                                        <div className="mb-3">

                                            <label className="mb-2 text-muted" htmlFor="email">Confirm Password</label>
                                            <input type="password" className="form-control" name="reEnterPassword" value={user.reEnterPassword} placeholder="Re-enter Password" onChange={ handleChange }></input>
                                            <div className="invalid-feedback">
                                                Password is required
                                            </div>
                                        </div>
                                        <div className="d-flex align-items-center">
                                            <div className="btn btn-primary ms-auto" onClick={register}>Register</div>
                                        </div>
                                    </form>
                                </div>
                                <div className="card-footer py-3 border-0">

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

    )
}

export default Register