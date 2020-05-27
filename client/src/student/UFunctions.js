import React, { Component } from "react";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import CompanyHome from "./CompanyHome";
// import fRegistration from "./Registration";
import CompanyNavbar from "./CompanyNavbar";
import Category from "./Category";
import Doctors from "./Mentors";
import axios from "axios";
import QuickModel from "./QuickModel";
import UserProf from "../student/UserProf";
import editProf from "../student/editProf";
import profile from "../student/profile";
import addstudent from "../student/adduserdetail";
import showstudent from "../student/showuserdetail";
import showarticle from "../student/showarticle";
import sendmail from "./mailsend";

export default class All extends Component {
  state = {
    users: [],
    mentors: [],
    category: [],
  };

  getCategory = async () => {
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    try {
      const res = await axios.get(
        "http://localhost:5000/api/v1/category/",
        config
      );
      this.setState({
        category: res.data.data,
      });
    } catch (err) {
      console.log("Can't load the items");
    }
  };

  getMentors = async () => {
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    try {
      const res = await axios.get(
        ` http://localhost:5000/api/v1/mentors`,
        config
      );
      this.setState({
        mentors: res.data.data,
      });
    } catch (err) {
      console.log("Can't load the items");
    }
  };
  render() {
    return (
      <Router>
        <div className=''>
          <CompanyNavbar />
          {/* <div className="jumbotron" style={{ marginBottom: 0 + "px" }}></div> */}

          <Switch>
            <Route
              exact
              path={"/user/Home"}
              render={(props) => (
                <CompanyHome
                  {...props}
                  user={this.state.users}
                  getMentors={this.getMentors}
                  // getCategory={this.getCategory}
                  mentors={this.state.mentors}
                  // category={this.state.category}
                />
              )}
            />
            {/* <Route exact path={"/user/Home"} component={CompanyHome} /> */}
            <Route
              exact
              path={"/user/Category"}
              render={(props) => (
                <Category
                  user={this.state.users}
                  getMentors={this.getMentors}
                  getCategory={this.getCategory}
                  mentors={this.state.mentors}
                  category={this.state.category}
                />
              )}
            />
            <Route path={"/user/mentors"} component={Doctors} />
            <Route path={"/user/ShowMentor"} component={QuickModel} />
            <Route
              role='user'
              path={"/user/userprofile"}
              component={UserProf}
            />
            <Route
              role='user'
              path={"/user/editprofile/:id"}
              component={editProf}
            />
            <Route role='user' path={"/profile"} component={profile} />
            <Route path={"/user/adddetail"} component={addstudent} />
            <Route path={"/user/showdetail"} component={showstudent} />
            <Route path={"/user/showarticle"} component={showarticle} />
            <Route path={"/user/sendmail"} component={sendmail} />
          </Switch>
        </div>
      </Router>
    );
  }
}

// export default App;
