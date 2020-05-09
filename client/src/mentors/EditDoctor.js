import React, { Component } from "react";
import "../CSS/donor.css";

import axios from "axios";

export default class addDonors extends Component {
  constructor(props) {
    super(props);

    this.state = {
      mentor: {},
      categories: [],

      fname: "",
      phone: "",
      email: "",
      description: "",
      experience: "",
      address: "",
      // category: [],
      category: "",
      file: null,
    };
    this.onChange = this.onChange.bind(this);
    this.handleDropdownChange = this.handleDropdownChange.bind(this);
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
      });
      console.log(result.data.data);
      const res = await axios.get(
        "http://localhost:5000/api/v1/category/",
        config
      );
      this.setState({
        categories: res.data.data,
      });
      console.log(res.data.data);
    } catch (err) {
      // console.log("Can't load the items");
    }
  };

  // Input on change
  onChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };
  // Dropdown change
  handleDropdownChange = (e) => {
    this.setState({ category: e.target.value });
    console.log(e.target.value);
  };
  // fileupload
  onChangeHandler = (e) => {
    this.setState({
      file: e.target.files[0],
    });
  };
  onSubmit = async (e) => {
    e.preventDefault();

    // const data = new FormData();
    // data.append("file", this.state.file, this.state.file.name);

    // console.log(data);
    // const token = sessionStorage.getItem("token");
    // const config = {
    //   headers: {
    //     Authorization: `Bearer ${token}`,
    //     "Content-Type": "multipart/form-data",
    //   },
    // };
    // try {
    // const res = await axios.post(
    //   `http://localhost:5000/api/v1/doctor/photo`,
    //   data,
    //   config
    // );
    // console.log(res.data.data);

    // const products = {
    //   name: this.state.name,
    //   phone: this.state.contact,
    //   specialization: this.state.category,
    //   email: this.state.email,
    //   duration: this.state.duration,
    //   experience: this.state.experience,
    //   fees: this.state.fees,
    //   image: res.data.data,
    // };
    // const body = JSON.stringify(products);
    // console.log(body);
    // const config1 = {
    //   headers: {
    //     Authorization: `Bearer ${token}`,
    //     "Content-Type": "application/json",
    //   },
    // };
    // const result = await axios.put(
    //   `http://localhost:5000/api/v1/doctor/${this.state.doctor.id}`,
    //   body,
    //   config1
    // );
    // console.log(result);
    alert(`Doctor Detail Updated!!..`);
    // } catch (err) {
    //   // console.log("Can't load the items");
    // }
  };

  render() {
    const {
      description,
      fname,
      profession,
      address,
      experience,
      email,
      phone,
      photo,
    } = this.state.mentor;
    return (
      <div className='container itmtop'>
        <div className=''>
          {/* <div className="jumbotron col-md-6 col-sm-5 " id="login-first"></div> */}
          <div className='' id='login-second'>
            <div className='page-wrapper p-t-50 p-b-50'>
              <div className='wrapper wrapper--w900 '>
                <div className='card cardH card-6 bg-dark'>
                  <div className='card-heading m-4 '>
                    <h2 className='title address3 text-dark'>Mentors</h2>
                  </div>
                  <div className='card-body'>
                    <form
                      onSubmit={this.onSubmit}
                      // encType="multipart/form-data"
                    >
                      <div className='form-row frow'>
                        <img src={`${photo}`} className='img1 mb-5' alt='' />
                        {/* <div className="name">Upload Image:</div> */}
                        <div className='value'>
                          <div className='input-group js-input-file'>
                            <input
                              className='input-file'
                              type='file'
                              name='file'
                              id='file'
                              onChange={this.onChangeHandler}
                            />

                            <label className='label--file' htmlFor='file'>
                              Choose file
                            </label>
                            <span className='input-file__info'>
                              Change Image
                            </span>
                          </div>
                          <div className='label--desc'>
                            Upload your Document/Id proff or any other relevant
                            file. Max file size 50 MB
                          </div>
                        </div>
                      </div>
                      <div className='form-row frow'>
                        <div className='name'>Mentor Name:</div>
                        <div className='value'>
                          <input
                            className='input--style-6'
                            type='text'
                            name='name'
                            // placeholder={name}
                            value={fname}
                            onChange={this.onChange}
                          />
                        </div>
                      </div>
                      <div className='form-row frow'>
                        <div className='name'>Profession</div>
                        <div className='value'>
                          <select
                            id='dropdown form-control'
                            className='btn bg-light'
                            onChange={this.handleDropdownChange}
                          >
                            <option value='nocat'>Profession</option>
                            {this.state.categories.map((category) => (
                              <option key={category._id} value={category._id}>
                                {category.catname}
                              </option>
                            ))}
                          </select>
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
                              // placeholder={experience}
                              value={experience}
                              onChange={this.onChange}
                            />
                          </div>
                        </div>
                      </div>
                      <div className='form-row frow'>
                        <div className='name'>Description</div>
                        <div className='value'>
                          <div className='input-group'>
                            <input
                              className='input--style-6'
                              type='text'
                              name='duration'
                              // placeholder={duration}
                              value={description}
                              onChange={this.onChange}
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
                              // placeholder={email}
                              value={email}
                              onChange={this.onChange}
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
                              // placeholder={phone}
                              value={phone}
                              onChange={this.onChange}
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
                              name='fees'
                              // placeholder={fees}
                              value={address}
                              onChange={this.onChange}
                            />
                          </div>
                        </div>
                      </div>
                      <div className='card-footer'>
                        <a
                          className='btn btn--radius-2 btn-dark'
                          type='submit'
                          href=''
                        >
                          Update
                        </a>
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
