import React from "react";
import c51 from "../components/img/Detailedpage/c51.jpg";
import c52 from "../components/img/Detailedpage/cc51.jpg";
import c94 from "../components/img/Detailedpage/cc94.jpg";
import c132 from "../components/img/mentors/img2.jpg";
import c172 from "../components/img/mentors/img1.jpg";
import c11 from "../components/img/Detailedpage/11.jpg";
import c12 from "../components/img/Detailedpage/12.jpg";
import c13 from "../components/img/Detailedpage/13.jpg";
import c14 from "../components/img/Detailedpage/14.jpg";
import c61 from "../components/img/mentors/img4.jpg";
import MDetailedpagecss from "../mentors/MDetailedpage.css";

function Detailedpage() {
  return (
    <div>
      <div
        className='container  mt-5'
        style={{
          top: "30px",
          position: "relative",
          margin: "auto",
          width: "25px",
          height: "50px"
        }}
      >
        {/* <div className='row'>
          <div className='col-md-12'>
            <strong> HOME &gt; MENTORS &gt; CARRIER GUIDE</strong>
          </div>
        </div> */}
      </div>
      <div className='container'>
        <div className='row'>
          <div className='col-md-6'>
            <div
              id='carouselExampleControls'
              className='carousel slide'
              data-ride='carousel'
            >
              <div className='carousel-inner'>
                <div className='carousel-item active'>
                  {" "}
                  <img
                    className='d-block w-100'
                    src={c94}
                    style={{ maxWidth: "750.64px", maxHeight: "545px" }}
                    alt='First slide'
                  />{" "}
                </div>
                <div className='carousel-item'>
                  {" "}
                  <img
                    className='d-block w-100'
                    src={c52}
                    style={{ maxWidth: "750.64px", maxHeight: "545px" }}
                    alt='Second slide'
                  />{" "}
                </div>
              </div>
              <a
                className='carousel-control-prev'
                href='#carouselExampleControls'
                role='button'
                data-slide='prev'
              >
                {" "}
                <span
                  className='carousel-control-prev-icon'
                  aria-hidden='true'
                />{" "}
                <span className='sr-only'>Previous</span>{" "}
              </a>{" "}
              <a
                className='carousel-control-next'
                href='#carouselExampleControls'
                role='button'
                data-slide='next'
              >
                {" "}
                <span
                  className='carousel-control-next-icon'
                  aria-hidden='true'
                />{" "}
                <span className='sr-only'>Next</span>{" "}
              </a>{" "}
            </div>
          </div>
          <div className='col-md-6'>
            <div className='row'>
              <h2>Mr.Maxx Muller</h2>
            </div>
            <div className='row'>
              <h3>
                <p style={{ fontSize: "15px" }}>
                  Retired Lieutenant Colonel in Army{" "}
                </p>
              </h3>
              <br />
            </div>
            <div className='row'>
              <h3 className='text-warning'>
                <i className='fa fa-star' aria-hidden='true' />
                <i className='fa fa-star' aria-hidden='true' />
                <i className='fa fa-star' aria-hidden='true' />{" "}
                <i className='fa fa-star-half-o' aria-hidden='true' />
                <i className='fa fa-star-o' aria-hidden='true' />
              </h3>
              &nbsp; &nbsp;
              <h5>1200 star rating and 250 reviews</h5>
            </div>
            <div className='row'>
              <b>Expierence:</b>
            </div>
            <div className='row'>
              <p style={{ fontSize: "15px" }}>
                I am a transitioning active duty Soldier with eleven years in
                the Army. I want to extend my service by teaching Indians more
                about the military that serves them. I have only created one
                course so far but I hope to produce more in the future detailing
                more about the Army.
              </p>
            </div>

            <div className='row'>
              <b>Education:</b>
            </div>
            <div className='row'>
              <p style={{ fontSize: "15px" }}>
                I am a transitioning active duty Soldier with eleven years in
                the Army. I want to extend my service by teaching Indians more
                about the military that serves them. I have only created one
                course so far but I hope to produce more in the future detailing
                more about the Army.
              </p>
            </div>
            <div className='row'>
              <b>Achievements:</b>
            </div>
            <div className='row'>
              <p style={{ fontSize: "15px" }}>
                I am a transitioning active duty Soldier with eleven years in
                the Army. I want to extend my service by teaching Indians more
                about the military that serves them. I have only created one
                course so far but I hope to produce more in the future detailing
                more about the Army.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className='container'>
        <div className='row mt-5'>
          <h2>Similar Mentors</h2>
        </div>
        <div className='row mt-5'>
          <div className='col-md-3'>
            <div className='card'>
              <img className='card-img-top img-fluid' src={c94} />
              <div className='card-title'>
                <h4>GYM Tops</h4>
              </div>
              <div className='card-text'>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Repudiandae fugiat et voluptate sunt officia vero molestias.
                <br />
                <br />
                <a className='btn btn-dark text-light'>
                  {" "}
                  Connect Now
                </a> &nbsp; <br />
                <br />
              </div>
            </div>
          </div>
          <div className='col-md-3'>
            <div className='card'>
              <img className='card-img-top img-fluid' src={c94} />
              <div className='card-title'>
                <h4>GYM Tops</h4>
              </div>
              <div className='card-text'>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Repudiandae fugiat et voluptate sunt officia vero molestias.
                <br />
                <br />
                <a className='btn btn-dark text-light'>
                  {" "}
                  Connect Now
                </a> &nbsp; <br />
                <br />
              </div>
            </div>
          </div>
          <div className='col-md-3'>
            <div className='card'>
              <img className='card-img-top img-fluid' src={c52} />
              <div className='card-title'>
                <h4>GYM Tops</h4>
              </div>
              <div className='card-text'>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Repudiandae fugiat et voluptate sunt officia vero molestias.
                <br />
                <br />
                <a className='btn btn-dark text-light'>
                  {" "}
                  Connect Now
                </a> &nbsp; <br />
                <br />
              </div>
            </div>
          </div>
          <div className='col-md-3'>
            <div className='card'>
              <img className='card-img-top img-fluid' src={c94} />
              <div className='card-title'>
                <h4>GYM Tops</h4>
              </div>
              <div className='card-text'>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Repudiandae fugiat et voluptate sunt officia vero molestias.
                <br />
                <br />
                <a className='btn btn-dark text-light'>
                  {" "}
                  Connect Now
                </a> &nbsp; <br />
                <br />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='container mt-5 mb-5'>
        <div className='row'>
          <h2>Ratings &amp; Reviews</h2>
        </div>
        <div className='row mt-5 mb-5'>
          <div className='media'>
            <img className='mr-3' src={c11} alt='Generic placeholder image' />
            <div className='media-body'>
              <h5 className='mt-0'>
                Very nice product.{" "}
                <span className='text-warning'>
                  <i className='fa fa-star' aria-hidden='true' />{" "}
                  <i className='fa fa-star' aria-hidden='true' />{" "}
                  <i className='fa fa-star' aria-hidden='true' />{" "}
                  <i className='fa fa-star-half-o' aria-hidden='true' />{" "}
                  <i className='fa fa-star-o' aria-hidden='true' />{" "}
                </span>
              </h5>
              Cras sit amet nibh libero, in gravida nulla. Nulla vel metus
              scelerisque ante sollicitudin. Cras purus odio, vestibulum in
              vulputate at, tempus viverra turpis. Fusce condimentum nunc ac
              nisi vulputate fringilla. Donec lacinia congue felis in faucibus.
            </div>
          </div>
        </div>
        <div className='row mb-5'>
          <div className='media'>
            {" "}
            <img className='mr-3' src={c12} alt='Generic placeholder image' />
            <div className='media-body'>
              <h5 className='mt-0'>
                Best product best material.
                <span className='text-warning'>
                  <i className='fa fa-star' aria-hidden='true' />{" "}
                  <i className='fa fa-star' aria-hidden='true' />{" "}
                  <i className='fa fa-star' aria-hidden='true' />{" "}
                  <i className='fa fa-star' aria-hidden='true' />{" "}
                  <i className='fa fa-star' aria-hidden='true' />{" "}
                </span>
              </h5>
              Cras sit amet nibh libero, in gravida nulla. Nulla vel metus
              scelerisque ante sollicitudin. Cras purus odio, vestibulum in
              vulputate at, tempus viverra turpis. Fusce condimentum nunc ac
              nisi vulputate fringilla. Donec lacinia congue felis in faucibus.{" "}
            </div>
          </div>
        </div>
        <div className='row mb-5'>
          <div className='media'>
            {" "}
            <img className='mr-3' src={c13} alt='Generic placeholder image' />
            <div className='media-body'>
              <h5 className='mt-0'>
                {" "}
                Bad product.dont take this
                <span className='text-warning'>
                  <i className='fa fa-star' aria-hidden='true' />{" "}
                  <i className='fa fa-star' aria-hidden='true' />{" "}
                  <i className='fa fa-star-o' aria-hidden='true' />{" "}
                  <i className='fa fa-star-o' aria-hidden='true' />{" "}
                  <i className='fa fa-star-o' aria-hidden='true' />{" "}
                </span>
              </h5>
              Cras sit amet nibh libero, in gravida nulla. Nulla vel metus
              scelerisque ante sollicitudin. Cras purus odio, vestibulum in
              vulputate at, tempus viverra turpis. Fusce condimentum nunc ac
              nisi vulputate fringilla. Donec lacinia congue felis in faucibus.{" "}
            </div>
          </div>
        </div>
        <div className='row mb-5'>
          <div className='media'>
            {" "}
            <img className='mr-3' src={c14} alt='Generic placeholder image' />
            <div className='media-body'>
              <h5 className='mt-0'>
                really nice product,value for money.
                <span className='text-warning'>
                  <i className='fa fa-star' aria-hidden='true' />{" "}
                  <i className='fa fa-star' aria-hidden='true' />{" "}
                  <i className='fa fa-star' aria-hidden='true' />{" "}
                  <i className='fa fa-star-half-o' aria-hidden='true' />{" "}
                  <i className='fa fa-star-o' aria-hidden='true' />{" "}
                </span>
              </h5>
              Cras sit amet nibh libero, in gravida nulla. Nulla vel metus
              scelerisque ante sollicitudin. Cras purus odio, vestibulum in
              vulputate at, tempus viverra turpis. Fusce condimentum nunc ac
              nisi vulputate fringilla. Donec lacinia congue felis in faucibus.{" "}
            </div>
          </div>
        </div>
        <div className='row mb-5'>
          <h2> Post Your Own Reviews</h2>
        </div>
        <form>
          <div className='form-group'>
            <label htmlFor='exampleInputEmail1'>Email address</label>
            <input
              type='email'
              className='form-control'
              id='exampleInputEmail1'
              aria-describedby='emailHelp'
              placeholder='  Enter email'
            />
            <small id='emailHelp' className='form-text text-muted'>
              We'll never share your email with anyone else.
            </small>
          </div>
          <div className='form-group'>
            <label htmlFor='exampleInputPassword1'>Comments</label>
            <textarea
              type='text'
              className='form-control'
              id='exampleInputtextarea'
              placeholder='write your own reviews'
              rows={3}
              defaultValue={""}
            />
          </div>
          <div className='form-check'>
            <input
              type='checkbox'
              className='form-check-input'
              id='exampleCheck1'
            />
            <label className='form-check-label' htmlFor='exampleCheck1'>
              Check me out
            </label>
          </div>
          <button type='submit' className='btn btn-primary'>
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}
export default Detailedpage;
