import React, { Component } from "react";
import "./Mobile.scss";
import summerImage from "../../assets/images/summer.png";
import { Button, Typography } from "@material-ui/core";
import {
  Link,
  Element,
  Events,
  animateScroll as scroll,
  scroller,
} from "react-scroll";
import Home from "../../components/Home/Home";
import About from "../../components/About/About";
import Projects from "../../components/Projects/Projects";
import { IconButton } from "@material-ui/core";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import DescriptionIcon from "@material-ui/icons/Description";
import GitHubIcon from "@material-ui/icons/GitHub";
import ArrowUpwardIcon from "@material-ui/icons/ArrowUpward";
import EmailIcon from '@material-ui/icons/Email';

class Mobile extends Component {
  constructor(props) {
    super(props);
    this.scrollToTop = this.scrollToTop.bind(this);
  }

  componentDidMount() {
    Events.scrollEvent.register("begin", function () {
      // console.log("begin", arguments);
    });

    Events.scrollEvent.register("end", function () {
      // console.log("end", arguments);
    });
  }
  scrollToTop() {
    scroll.scrollToTop();
  }
  scrollTo() {
    scroller.scrollTo("scroll-to-element", {
      duration: 200,
      delay: 0,
      smooth: "easeInOutQuart",
    });
  }

  componentWillUnmount() {
    Events.scrollEvent.remove("begin");
    Events.scrollEvent.remove("end");
  }
  render() {
    return (
      <div className="mobile">
        <ul className="nav__mobile">
          <li className="nav__link">
            <Link
              activeClass="active"
              className="home"
              to="home"
              spy={true}
              smooth={true}
              duration={500}
            >
              HOME
            </Link>
          </li>
          <li className="nav__link">
            <Link
              activeClass="active"
              className="about"
              to="about"
              spy={true}
              smooth={true}
              duration={400}
            >
              ABOUT
            </Link>
          </li>
          <li className="nav__link">
            <Link
              activeClass="active"
              className="projects"
              to="projects"
              spy={true}
              smooth={true}
              duration={400}
            >
              PROJECTS
            </Link>
          </li>
        </ul>
        <section className="landing slide-left-right">
          <img className="landing__image" src={summerImage} alt="winter mobile" />
          <div className="landing__overlay"></div>
          <div className="landing__text-container">
            <div className="landing__card">
              <Typography variant="h1" className=" landing__header">
                EULA
              </Typography>
              <Typography variant="h1" className=" landing__header">
                BENGCO
              </Typography>
              <Typography variant="h4" className=" landing__tagline">
                {" "}
                Web Developer{" "}
              </Typography>
            </div>

            <Button
              variant="outlined"
              className="landing__button"
              type="button"
            >
              <Link
                activeClass="active"
                className="home"
                to="home"
                spy={true}
                smooth={true}
                duration={500}
              >
                <Typography variant="h4" style={{ color: "#e5e5e5" }}>
                  WELCOME
                </Typography>
              </Link>
            </Button>
          </div>
        </section>

        <Element name="home" style={{ paddingTop: "20px" }}>
          <Home />
        </Element>

        <Element name="about">
          <About />
        </Element>

        <Element name="projects">
          <Projects />
        </Element>

        <ul className="mobile__icons">
          <li>
            <IconButton
              aria-label="LinkedIn"
              href="https://www.linkedin.com/in/eulabengco/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <LinkedInIcon />
            </IconButton>
          </li>
          <li>
            <IconButton
              aria-label="Resume"
              href="https://docs.google.com/document/d/1mRGhqcJQzpKn-3o8235B5nuiXQaxfMx55eAmZrLB5IA/edit?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
            >
              <DescriptionIcon />
            </IconButton>
          </li>
          <li>
            <IconButton>
              <GitHubIcon
                aria-label="GitHub"
                href="https://github.com/eulaaab"
                target="_blank"
                rel="noopener noreferrer"
              />
            </IconButton>
          </li>
          <li>
            <a href="mailto:eulabengco@gmail.com">
              <IconButton>
                <EmailIcon
                />
              </IconButton>
            </a>
          </li>
        </ul>
        <div onClick={this.scrollToTop} className="element__scroll">
          <IconButton className="top">
            <ArrowUpwardIcon className="up" />
          </IconButton>
        </div>
      </div>
    );
  }
}

export default Mobile;