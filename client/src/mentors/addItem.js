// import Signup from "../mentors/MSignup.css";
import Navbar from "../Navbar";
import React, { Component } from "react";
import Signup from "../mentors/MSignup1.css";
// import { Alert } from "reactstrap";
export default class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fname: "",
      profession: "",
      experience: "",
      description: "",
      mentor_type: "",
      phone: "",
      email: "",
      address: "",
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
    fetch("/api/v1/mentors/", {
      method: "POST",
      body: JSON.stringify(this.state),
      headers: {
        "Content-Type": "application/json",
        authorization: "Bearer Token",
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
        <Navbar></Navbar>
        <header className='masthead bg-dark '>
          <div id='container-login1'>
            <div id='title'>
              <i className='material-icons lock'>lock</i> Add Mentors Details
            </div>

            <form onSubmit={this.onSubmit}>
              <div class='input1'>
                <div class='input-addon'></div>
                <input
                  id='fname'
                  placeholder='         Enter full name'
                  name='fname'
                  type='text'
                  required
                  class='validate'
                  autocomplete='off'
                  value={this.state.fname}
                  onChange={this.handleInputChange}
                  required
                />
              </div>

              <div className='clearfix'></div>

              <div class='input1'>
                <div class='input-addon'></div>
                <input
                  id='profession'
                  placeholder='        Enter profession'
                  name='profession'
                  type='text'
                  required
                  class='validate'
                  autocomplete='off'
                  value={this.state.profession}
                  onChange={this.handleInputChange}
                  required
                />
              </div>

              <div className='clearfix'></div>

              <div class='input1'>
                <div class='input-addon'></div>
                <input
                  id=' experience'
                  placeholder='         Enter  experience'
                  name='experience'
                  type='text'
                  required
                  class='validate'
                  autocomplete='off'
                  value={this.state.experience}
                  onChange={this.handleInputChange}
                  required
                />
              </div>

              <div className='clearfix'></div>

              <div class='input1'>
                <div class='input-addon'></div>
                <input
                  id='  description'
                  placeholder='         Enter description'
                  name='description'
                  type='text'
                  required
                  class='validate'
                  autocomplete='off'
                  value={this.state.description}
                  onChange={this.handleInputChange}
                  required
                />
              </div>

              <div className='clearfix'></div>

              <div className='clearfix'></div>

              <div class='input1'>
                <div class='input-addon'></div>
                <input
                  id='mentor_type'
                  placeholder='         Enter mentor_type'
                  name='mentor_type'
                  type='text'
                  required
                  class='validate'
                  autocomplete='off'
                  value={this.state.mentor_type}
                  onChange={this.handleInputChange}
                  required
                />
              </div>

              <div className='clearfix'></div>

              <div class='input1'>
                <div class='input-addon'></div>
                <input
                  id='phone'
                  placeholder='           Enter phone'
                  name='phone'
                  type='text'
                  required
                  class='validate'
                  autocomplete='off'
                  value={this.state.phone}
                  onChange={this.handleInputChange}
                  required
                />
              </div>

              <div class='input1'>
                <div class='input-addon'></div>
                <input
                  id='email'
                  placeholder='         Enter email address'
                  name='email'
                  type='text'
                  required
                  class='validate'
                  autocomplete='off'
                  value={this.state.email}
                  onChange={this.handleInputChange}
                  required
                />
              </div>

              <div className='clearfix'></div>

              <div class='input1'>
                <div class='input-addon'></div>
                <input
                  id='address'
                  placeholder='         Enter address'
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

              <div className='clearfix1'></div>

              <input type='submit' value='ADD' />
            </form>
          </div>{" "}
          ;
        </header>
      </div>
    );
  }
}
