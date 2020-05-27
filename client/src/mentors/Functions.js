import React from "react";
import axios from "axios";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import AdminHome from "./AdminHome";
// import fRegistration from "./Registration";
import AdminNavbar from "./AdminNavbar";
import addMentors from "./addItem";
import showMentors from "./showI";
import Forgotpasswrd from "../components/auth/Forgotpsswrd";
import editMentor from "./EditMentor";
import Footer from "./Footer";
import showmentordet from "../mentors/showmentordet";
import mentorpublish from "./MentorPublish/MentorPublishComponent";

// import Prof from "./Prof";
// import ProfileEdit from "./ProfileEdit";
// import orders from "./orders";

class App extends React.Component {
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
          <AdminNavbar />
          {/* <div className="jumbotron" style={{ marginBottom: 0 + "px" }}></div> */}

          <Switch>
            <Route
              exact
              path={"/mentor/Home"}
              render={(props) => (
                <AdminHome
                  {...props}
                  user={this.state.users}
                  getMentors={this.getMentors}
                  getCategory={this.getCategory}
                  mentors={this.state.mentors}
                  category={this.state.category}
                />
              )}
            />
            {/* <Route exact path={"/doctor/Home"} component={AdminHome} /> */}
            {/* <Route path={"/vendor/fsignup"} component={fRegistration} /> */}
            <Route path={"/mentor/addMentors"} component={addMentors} />
            <Route path={"/mentor/publish"} component={mentorpublish} />

            <Route path={"/mentor/showMentors"} component={showMentors} />
            <Route path={"/mentor/edit"} component={editMentor} />
            <Route path={"/reset"} component={Forgotpasswrd} />

            {/* <Route path={"/mentor/showMentorsdet"} component={showmentordet} /> */}

            {/* <Route path={"/doctor/Profile"} component={Prof} /> */}
            {/* <Route path={"/doctor/ProfileEdit"} component={ProfileEdit} /> */}
            {/* <Route path={"/doctor/orders"} component={orders} /> */}
          </Switch>
        </div>
        <Footer />
      </Router>
    );
  }
}

export default App;
