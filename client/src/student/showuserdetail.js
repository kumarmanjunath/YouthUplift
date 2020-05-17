import React, { Component } from "react";
// import "../CSS/donor.css";
// import "../CSS/farm.css";

import axios from "axios";

export default class addDonors extends Component {
  constructor(props) {
    super(props);

    this.state = {
      student: {},
    };
  }
  componentDidMount = async () => {
    const token = sessionStorage.getItem("token");
    try {
      const config = {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      };
      const result = await axios.get(
        `http://localhost:5000/api/v1/public/me`,

        config
      );
      this.setState({
        student: result.data.data,
      });
      console.log(result.data.data);
    } catch (err) {
      // console.log("Can't load the items");
    }
  };

  render() {
    const { name, address, phone, dob, email, photo } = this.state.student;

    return (
      <div className='container itmtop'>
        <div className=''>
          {/* <div className="jumbotron col-md-6 col-sm-5 " id="login-first"></div> */}
          <div className='' id='login-second'>
            <div className='page-wrapper p-t-50 p-b-50'>
              <div className='wrapper wrapper--w900 '>
                <div className='card cardH card-6 bg-dark'>
                  <div className='card-heading m-4 '>
                    <h2 className='text-success'>Student Details</h2>
                  </div>
                  <div className='card-body'>
                    <form
                      // onSubmit={this.onSubmit}
                      encType='multipart/form-data'
                    >
                      <img src={`${photo}`} className='img1' alt='' />
                      <div className='form-row frow'>
                        <div className='name'>Student Name:</div>
                        <div className='value'>
                          <input
                            className='input--style-6'
                            type='text'
                            name='name'
                            value={name}
                            // onChange={this.onChange}
                          />
                        </div>
                      </div>

                      <div className='form-row frow'>
                        <div className='name'>Address</div>
                        <div className='value'>
                          <div className='input-group'>
                            <input
                              className='input--style-6'
                              type='text'
                              name='address'
                              placeholder='address'
                              value={address}
                              // onChange={this.onChange}
                            />
                          </div>
                        </div>
                      </div>
                      <div className='form-row frow'>
                        <div className='name'>Date of Birth</div>
                        <div className='value'>
                          <div className='input-group'>
                            <input
                              className='input--style-6'
                              type='text'
                              name='dob'
                              placeholder='enter DOB'
                              value={dob}
                              // onChange={this.onChange}
                            />
                          </div>
                        </div>
                      </div>

                      <div className='form-row frow'>
                        <div className='name'>Email</div>
                        <div className='value'>
                          <div className='input-group'>
                            <input
                              className='input--style-6'
                              type='email'
                              name='email'
                              placeholder=''
                              value={email}
                              // onChange={this.onChange}
                            />
                          </div>
                        </div>
                      </div>
                      <div className='form-row frow'>
                        <div className='name'>Contact</div>
                        <div className='value'>
                          <div className='input-group'>
                            <input
                              className='input--style-6'
                              type='text'
                              name='contact'
                              placeholder=''
                              value={phone}
                              // onChange={this.onChange}
                            />
                          </div>
                        </div>
                      </div>

                      <div className='card-footer'>
                        <button
                          class='btn btn-secondary btn-lg btn-block'
                          type='submit'
                          href='/mentor/edit'
                        >
                          {" "}
                          Edit
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
