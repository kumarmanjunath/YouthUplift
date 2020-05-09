import React, { Component, Fragment } from "react";
import axios from "axios";
import { Redirect, Link } from "react-router-dom";
class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      password: "",
      address: "",
      role: "null",
      isAuth: false,
      token: "",
    };
    this.handleInputChange = this.handleInputChange.bind(this);
  }

  componentDidMount() {
    this.setState({
      role: this.props.match.params.role,
    });
  }

  handleInputChange = (event) => {
    const { value, name } = event.target;
    this.setState({
      [name]: value,
    });
  };

  onSubmit = async (event) => {
    event.preventDefault();

    const reg = {
      name: this.state.name,
      email: this.state.email,
      password: this.state.password,
      address: this.state.address,
      role: this.state.role,
    };

    const body = JSON.stringify(reg);
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    try {
      const res = await axios.post(
        "http://localhost:5000/api/v1/auth/register",
        body,
        config
      );

      sessionStorage.setItem("token", res.data.token);
      sessionStorage.setItem("isAuth", true);
      this.setState({
        isAuth: true,
      });

      console.log(this.state.token);
    } catch (error) {
      alert("Error Login!!");
    }
  };
  render() {
    //console.log(this.state.token)
    return (
      <Fragment>
        {this.state.isAuth ? (
          this.state.role == "user" ? (
            <Redirect
              token={this.state.token}
              to={{
                pathname: "/user/doctors",
                state: {
                  token: this.state.token,
                },
              }}
            />
          ) : this.state.role == "mentor" ? (
            <Redirect
              token={this.state.token}
              to={{
                pathname: "/mentor/Home",
                state: {
                  token: this.state.token,
                },
              }}
            />
          ) : (
            <Redirect isAuth={this.state.isAuth} to='/' />
          )
        ) : (
          <div>
            <header className='masthead bg-dark '>
              <div id='container-register'>
                <div id='title'>
                  <i class='material-icons lock'>lock</i> Registeration
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

                  <div class='clearfix'></div>

                  <div class='input'>
                    <div class='input-addon'>
                      <i class='material-icons'>face</i>
                    </div>
                    <input
                      id='address'
                      placeholder='Enter Address'
                      name='address'
                      type='text'
                      required
                      class='validate'
                      autocomplete='off'
                      value={this.state.address}
                      onChange={this.handleInputChange}
                      required
                    />
                  </div>

                  <div class='clearfix'></div>

                  {/* <div class='input'>
                    <div class='input-addon'>
                      <i class='fa fa-users' aria-hidden='true'></i>
                    </div>
                    <input
                      id='role'
                      placeholder='Enter User Type'
                      name='role'
                      type='text'
                      required
                      class='validate'
                      autocomplete='off'
                      value={this.state.role}
                      onChange={this.handleInputChange}
                      required
                    />
                  </div> */}

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
        )}
      </Fragment>
    );
  }
}
export default Register;
