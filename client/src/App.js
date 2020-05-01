import React from "react";
import Nextpage from "./Nextpage";
// import MHome from "./mentors/MHome";
// import farm from "./CSS/farm.css";
import MNextpage from "./mentors/MNextpage";
import Login from "./components/auth/Login";
import MLogin from "./mentors/MLogin";
import Register from "./components/auth/Register";
import MRegister from "./mentors/MRegister";
import "../src/App.css";
import "./mentors/MApp.css";
// import "./Signup.css";
// import "./mentors/MSignup.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
// import Navbar from "./Navbar";

import Homepage from "./Homepage";
import Detailedpage from "./Detailedpage";
import MDetailedpage from "./mentors/MDetailedpage";
import Detailedpagecss from "./Detailedpage.css";
import MDetailedpagecss from "./mentors/MDetailedpage.css";
import AllM from "./mentors/Allm";

class App extends React.Component {
  render() {
    return (
      <Router>
        <div>
          {/* <Navbar></Navbar> */}
          <Switch>
            <Route exact path='/' component={Homepage} />
            <Route path='/login' component={Login} />
            <Route path='/mlogin' component={MLogin} />
            <Route path='/register' component={Register} />
            <Route path='/mregister' component={MRegister} />
            <Route path='/detail' component={Detailedpage} />
            <Route path='/mdetail' component={MDetailedpage} />
            <Route exact path='/nextpage' component={Nextpage} />
            <Route exact path='/mnextpage' component={MNextpage} />
            {/* <Route exact path='/mhome' component={MHome} /> */}
            <AllM></AllM>
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
