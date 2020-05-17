// import Signup from "../mentors/MSignup.css";
// import Navbar1 from "../Navbar1";
import React, { Component } from "react";
import axios from "axios";
import Signup from "../mentors/MSignup1.css";
// import { Alert } from "reactstrap";
export default class AddItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fname: "",
      categories: [],
      experience: "",
      description: "",
      phone: "",
      email: "",
      address: "",
      category: "",
      file: [],
    };

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleDropdownChange = this.handleDropdownChange.bind(this);
  }

  componentDidMount = async () => {
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    try {
      const res = await axios.get(
        "http://localhost:5000/api/v1/category",
        config
      );
      this.setState({
        categories: res.data.data,
      });
      console.log(this.state.categories);
    } catch (err) {
      console.log("Can't load the items");
    }
  };

  handleInputChange = (e) => {
    const { value, name } = e.target;
    this.setState({
      [name]: value,
    });
  };

  // Dropdown change
  handleDropdownChange = (e) => {
    this.setState({
      category: e.target.value,
    });
    console.log(e.target.value);
  };

  //fileupload
  onChangeHandler = (e) => {
    this.setState({
      file: e.target.files[0],
    });
    console.log(this.state.file);
  };

  onSubmit = async (e) => {
    e.preventDefault();
    const data = new FormData();
    data.append("file", this.state.file, this.state.file.name);

    console.log(data);
    const token = sessionStorage.getItem("token");
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "multipart/form-data",
      },
    };
    try {
      const res = await axios.post(
        `http://localhost:5000/api/v1/mentors/photo`,
        data,
        config
      );
      console.log(res.data.data);

      const products = {
        fname: this.state.fname,
        professions: this.state.category,
        experience: this.state.experience,
        description: this.state.description,

        email: this.state.email,
        phone: this.state.phone,
        address: this.state.address,
        photo: res.data.data,
      };
      const body = JSON.stringify(products);
      console.log(body);
      const config1 = {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      };
      const result = await axios.post(
        `http://localhost:5000/api/v1/mentors`,
        body,
        config1
      );
      console.log(result);
      alert(`Tutor Details Added ${result.data.data.fname}`);
    } catch (err) {
      // console.log("Can't load the items");
    }
  };

  render() {
    return (
      <div className='container itmtop'>
        {/* {console.log(this.state)} */}
        <div className=''>
          {/* <div className="jumbotron col-md-6 col-sm-5 " id="login-first"></div> */}
          <div className='jumbotron' id='login-second'>
            <div className='page-wrapper p-t-50 p-b-50'>
              <div className='wrapper wrapper--w900 '>
                <div className='card cardH card-6 '>
                  <div className='card-heading m-4'>
                    <h2 className='title text-dark'>Add Mentor Details</h2>
                  </div>
                  <div className='card-body'>
                    <form
                      onSubmit={this.onSubmit}
                      encType='multipart/form-data'
                    >
                      <div className='form-row frow'>
                        <div className='name'>Mentor Name:</div>
                        <div className='value'>
                          <input
                            className='input--style-6'
                            type='text'
                            name='fname'
                            value={this.state.fname}
                            onChange={this.handleInputChange}
                          />
                        </div>
                      </div>

                      <div className='form-row frow'>
                        <div className='name'>Select Category:</div>

                        <select
                          id='dropdown '
                          className='btn bg-danger'
                          onChange={this.handleDropdownChange}
                        >
                          <option value='no cat'>none</option>
                          {this.state.categories.map((category) => (
                            <option key={category._id} value={category._id}>
                              {category.catname}
                            </option>
                          ))}
                        </select>
                      </div>
                      <div className='form-row frow'>
                        <div className='name'>Experience:</div>
                        <div className='value'>
                          <div className='input-group'>
                            <input
                              className='input--style-6'
                              type='text'
                              name='experience'
                              placeholder='Enter experience'
                              value={this.state.experience}
                              onChange={this.handleInputChange}
                            />
                          </div>
                        </div>
                      </div>

                      <div className='form-row frow'>
                        <div className='name'>Description:</div>
                        <div className='value'>
                          <div className='input-group'>
                            <input
                              className='input--style-6'
                              type='text'
                              name='description'
                              placeholder='Enter description'
                              value={this.state.description}
                              onChange={this.handleInputChange}
                            />
                          </div>
                        </div>
                      </div>

                      <div className='form-row frow'>
                        <div className='name'>Phone</div>
                        <div className='value'>
                          <div className='input-group'>
                            <input
                              className='input--style-6'
                              type='text'
                              name='phone'
                              placeholder=''
                              value={this.state.phone}
                              onChange={this.handleInputChange}
                            />
                          </div>
                        </div>
                      </div>
                      <div className='form-row frow'>
                        <div className='name'>Email:</div>
                        <div className='value'>
                          <div className='input-group'>
                            <input
                              className='input--style-6'
                              type='email'
                              name='email'
                              placeholder='Enter email'
                              value={this.state.email}
                              onChange={this.handleInputChange}
                            />
                          </div>
                        </div>
                      </div>

                      <div className='form-row frow'>
                        <div className='name'>Address:</div>
                        <div className='value'>
                          <div className='input-group'>
                            <input
                              className='input--style-6'
                              type='text'
                              name='address'
                              placeholder='Enter address'
                              value={this.state.address}
                              onChange={this.handleInputChange}
                            />
                          </div>
                        </div>
                      </div>
                      <div className='form-row frow'>
                        <div className='name'>Upload Images:</div>
                        <div className='value'>
                          <div className='input-group js-input-file'>
                            <input
                              name='file'
                              type='file'
                              placeholder=''
                              id='file'
                              onChange={this.onChangeHandler}
                              className='form-control-file input-md'
                            />
                            <label className='label-file' htmlFor='file'>
                              Choose file
                            </label>
                            {/* <span value={this.state.file}>No file chosen</span> */}
                          </div>
                          <div className='label--desc'>
                            Upoload product Image. Max file size 50 MB
                          </div>
                        </div>
                      </div>
                      <div className='card-footer'>
                        <button
                          class='btn btn-secondary btn-lg btn-block'
                          type='submit'
                        >
                          Add
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

      // <div>
      //   {/* <Navbar1></Navbar1> */}
      //   <header className='masthead bg-dark '>
      //     <div id='container-login1'>
      //       <div id='title'>
      //         <i className='material-icons lock'>lock</i> Add Mentors Details
      //       </div>

      //       <form onSubmit={this.onSubmit} encType='multipart/form-data'>
      //         <div class='input1'>
      //           <div class='input-addon'></div>
      //           <input
      //             id='fname'
      //             placeholder='         Enter full name'
      //             name='fname'
      //             type='text'
      //             required
      //             class='validate'
      //             autocomplete='off'
      //             value={this.state.fname}
      //             onChange={this.handleInputChange}
      //             required
      //           />
      //         </div>
      //         <div className='clearfix'></div>
      //         <div class='input1'>
      //           <div class='input-addon'>
      //             {/* <input
      //             id='profession'
      //             placeholder='        Enter profession'
      //             name='profession'
      //             type='text'
      //             required
      //             class='validate'
      //             autocomplete='off'
      //             value={this.state.profession}
      //             onChange={this.handleInputChange}
      //             required
      //           /> */}
      //             <select
      //               id='dropdown '
      //               className='btn bg-success'
      //               onChange={this.handleDropdownChange}
      //             >
      //               <option value='no cat'>none</option>
      //               {this.state.categories.map((category) => (
      //                 <option key={category._id} value={category._id}>
      //                   {category.catname}
      //                 </option>
      //               ))}
      //               {/* <option value="N/A">N/A</option>
      //                     <option value="1">1</option>
      //                     <option value="2">2</option>
      //                     <option value="3">3</option>
      //                     <option value="4">4</option> */}
      //             </select>
      //           </div>
      //         </div>
      //         <div className='clearfix'></div>
      //         <div class='input1'>
      //           <div class='input-addon'></div>
      //           <input
      //             id=' experience'
      //             placeholder='         Enter  experience'
      //             name='experience'
      //             type='text'
      //             required
      //             class='validate'
      //             autocomplete='off'
      //             value={this.state.experience}
      //             onChange={this.handleInputChange}
      //             required
      //           />
      //         </div>
      //         <div className='clearfix'></div>
      //         <div class='input1'>
      //           <div class='input-addon'></div>
      //           <input
      //             id='  description'
      //             placeholder='         Enter description'
      //             name='description'
      //             type='text'
      //             required
      //             class='validate'
      //             autocomplete='off'
      //             value={this.state.description}
      //             onChange={this.handleInputChange}
      //             required
      //           />
      //         </div>
      //         <div className='clearfix'></div>
      //         <div class='input1'>
      //           <div class='input-addon'></div>
      //           <input
      //             id='phone'
      //             placeholder='           Enter phone'
      //             name='phone'
      //             type='text'
      //             required
      //             class='validate'
      //             autocomplete='off'
      //             value={this.state.phone}
      //             onChange={this.handleInputChange}
      //             required
      //           />
      //         </div>
      //         <div class='input1'>
      //           <div class='input-addon'></div>
      //           <input
      //             id='email'
      //             placeholder='         Enter email address'
      //             name='email'
      //             type='text'
      //             required
      //             class='validate'
      //             autocomplete='off'
      //             value={this.state.email}
      //             onChange={this.handleInputChange}
      //             required
      //           />
      //         </div>
      //         <div className='clearfix'></div>
      //         <div class='input1'>
      //           <div class='input-addon'></div>
      //           <input
      //             id='address'
      //             placeholder='         Enter address'
      //             name='address'
      //             type='text'
      //             required
      //             class='validate'
      //             autocomplete='off'
      //             value={this.state.address}
      //             onChange={this.handleInputChange}
      //             required
      //           />
      //         </div>
      //         <div className='clearfix1'></div>
      //         <div className='form-row frow'>
      //           <div className='name'>Upload Images:</div>
      //           <div className='value'>
      //             <div className='input-group js-input-file'>
      //               <input
      //                 className='input-file'
      //                 type='file'
      //                 name='file'
      //                 id='file'
      //                 onChange={this.onChangeHandler}
      //               />
      //               <label className='label-file' htmlFor='file'>
      //                 Choose file
      //               </label>
      //               <span value={this.state.file}>No file chosen</span>
      //             </div>
      //             <div className='label--desc'>
      //               Upoload product Image. Max file size 50 MB
      //             </div>
      //           </div>
      //         </div>{" "}
      //         <div className='clearfix1'></div>
      //         <button type='submit'>ADD</button>
      //       </form>
      //     </div>{" "}
      //     ;
      //   </header>
      // </div>
    );
  }
}
