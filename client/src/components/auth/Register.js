import React, { Component } from "react";
import css from "../../Signup.css";
export default class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
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
    fetch("/api/v1/auth/register", {
      method: "POST",
      body: JSON.stringify(this.state),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => {
        if (res.status === 200) {
          this.props.history.push("/nextpage");
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
        <header className='masthead bg-dark '>
          <div id='container-register'>
            <div id='title'>
              <i class='material-icons lock'>lock</i>Student Registeration
            </div>

            <form onSubmit={this.onSubmit}>
              <div class='input'>
                <div class='input-addon'>
                  <i class='material-icons'>face</i>
                </div>
                <input
                  id='username'
                  placeholder='Username'
                  name='name'
                  type='text'
                  required
                  class='validate'
                  autocomplete='off'
                  value={this.state.name}
                  onChange={this.handleInputChange}
                  required
                />
              </div>

              <div class='clearfix'></div>

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

              <div class='clearfix'></div>

              <div class='input'>
                <div class='input-addon'>
                  <i class='material-icons'>vpn_key</i>
                </div>
                <input
                  id='password'
                  placeholder='Password'
                  name='password'
                  type='password'
                  required
                  class='validate'
                  autocomplete='off'
                  value={this.state.password}
                  onChange={this.handleInputChange}
                  required
                />
              </div>

              <div class='remember-me'>
                <input type='checkbox' />
                <span style={{ color: "#DDD" }}>
                  {" "}
                  I accept Terms of Service
                </span>
              </div>

              <input type='submit' value='Register' />
            </form>

            <div class='privacy'>
              <a href='#'>Privacy Policy</a>
            </div>

            <div class='register'>
              Do you already have an account?
              <a href='/login'>
                <button id='register-link'>Log In here</button>
              </a>
            </div>
          </div>
        </header>
      </div>
    );
  }
}
