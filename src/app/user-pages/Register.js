import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom'
import authApi from '../../api/authApi';

function Register() {
  const [user, setUser] = useState()
  let history = useHistory()

  function handleInputChange(event) {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.id;
    
    setUser({ ...user, [name]: value });
  }

  async function handleSubmit() {
    const response = await authApi.signup(user)
    history.push("/login");
  }

  return (
    <div>
      <div className="d-flex align-items-center auth px-0">
        <div className="row w-100 mx-0">
          <div className="col-lg-4 mx-auto">
            <div className="auth-form-light text-left py-5 px-4 px-sm-5">
              <div className="brand-logo">
                <img src={require("../../assets/images/logo.svg")} alt="logo" />
              </div>
              <h4>New here?</h4>
              <h6 className="font-weight-light">Signing up is easy. It only takes a few steps</h6>
              <form className="pt-3">
                <div className="form-group">
                  <input type="text" className="form-control form-control-lg" id="username" placeholder="Username" onChange={handleInputChange}/>
                </div>
                <div className="form-group">
                  <input type="email" className="form-control form-control-lg" id="email" placeholder="Email" onChange={handleInputChange}/>
                </div>
                <div className="form-group">
                  <input type="text" className="form-control form-control-lg" id="name" placeholder="Name" onChange={handleInputChange}/>
                </div>
                <div className="form-group">
                  <input type="password" className="form-control form-control-lg" id="password" placeholder="Password" onChange={handleInputChange}/>
                </div>
                <div className="form-group">
                  <input type="text" className="form-control form-control-lg" id="businessName" placeholder="Business Name" onChange={handleInputChange}/>
                </div>
                <div className="mb-4">
                  <div className="form-check">
                    <label className="form-check-label text-muted">
                      <input type="checkbox" className="form-check-input" />
                      <i className="input-helper"></i>
                      I agree to all Terms & Conditions
                    </label>
                  </div>
                </div>
                <div className="mt-3">
                  <Link className="btn btn-block btn-primary btn-lg font-weight-medium auth-form-btn" to="/dashboard" onClick={handleSubmit}>SIGN UP</Link>
                </div>
                <div className="text-center mt-4 font-weight-light">
                  Already have an account? <Link to="/user-pages/login" className="text-primary">Login</Link>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Register;
