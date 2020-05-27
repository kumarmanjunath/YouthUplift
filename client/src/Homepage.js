import React from "react";
import avatar from "./components/img/avataaars.svg";
import img1 from "./components/img/portfolio/cabin1.jpg";
import img2 from "./components/img/portfolio/cake1.jpg";
import img3 from "./components/img/portfolio/circus1.jpg";
import img4 from "./components/img/portfolio/game1.jpg";
import img5 from "./components/img/portfolio/safe1.jpg";
import img6 from "./components/img/portfolio/submarine1.jpg";
import Navbar from "./Navbar";

function Homepage() {
  return (
    <div>
      <Navbar></Navbar>
      <header className='masthead bg-primary text-white text-center'>
        <div className='container d-flex align-items-center flex-column'>
          <img className='masthead-avatar mb-5' src={avatar} alt='' />

          <h1 className='masthead-heading text-uppercase mb-0'>
            Helping Youths
          </h1>

          <div className='divider-custom divider-light'>
            <div className='divider-custom-line'></div>
            <div className='divider-custom-icon'>
              <i className='fa fa-star'></i>
            </div>
            <div className='divider-custom-line'></div>
          </div>

          <p className='masthead-subheading font-weight-light mb-0'>
            Build A Sucessfull carrier
          </p>
        </div>
      </header>

      <section className='page-section portfolio bg-dark' id='portfolio'>
        <div className='container'>
          <h2 className='page-section-heading text-center text-uppercase text-light mb-0'>
            Professional Mentors
          </h2>

          <div className='divider-custom divider-light'>
            <div className='divider-custom-line'></div>
            <div className='divider-custom-icon'>
              <i className='fa fa-star'></i>
            </div>
            <div className='divider-custom-line'></div>
          </div>

          <div className='row'>
            <div className='col-md-6 col-lg-4'>
              <div
                className='portfolio-item mx-auto'
                data-toggle='modal'
                data-target='#portfolioModal1'
              >
                <div className='portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100'>
                  <div className='portfolio-item-caption-content text-center text-white'>
                    <i className='fa fa-plus fa-3x'></i>
                  </div>
                </div>
                <img className='img-fluid' src={img1} alt='' />
              </div>
            </div>

            <div className='col-md-6 col-lg-4'>
              <div
                className='portfolio-item mx-auto'
                data-toggle='modal'
                data-target='#portfolioModal2'
              >
                <div className='portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100'>
                  <div className='portfolio-item-caption-content text-center text-white'>
                    <i className='fa fa-plus fa-3x'></i>
                  </div>
                </div>
                <img className='img-fluid' src={img2} alt='' />
              </div>
            </div>

            <div className='col-md-6 col-lg-4'>
              <div
                className='portfolio-item mx-auto'
                data-toggle='modal'
                data-target='#portfolioModal3'
              >
                <div className='portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100'>
                  <div className='portfolio-item-caption-content text-center text-white'>
                    <i className='fa fa-plus fa-3x'></i>
                  </div>
                </div>
                <img className='img-fluid' src={img3} alt='' />
              </div>
            </div>

            <div className='col-md-6 col-lg-4'>
              <div
                className='portfolio-item mx-auto'
                data-toggle='modal'
                data-target='#portfolioModal4'
              >
                <div className='portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100'>
                  <div className='portfolio-item-caption-content text-center text-white'>
                    <i className='fa fa-plus fa-3x'></i>
                  </div>
                </div>
                <img className='img-fluid' src={img4} alt='' />
              </div>
            </div>

            <div className='col-md-6 col-lg-4'>
              <div
                className='portfolio-item mx-auto'
                data-toggle='modal'
                data-target='#portfolioModal5'
              >
                <div className='portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100'>
                  <div className='portfolio-item-caption-content text-center text-white'>
                    <i className='fa fa-plus fa-3x'></i>
                  </div>
                </div>
                <img className='img-fluid' src={img5} alt='' />
              </div>
            </div>

            <div className='col-md-6 col-lg-4'>
              <div
                className='portfolio-item mx-auto'
                data-toggle='modal'
                data-target='#portfolioModal6'
              >
                <div className='portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100'>
                  <div className='portfolio-item-caption-content text-center text-white'>
                    <i className='fa fa-plus fa-3x'></i>
                  </div>
                </div>
                <img className='img-fluid' src={img6} alt='' />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className='page-section bg-dark text-white mb-0' id='about'>
        <div className='container'>
          <h2 className='page-section-heading text-center text-uppercase text-white'>
            About
          </h2>

          <div className='divider-custom divider-light'>
            <div className='divider-custom-line'></div>
            <div className='divider-custom-icon'>
              <i className='fa fa-star'></i>
            </div>
            <div className='divider-custom-line'></div>
          </div>

          <div className='row'>
            <div className='col-lg-4 ml-auto'>
              <p className='lead'>
                Freelancer is a free bootstrap theme created by Start Bootstrap.
                The download includes the complete source files including HTML,
                CSS, and JavaScript as well as optional SASS stylesheets for
                easy customization.
              </p>
            </div>
            <div className='col-lg-4 mr-auto'>
              <p className='lead'>
                You can create your own custom avatar for the masthead, change
                the icon in the dividers, and add your email address to the
                contact form to make it fully functional!
              </p>
            </div>
          </div>

          {/* <div className='text-center mt-4'>
            <a
              className='btn btn-xl btn-outline-light'
              href='https://startbootstrap.com/themes/freelancer/'
            >
              <i className='fa fa-download mr-2'></i>
              Free Download!
            </a>
          </div> */}
        </div>
      </section>
      {/* <section className='page-section bg-dark text-white mb-0' id='contact'>
        <div className='container'>
          <h2 className='page-section-heading text-center text-uppercase text-white mb-0'>
            Contact Me
          </h2>

          <div className='divider-custom divider-light'>
            <div className='divider-custom-line'></div>
            <div className='divider-custom-icon'>
              <i className='fa fa-star'></i>
            </div>
            <div className='divider-custom-line'></div>
          </div>

          <div className='row'>
            <div className='col-lg-8 mx-auto'>
              <form name='sentMessage' id='contactForm' novalidate='novalidate'>
                <div className='control-group'>
                  <div className='form-group floating-label-form-group controls mb-0 pb-2'>
                    <label>Name</label>
                    <input
                      className='form-control'
                      id='name'
                      type='text'
                      placeholder='Name'
                      required='required'
                      data-validation-required-message='Please enter your name.'
                    />
                    <p className='help-block text-danger'></p>
                  </div>
                </div>
                <div className='control-group'>
                  <div className='form-group floating-label-form-group controls mb-0 pb-2'>
                    <label>Email Address</label>
                    <input
                      className='form-control'
                      id='email'
                      type='email'
                      placeholder='Email Address'
                      required='required'
                      data-validation-required-message='Please enter your email address.'
                    />
                    <p className='help-block text-danger'></p>
                  </div>
                </div>
                <div className='control-group'>
                  <div className='form-group floating-label-form-group controls mb-0 pb-2'>
                    <label>Phone Number</label>
                    <input
                      className='form-control'
                      id='phone'
                      type='tel'
                      placeholder='Phone Number'
                      required='required'
                      data-validation-required-message='Please enter your phone number.'
                    />
                    <p className='help-block text-danger'></p>
                  </div>
                </div>
                <div className='control-group'>
                  <div className='form-group floating-label-form-group controls mb-0 pb-2'>
                    <label>Message</label>
                    <textarea
                      className='form-control'
                      id='message'
                      rows='5'
                      placeholder='Message'
                      required='required'
                      data-validation-required-message='Please enter a message.'
                    ></textarea>
                    <p className='help-block text-danger'></p>
                  </div>
                </div>
                <br />
                <div id='success'></div>
                <div className='form-group'>
                  <button
                    type='submit'
                    className='btn btn-primary btn-xl'
                    id='sendMessageButton'
                  >
                    Send
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section> */}
      <footer className='footer text-center'>
        <div className='container'>
          <div className='row'>
            <div className='col-lg-4 mb-5 mb-lg-0'>
              <h4 className='text-uppercase mb-4'>Location</h4>
              <p className='lead mb-0'>
                2215 John Daniel Drive
                <br />
                Clark, MO 65243
              </p>
            </div>

            <div className='col-lg-4 mb-5 mb-lg-0'>
              <h4 className='text-uppercase mb-4'>Around the Web</h4>
              <a className='btn btn-outline-light btn-social mx-1' href='#'>
                <i className='fa fa-fw fa-facebook-f'></i>
              </a>
              <a className='btn btn-outline-light btn-social mx-1' href='#'>
                <i className='fa fa-fw fa-twitter'></i>
              </a>
              <a className='btn btn-outline-light btn-social mx-1' href='#'>
                <i className='fa fa-linkedin-square'></i>
              </a>
              <a className='btn btn-outline-light btn-social mx-1' href='#'>
                <i className='fa fa-fw fa-dribbble'></i>
              </a>
            </div>

            <div className='col-lg-4'>
              <h4 className='text-uppercase mb-4'>About Freelancer</h4>
              <p className='lead mb-0'>
                Freelance is a free to use, MIT licensed Bootstrap theme created
                by
                <a href='http://startbootstrap.com'>Start Bootstrap</a>.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
export default Homepage;
