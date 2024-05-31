import React from "react";
import "./App.scss";
import { Grid, IconButton, Tooltip } from "@mui/material";
import Main from "./components/Main/Main";
import Mobile from "./components/Mobile/Mobile";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Projects from "./components/Projects/Projects";
import {
  BrowserRouter as Router,
  Route,
  Routes, 
} from "react-router-dom";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import DescriptionIcon from "@mui/icons-material/Description";
import GitHubIcon from "@mui/icons-material/GitHub";
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
          <Routes>
            <Route path="/" exact element={<Home/>}  />
            <Route path="/v2-portfolio" element={<Home/>}  />
            <Route path="/about" element={<About/>} />
            <Route path="/projects" element={<Projects/>} />
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;
