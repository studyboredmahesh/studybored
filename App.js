import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Navigation, Home, About, Directmessage, WebDeveloper, Upload, Reportbar, 
  ProjectComp, Calender, Sirprofile, Login, TeamEditProfile } from "./components";
import Popmain from "./components/Popmain"
function App() {
  return (
    <div className="App">
      <Router>
        <Navigation />
        <Switch>
          <Route path="/" exact component={() => <Home />} />
          <Route path="/about" exact component={() => <About />} />
          <Route path="/Webdeveloper" exact component={() => <WebDeveloper />} />
          <Route path="/Directmessage" exact component={() => <Directmessage />} />
          <Route path="/Popmain" exact component={() => <Popmain />} />
          <Route path="/Upload" exact component={() => <Upload />} />
          <Route path="/Reportbar" exact component={() => <Reportbar />} />
          <Route path="/ProjectComp" exact component={() => <ProjectComp />} />
          <Route path="/Calender" exact component={() => <Calender />} />
          <Route path="/Sirprofile" exact component={() => <Sirprofile />} />
          <Route path="/Login" exact component={() => <Login/>} />
          <Route path="/TeamEditProfile" exact component={() => <TeamEditProfile/>} />
        </Switch>
        
      </Router>
    </div>
  );
}

export default App;