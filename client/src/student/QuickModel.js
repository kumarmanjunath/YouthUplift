import React, { Component } from "react";

export default class QuickModel extends Component {
  state = {
    mentors: {},
    profession: "",
  };

  componentDidMount = (async) => {
    this.setState({ mentors: this.props.location.state.men });
    this.setState({ profession: this.props.location.state.cat });
  };
  render() {
    console.log(this.state.profession);
    const {
      fname,
      email,
      description,
      phone,
      experience,
      address,
      photo,
    } = this.state.mentors;
    // console.log);
    return (
      <div>
        <section className='section-bg'>
          <div id='portfolio  '>
            <div className='container mt-4  '>
              <div className='page-title text-center'>
                <h1 className='text-dark'>Mentors</h1>

                <hr className='pg-titl-bdr-btm' />
              </div>

              <div className='' id='' style={{ opacity: 1 }}>
                {/*  */}
                <div className='container '>
                  <div className=' tabletrans '>
                    <div className='well'>
                      {/* <div className="row mb-5"></div> */}
                      <div className='card'>
                        <div className='container-fliud  '>
                          <div className='wrapper row mb-4'>
                            <div className='preview col-md-6 mt-4'>
                              <div className='preview-pic tab-content '>
                                <img
                                  src={photo}
                                  alt='img1'
                                  width='100%'
                                  height='100%'
                                />
                              </div>
                            </div>
                            <div className='details col-md-6'>
                              {/* <h3 className="product-title mb-5">
                                Doctor Deatail
                              </h3> */}
                              <h3 className='product-title mb-5'>{fname}</h3>
                              <i>
                                <h4>{this.state.profession}</h4>

                                <h4>{email}</h4>
                                <h4>Description: {description}</h4>
                                <h4>Experience: {experience}-Years</h4>
                                <h4>Contact: {phone}</h4>

                                <h4>Address: {address}</h4>
                              </i>
                              <div className='action '>
                                <button
                                  className='add-to-cart btn btn-warning'
                                  type='button'
                                >
                                  Book Appintment
                                </button>
                                {/* <button
                                  className="like btn btn-default"
                                  type="button"
                                >
                                  <span className="fa fa-heart"></span>
                                </button> */}
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
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
