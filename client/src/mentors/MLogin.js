import Signup from "../mentors/MSignup.css";
// import Navbar from "../Navbar";
import React, { Component } from "react";
// import { Alert } from "reactstrap";
export default class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
    };
  }

  handleInputChange = (event) => {
    const { value, name } = event.target;
    this.setState({
      [name]: value,
    });
  };

  onSubmit = (event) => {
    event.preventDefault();
    fetch("/api/v1/auth/login", {
      method: "POST",
      body: JSON.stringify(this.state),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => {
        if (res.status === 200) {
          this.props.history.push("/mhome");
        } else {
          const error = new Error(res.error);
          throw error;
        }
      })
      .catch((err) => {
        console.error(err);
        alert("Error logging in please try again");
      });
  };

  render() {
    return (
      <div>
        {/* <Navbar></Navbar> */}
        <header className='masthead bg-dark '>
          <div id='container-login'>
            <div id='title'>
              <i className='material-icons lock'>lock</i> Mentors Login
            </div>

            <form onSubmit={this.onSubmit}>
              <div class='input'>
                <div class='input-addon'>
                  <i class='material-icons'>email</i>
                </div>
                <input
                  id='email'
                  placeholder='Email'
                  name='email'
                  type='email'
                  required
                  class='validate'
                  autocomplete='off'
                  value={this.state.email}
                  onChange={this.handleInputChange}
                  required
                />
              </div>

              <div className='clearfix'></div>

              <div className='input'>
                <div className='input-addon'>
                  <i className='material-icons'>vpn_key</i>
                </div>
                <input
                  id='password'
                  placeholder='Password'
                  name='password'
                  type='password'
                  required
                  className='validate'
                  autocomplete='off'
                  value={this.state.password}
                  onChange={this.handleInputChange}
                  required
                />
              </div>

              <div className='remember-me'>
                <input type='checkbox' />
                <span style={{ color: "#DDD" }}>Remember Me</span>
              </div>

              <input type='submit' value='Submit' />
            </form>

            <div className='forgot-password'>
              <a href='#'>Forgot your password?</a>
            </div>
            <div className='privacy'>
              <a href='#'>Privacy Policy</a>
            </div>

            <div className='register'>
              Don't have an account yet?
              <a href='/mregister'>
                <button id='register-link'>Register here</button>
              </a>
            </div>
          </div>{" "}
          ;
        </header>
      </div>
    );
  }
}
