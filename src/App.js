import React from "react";
import "./App.scss";
import { Grid, IconButton, Tooltip } from "@material-ui/core";
import Main from "./components/Main/Main";
import Mobile from "./components/Mobile/Mobile";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Projects from "./components/Projects/Projects";
import Contact from "./components/Contact/Contact";
import {
  BrowserRouter as Router,
  Route,
  Switch, 
} from "react-router-dom";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import DescriptionIcon from "@material-ui/icons/Description";
import GitHubIcon from "@material-ui/icons/GitHub";
//import { useMediaQuery } from "react-responsive";

function App() {
  // const history = useHistory();
  // const isLaptop = useMediaQuery({
  //   query: "(min-device-width: 1200px)",
  // });
  // const isTablet = useMediaQuery({
  //   query: "(min-device-width: 768px)",
  // });
  // const isMobile = useMediaQuery({
  //   query: "(min-device-width: 320px)",
  // });

  // const isMobile = useMediaQuery("(min-width:320px)");

  
  return (
    <div className="app">
      <Mobile className="app__mobile" />
      <Router>
        <Main className="left" />
        <div className="right">
          <Grid
           container
            direction="row"
            justify="flex-end"
            alignItems="center"
            className="app__icons"
          >
            <Grid item xs={3}>
              <Tooltip title="LinkedIn" placement="bottom">
                <IconButton
                  aria-label="LinkedIn"
                  href="https://www.linkedin.com/in/eulabengco/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <LinkedInIcon />
                </IconButton>
              </Tooltip>

              <Tooltip title="Resume" placement="bottom">
                <IconButton
                  aria-label="Resume"
                  href="https://docs.google.com/document/d/1mRGhqcJQzpKn-3o8235B5nuiXQaxfMx55eAmZrLB5IA/edit?usp=sharing"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <DescriptionIcon />
                </IconButton>
              </Tooltip>
              <Tooltip title="GitHub" placement="bottom">
                <IconButton
                  aria-label="GitHub"
                  href="https://github.com/eulaaab"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <GitHubIcon />
                </IconButton>
              </Tooltip>
            </Grid>
          </Grid>
          <Switch>
            <Route path="/contact" component={Contact}/>
            <Route path="/about" component={About} />
            <Route path="/" exact component={Home}  />
            <Route path="/projects" component={Projects} />
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
