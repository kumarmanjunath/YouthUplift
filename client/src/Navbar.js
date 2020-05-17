import React from "react";

export default function Navbar() {
  return (
    <div>
      <nav
        className='navbar navbar-expand-lg bg-light text-uppercase fixed-top'
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
                  Mentors
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
                <div class='dropdown' style={{ marginLeft: "50px" }}>
                  <a
                    class='btn  dropdown-toggle'
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
                    style={{ marginTop: "40px", marginLeft: "-50px" }}
                    aria-labelledby='dropdownMenuLink'
                  >
                    <a class='dropdown-item' href='/login/mentor'>
                      Mentors
                    </a>
                    <a class='dropdown-item' href='/login/user'>
                      Student
                    </a>
                    <a class='dropdown-item' href='/login/admin'>
                      Admin
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
