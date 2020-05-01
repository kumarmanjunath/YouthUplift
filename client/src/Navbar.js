import React from "react";

export default function Navbar() {
  return (
    <div>
      <nav
        className='navbar navbar-expand-lg bg-secondary text-uppercase fixed-top'
        id='mainNav'
      >
        <div className='container'>
          <a className='navbar-brand js-scroll-trigger' href='#page-top'>
            <i className='fa fa-handshake-o'></i> Uplift Youths
          </a>
          <button
            className='navbar-toggler navbar-toggler-right  font-weight-bold bg-danger text-white rounded'
            type='button'
            data-toggle='collapse'
            data-target='#navbarResponsive'
            aria-controls='navbarResponsive'
            aria-expanded='false'
            aria-label='Toggle navigation'
          >
            Menu <i className='fa fa-bars'></i>
          </button>
          <div className='collapse navbar-collapse' id='navbarResponsive'>
            <ul className='navbar-nav ml-auto'>
              <li className='nav-item mx-0 mx-lg-1'>
                <a
                  className='nav-link py-3 px-0 px-lg-3 rounded js-scroll-trigger'
                  href='#portfolio'
                >
                  Portfolio
                </a>
              </li>
              <li className='nav-item mx-0 mx-lg-1'>
                <a
                  className='nav-link py-3 px-0 px-lg-3 rounded js-scroll-trigger'
                  href='#about'
                >
                  About
                </a>
              </li>
              <li className='nav-item mx-0 mx-lg-1'>
                <a
                  className='nav-link py-3 px-0 px-lg-3 rounded js-scroll-trigger'
                  href='#contact'
                >
                  Contact
                </a>
              </li>

              <li>
                <div class='dropdown'>
                  <a
                    class='btn btn-primary dropdown-toggle'
                    href='#'
                    role='button'
                    id='dropdownMenuLink'
                    data-toggle='dropdown'
                    aria-haspopup='true'
                    aria-expanded='false'
                  >
                    Login
                  </a>

                  <div
                    class='dropdown-menu btn btn-success'
                    aria-labelledby='dropdownMenuLink'
                  >
                    <a class='dropdown-item' href='/mlogin'>
                      Mentors
                    </a>
                    <a class='dropdown-item' href='/login'>
                      Student
                    </a>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      ;
    </div>
  );
}
