import React, { useContext, createContext, useState, Component } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
  useHistory,
  useLocation
} from "react-router-dom";
import { Form } from 'react-bootstrap';
import { useAuth } from "../auth/auth";
import authApi from "../../api/authApi";

export const LoginPage = function () {
  const [username, setUsername] = useState()
  const [password, setPassword] = useState()
  const [loginFormStatus, setLoginFormStatus] = useState()

  let history = useHistory();
  let location = useLocation();
  let auth = useAuth();

  let { from } = location.state || { from: { pathname: "/" } };
  let login = async () => {
    const response = await authApi.login(username, password)
    const user = response.data

    if (user?.username) {   
      localStorage.setItem('user', JSON.stringify(user))
      setTimeout(100)
      auth.signin(() => {
        history.replace(from);
      });
    } else {
      setLoginFormStatus('Wrong username or password')
    }
  };

  return (
    <div>
        <div className="d-flex align-items-center auth px-0">
          <div className="row w-100 mx-0">
            <div className="col-lg-4 mx-auto">
              <div className="auth-form-light text-left py-5 px-4 px-sm-5">
                <div className="brand-logo">
                  <img src={require("../../assets/images/logo.svg")} alt="logo" />
                </div>
                <h4>Hello! let's get started</h4>
                <h6 className="font-weight-light">Sign in to continue.</h6>
                <Form className="pt-3">
                  <Form.Group className="d-flex search-field">
                    <Form.Control type="email" placeholder="Username" size="lg" className="h-auto" onChange={ e => setUsername(e.target.value) } />
                  </Form.Group>
                  <Form.Group className="d-flex search-field">
                    <Form.Control type="password" placeholder="Password" size="lg" className="h-auto" onChange={ e => setPassword(e.target.value) } />
                  </Form.Group>
                  <div className="mt-3">
                    <Link className="btn btn-block btn-primary btn-lg font-weight-medium auth-form-btn" onClick={login}>SIGN IN</Link>
                  </div>
                  <div className="my-2 mt-4 text-center" style={{ color: 'red' }}>
                    {loginFormStatus}
                  </div>
                  <div className="text-center mt-4 font-weight-light">
                    Don't have an account? <Link to="/signup" className="text-primary">Create</Link>
                  </div>
                </Form>
              </div>
            </div>
          </div>
        </div>  
      </div>
  );
}
