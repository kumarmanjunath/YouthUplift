import React, { Component } from "react";
// import "../CSS/donor.css";
// import "../CSS/farm.css";

import axios from "axios";

export default class addDonors extends Component {
  constructor(props) {
    super(props);

    this.state = {
      mentor: {},
      profession: {},
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
        `http://localhost:5000/api/v1/mentors/me`,

        config
      );
      this.setState({
        mentor: result.data.data,
        profession: result.data.data.professions,
      });
      console.log(result.data.data);
    } catch (err) {
      // console.log("Can't load the items");
    }
  };
  onDeleteUser = async (_id, e) => {
    e.preventDefault();
    // console.log(user);
    const token = sessionStorage.getItem("token");
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
    };

    try {
      await axios.delete(`http://localhost:5000/api/v1/mentors/${_id}`, config);

      alert("User Deleted");
    } catch (err) {
      console.log("Can't load the items");
    }
  };

  render() {
    const {
      description,
      fname,
      // specialization,
      // catname,
      phone,
      experience,
      email,
      address,
      photo,
    } = this.state.mentor;
    console.log(this.state.profession.catname);

    return (
      <div className='container itmtop'>
        <div className=''>
          {/* <div className="jumbotron col-md-6 col-sm-5 " id="login-first"></div> */}
          <div className='' id='login-second'>
            <div className='page-wrapper p-t-50 p-b-50'>
              <div className='wrapper wrapper--w900 '>
                <div className='card cardH card-6 bg-dark'>
                  <div className='card-heading m-4 '>
                    <h2 className='text-success'>Mentors Details</h2>
                  </div>
                  <div className='card-body'>
                    <form
                      // onSubmit={this.onSubmit}
                      encType='multipart/form-data'
                    >
                      <img src={`${photo}`} className='img1' alt='' />
                      <div className='form-row frow'>
                        <div className='name'>Mentor Name:</div>
                        <div className='value'>
                          <input
                            className='input--style-6'
                            type='text'
                            name='fname'
                            value={fname}
                            // onChange={this.onChange}
                          />
                        </div>
                      </div>
                      <div className='form-row frow'>
                        <div className='name'>profession:</div>
                        <div className='value'>
                          <input
                            className='input--style-6'
                            type='text'
                            name='name'
                            value={this.state.profession.catname}
                            // onChange={this.onChange}
                          />
                        </div>
                      </div>

                      <div className='form-row frow'>
                        <div className='name'>Experience</div>
                        <div className='value'>
                          <div className='input-group'>
                            <input
                              className='input--style-6'
                              type='text'
                              name='experience'
                              placeholder=''
                              value={experience}
                              // onChange={this.onChange}
                            />
                          </div>
                        </div>
                      </div>
                      <div className='form-row frow'>
                        <div className='name'>address</div>
                        <div className='value'>
                          <div className='input-group'>
                            <input
                              className='input--style-6'
                              type='text'
                              name='duration'
                              placeholder=''
                              value={address}
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
                      <div className='form-row frow'>
                        <div className='name'>description</div>
                        <div className='value'>
                          <div className='input-group'>
                            <input
                              className='input--style-6'
                              type='text'
                              name='fees'
                              placeholder=''
                              value={description}
                              // onChange={this.onChange}
                            />
                          </div>
                        </div>
                      </div>
                      <div className='card-footer'>
                        <button
                          class='btn btn-secondary btn-lg btn-block'
                          type='submit'
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
