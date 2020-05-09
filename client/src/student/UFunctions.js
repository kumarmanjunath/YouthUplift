import React, { Component } from "react";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import CompanyHome from "./CompanyHome";
// import fRegistration from "./Registration";
import CompanyNavbar from "./CompanyNavbar";
import Category from "./Category";
import Doctors from "./Doctors";
import axios from "axios";
import QuickModel from "./QuickModel";

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
                  user={this.state.user}
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
                  user={this.state.user}
                  getMentors={this.getMentors}
                  getCategory={this.getCategory}
                  mentors={this.state.mentors}
                  category={this.state.category}
                />
              )}
            />
            <Route path={"/user/mentors"} component={Doctors} />
            <Route path={"/user/ShowMentor"} component={QuickModel} />
          </Switch>
        </div>
      </Router>
    );
  }
}

// export default App;
