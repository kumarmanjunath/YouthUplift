// import Signup from "../mentors/MSignup.css";
import axios from "axios";
// import Navbar from "../Navbar";
import React, { Component, Fragment } from "react";
import { Redirect, Link } from "react-router-dom";
import "./Signup.css";

// import { Alert } from "reactstrap";
class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      type: "",
      isAuth: false,
    };
    this.handleInputChange = this.handleInputChange.bind(this);
  }

  componentDidMount() {
    this.setState({
      type: this.props.match.params.type,
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

    const login = {
      email: this.state.email,
      password: this.state.password,
    };

    const body = JSON.stringify(login);
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    //console.log(body)

    try {
      const res = await axios.post(
        "http://localhost:5000/api/v1/auth/login",
        body,
        config
      );
      console.log(res.data.token);
      sessionStorage.setItem("token", res.data.token);
      sessionStorage.setItem("isAuth", true);
      console.log(sessionStorage);
      this.setState({
        isAuth: true,
      });
    } catch (error) {
      alert("Error Login!!");
    }
  };

  render() {
    // const type = this.state.type;
    // console.log(type);
    // let social = {};
    // let signup, login;

    // signup = <a href={`/mregister/${type}`}>Signup</a>;

    // console.log(type);

    // console.log(isAuthenticated());
    const type = this.state.type;
    let signup;
    signup = <a href={`/register/${type}`}>Signup</a>;
    return (
      <Fragment>
        {this.state.isAuth ? (
          type == "user" ? (
            <Redirect isAuth={this.state.isAuth} to='/user/Home' />
          ) : type == "mentor" ? (
            <Redirect isAuth={this.state.isAuth} to='/mentor/Home' />
          ) : type == "admin" ? (
            <Redirect isAuth={this.state.isAuth} to='/main/Home' />
          ) : (
            <Redirect isAuth={this.state.isAuth} to='/' />
          )
        ) : (
          <div>
            {/* <Navbar></Navbar> */}
            <header className='masthead bg-dark '>
              <div id='container-login'>
                <div id='title'>
                  <i className='material-icons lock'>lock</i> Login
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

                  <input type='submit' value='Login' />
                </form>

                <div className='forgot-password'>
                  <a href='/resett'>Forgot your password?</a>
                </div>
                <div className='privacy'>
                  <a href='#'>Privacy Policy</a>
                </div>

                <div className='register'>
                  Don't have an account yet?
                  {signup}
                </div>
              </div>{" "}
              ;
            </header>
          </div>
        )}
      </Fragment>
    );
  }
}
export default Login;
