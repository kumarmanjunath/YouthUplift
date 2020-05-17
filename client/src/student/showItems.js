import React, { Component, Fragment } from "react";
import QuickModel from "./QuickModel";
import { Link } from "react-router-dom";

export default class showItems extends Component {
  state = {
    men: [],
    profession: "",
  };

  componentDidMount = (async) => {
    this.setState({
      men: this.props.mentor,
      profession: this.props.profession,
    });
  };
  render() {
    const { _id, photo, fname, experience, address } = this.state.men;

    // console.log(this.props);
    return (
      <Fragment>
        <div
          className='col-lg-3 col-md-3 col-sm-3   animated fadeInUp wow animated'
          key={_id}
        >
          <div className='product-top'>
            <img src={`${photo}`} className='img1' alt='' />
            <div className='product-bottom text-center'>
              <h3>{fname}</h3>
              <h4>{this.state.profession}</h4>

              <h4>{address}</h4>

              <button
                type='button'
                className='btn btn-secondary'
                title='Quick Shop'
                data-toggle='modal'
                data-target='#quickModel'
              >
                Book Appointment
              </button>
            </div>
            <div className='overlay'>
              <Link
                type='button'
                className='btn btn-secondary'
                title='Quick Shop'
                to={{
                  pathname: "/user/ShowMentor",
                  state: {
                    men: this.state.men,
                    cat: this.state.profession,
                  },
                }}
              >
                <i className='fa fa-eye'></i>
              </Link>

              {/* <button
                type="button"
                className="btn btn-secondary"
                title="Add to Cart"
                data-toggle=""
                data-target=""
              >
                <i className="fa fa-shopping-cart"></i>
              </button> */}
            </div>
          </div>
          <div className='product-bottom text-center'></div>
        </div>
      </Fragment>
    );
  }
}
