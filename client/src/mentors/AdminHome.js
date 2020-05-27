import React, { Component, Fragment } from "react";
// import logo from "../../assets/logo.png";
import "../CSS/donor.css";

class AdminHome extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cat: "",
      mentor: "",
      profession: "",
    };
    this.onClickHandler = this.onClickHandler.bind(this);
  }

  componentDidMount = () => {
    this.props.getCategory();
    this.props.getMentors();
    // this.setState({
    //   specialization: this.props.category,
    //   doctors: this.props.doctors,
    // });
  };
  onClickHandler = (e) => {
    // this.setState({ category: e.target.value });
    console.log(e.target.name);
  };
  render() {
    return (
      <Fragment>
        {/* {/* End of Navbar */}

        {/* <section id="sectionF1">
          <div className="row container-fluid m-5 ">
            <div className="col-md-3">
              <div className="card p-3">
                <div className="card text-center">
                  <img className="card-img-top" src={logo} alt="" /> 
                  <i className="fa fa-book fa-5x "></i>
                  <div className="card-body">
                    <h4 className="card-title">Products</h4>
                    <p className="card-text">lists</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>  */}
        <section className='counts section-bg mt-5'>
          <div className='container mt-5'>
            <div className='row'>
              <div
                className='col-lg-3 col-md-6 text-center  animated fadeInUp wow animated'
                data-aos='fade-up'
              >
                <div className='count-box counter-up animated swing'>
                  <a className='dropdown-item' href='/mentor/addMentors'>
                    <i
                      className='fa fa-user-secret fa-5x'
                      style={{ color: "#20b38e" }}
                    ></i>
                    <p>
                      <span className='counter-up animated swing'>{}</span>
                    </p>
                    <p>Add Mentor Details</p>
                  </a>
                </div>
              </div>

              <div
                className='col-lg-3 col-md-6 text-center animated fadeInUp wow animated'
                data-aos='fade-up'
                data-aos-delay='200'
              >
                <div className='count-box counter-up animated swing'>
                  <a className='dropdown-item' href='/mentor/showMentors'>
                    <i
                      className='fa fa-eye fa-5x'
                      style={{ color: "#c042ff" }}
                    ></i>
                    <p>
                      <span className='counter-up animated swing'></span>
                    </p>
                    <p>Show Mentor Details</p>
                  </a>
                </div>
              </div>

              <div
                className='col-lg-3 col-md-6 text-center animated fadeInUp wow animated'
                data-aos='fade-up'
                data-aos-delay='400'
              >
                <div className='count-box counter-up animated swing'>
                  <a className='dropdown-item' href='/mentor/publish'>
                    <i
                      className='fa fa-envelope-open fa-5x'
                      style={{ color: "#46d1ff" }}
                    ></i>
                    <p>
                      <span className='counter-up animated swing'>
                        <i></i>
                      </span>
                    </p>
                    <p>Publish Article</p>
                  </a>
                </div>
              </div>

              <div
                className='col-lg-3 col-md-6 text-center animated fadeInUp wow animated'
                data-aos='fade-up'
                data-aos-delay='600'
              >
                <div className='count-box counter-up animated swing'>
                  <a className='dropdown-item' href='/mentor/publish'>
                    <i
                      className='fa fa-eye fa-5x'
                      style={{ color: "#ffb459" }}
                    ></i>
                    <p>
                      {" "}
                      <span className='counter-up animated swing'></span>
                    </p>
                    <p>Show Article</p>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </Fragment>
    );
  }
}

export default AdminHome;
