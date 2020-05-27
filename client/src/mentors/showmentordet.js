import React, { Component } from "react";
import "../CSS/donor.css";
import axios from "axios";
import { Redirect, Link } from "react-router-dom";
import { browserHistory } from "react-router";

export default class Showcenter extends Component {
  constructor(props) {
    super(props);

    this.state = {
      mentors: [this.props],
      isAuth: true,
    };
  }

  componentDidMount = async () => {
    const token = sessionStorage.getItem("token");

    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
    };
    try {
      const res = await axios.get(
        `http://localhost:5000/api/v1/mentors/me`,
        config
      );
      this.setState({
        mentors: res.data.data,
      });
      console.log(res.data.data);
    } catch (err) {
      // console.log("Can't load the items");
    }
  };
  // console.log(this.props.location.state.user);

  onDeleteUser = async (_id, e) => {
    e.preventDefault();
    const userId = this.state.mentors._id;
    console.log(this.state.mentors._id);
    // console.log(user);
    const token = sessionStorage.getItem("token");
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
    };

    try {
      await axios.delete(
        `http://localhost:5000/api/v1/mentors/${userId}`,
        config
      );

      alert("User Deleted");
      // this.context.router.history.push("/mentor/addMentors");
      // browserHistory.push("/mentor/addMentors");
      // this.context.router.history.push("/mentor/addMentors");
      this.props.history.push("/mentor/addMentors");
    } catch (err) {
      console.log("Can't load the items");
    }
  };

  render() {
    // console.log(this.state.mentors.fname);
    return (
      <div>
        <section>
          <div id='portfolio'>
            <div class='container showtop  login-second '>
              <div class='page-title text-center'>
                <h1 class='text-dark'>Mentors</h1>

                <hr class='pg-titl-bdr-btm' />
              </div>
              <div class='row'>
                <div class='col-lg-12 '>{/* categotize */}</div>
              </div>

              <div class='row' id='' style={{ opacity: 1 }}>
                {/*  */}
                <div class='container pt-4'>
                  <div class=' tabletrans '>
                    <div class='well'>
                      <div class='row mb-5'>
                        <div class='col-md-6'>
                          <div class='pull-right'>
                            <a
                              href='/Center/addcenter'
                              class='btn btn-info btn-sm p-2'
                            >
                              Add Mentor
                            </a>
                          </div>
                        </div>

                        <div class='pull-left'>
                          <a href='Center/Home' class='btn btn-info btn-sm p-2'>
                            Back to Home
                          </a>
                        </div>
                      </div>
                      {/* table goes here */}
                      <table class='table table-hover'>
                        <thead>
                          <tr>
                            <th>
                              <label class='text-dark'>MentorName</label>
                            </th>
                            <th>
                              {" "}
                              <label class='text-dark'>Experience</label>
                            </th>
                            <th>
                              {" "}
                              <label class='text-dark'>Email</label>
                            </th>
                            <th>
                              {" "}
                              <label class='text-dark'>Phone</label>
                            </th>
                            <th>
                              {" "}
                              <label class='text-dark'>Address</label>
                            </th>
                            {/* <th>
                          {" "}
                          <label class="text-dark">candidatename</label>
                        </th>  */}

                            <th>
                              {" "}
                              <label className='d-flex justify-content-center text-dark'>
                                Actions
                              </label>
                            </th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td className='tbld'>{this.state.mentors.fname}</td>
                            <td className='tbld'>
                              {this.state.mentors.experience}
                            </td>
                            <td className='tbld'>{this.state.mentors.email}</td>
                            <td className='tbld'>{this.state.mentors.phone}</td>
                            <td className='tbld'>
                              {this.state.mentors.address}
                            </td>

                            <td className='d-flex justify-content-center tbld'>
                              <div className='btn-group '>
                                <a
                                  href=''
                                  className='btn btn-danger btn-md mr-5'
                                  value={this.state.mentors._id}
                                  onClick={(e) =>
                                    this.onDeleteUser(this.state.mentors._id, e)
                                  }
                                >
                                  <i className='fa fa-trash-o'></i>
                                </a>

                                {/* <a href="" className="btn btn-info btn-md">
                                    <i className="fa fa-edit"></i>
                                  </a> */}
                              </div>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}
