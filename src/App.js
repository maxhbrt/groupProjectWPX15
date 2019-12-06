import React from "react";
import { Switch, Route } from "react-router-dom";
import Landing from "./Pages/Landing/Landing.jsx";
import Projects from "./Pages/Projects/Projects.jsx";
import SingleProject from "./Pages/SingleProject/SingleProjects.jsx";
import Profile from "./Pages/Profile/Profile.jsx";
import Help from "./Pages/Help/Help.jsx";
import ProjectModal from "./Components/ProjectModal/ProjectModal.jsx";
import axios from "axios";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
<<<<<<< HEAD
      userInfo: {},
      projects: {},
      comments: {}
=======
      userInfo: null,
      projects: {},
      comments: null
>>>>>>> 194cf30b5d2ad95d3feb0a3fa1ec49b57972f47e
    };
  }

  async componentDidMount() {
    const results = await axios.get("/auth/getAllProjects");
    this.setState({ projects: results.data });
  }
<<<<<<< HEAD

=======
>>>>>>> 194cf30b5d2ad95d3feb0a3fa1ec49b57972f47e
  getProjectData = data => {
    this.setState({ projects: data });
  };

  getUserInfo = result => {
    this.setState({ userInfo: result });
  };

  logout = () => {
    this.setState({ userInfo: {}, projects: {}, comments: {} });
  };
  render() {
    return (
      <React.Fragment>
        <Switch>
<<<<<<< HEAD
          <Route path="/" exact component={Landing} />
=======
          <Route
            path="/"
            exact
            render={() => (
              <Landing user={this.getUserInfo} reset={this.logout} />
            )}
          />
>>>>>>> 194cf30b5d2ad95d3feb0a3fa1ec49b57972f47e
          <Route
            path="/projects"
            exact
            render={() => <Projects projectData={this.state.projects} />}
          />
          <Route path="/project/:id" exact component={SingleProject} />
          <Route
            path="/profile/:id"
            exact
            render={() => <Profile user={this.state.userInfo} />}
          />
          <Route path="/help" exact component={Help} />
          <Route
            path="/projectUpload"
            exact
            render={() => (
              <ProjectModal
                id={this.state.userInfo}
                getData={this.getProjectData}
              />
            )}
          />
        </Switch>
      </React.Fragment>
    );
  }
}

export default App;
