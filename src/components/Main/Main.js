import React, { useEffect } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import "./Main.scss";
import "../../App.scss";
import "fontsource-roboto";
import mainVideo from "../../assets/video/summer-beach.mp4";
import summerImage from "../../assets/images/summer.png";
import { Button, Typography } from "@mui/material";

const styles = {
  activeStyle: {
    fontWeight: "bolder",
  },
};
export const Main = () => {

useEffect(() => {
    const vid = document.getElementById("mainVid");
    vid.playbackRate = 0.6;
}, [])

  // renderHome = (e) => {
  //   e.preventDefault();
  //   return <Home />;
  // };


    const navigate = useNavigate();
    return (
      <section className="main">
        <img className="main__image" src={summerImage} alt="summer portfolio look" />
        <div className="main__video">
          <div className="main__video--container">
            <video loop="loop" muted="muted" autoPlay="autoplay" id="mainVid">
              <source
                src={mainVideo}
                type="video/mp4"
                className="main__video-desktop"
              />
            </video>
          </div>
          <div className="main__overlay"></div>
        </div>
        <div className="main__text-container">
          <div className="main__card">
            <Typography variant="h1" className=" main__header">
              EULA
            </Typography>
            <Typography variant="h1" className=" main__header">
              BENGCO
            </Typography>
            <Typography variant="h4" className=" main__tagline">
              {" "}
              Web Developer{" "}
            </Typography>
          </div>
          <Button
            variant="outlined"
            className="main__button"
            type="button"
            onClick={() => this.setState({ isHomeVisible: true })}
          >
            <Typography variant="h4" style={{ color: "#e5e5e5" }}>
              WELCOME
            </Typography>
          </Button>
        </div>
        <div className="nav">
          <ul className="nav__list-non-mobile">
            {" "}
            <NavLink exact to="/">
              <li className="nav__link">HOME</li>
            </NavLink>
            <NavLink
              to="/about"
              activeClassName="active"
              activeStyle={styles.activeStyle}
              //className="about__style"
            >
              {" "}
              <li className="nav__link">ABOUT </li>
            </NavLink>
            <NavLink
              to="/projects"
              activeClassName="active"
              activeStyle={styles.activeStyle}
            >
              <li className="nav__link">PROJECTS</li>
            </NavLink>
          {
            /*
  <NavLink
              to="/contact"
              activeClassName="active"
              activeStyle={styles.activeStyle}
            >
              <li className="nav__link">CONTACT</li>
            </NavLink>
            */
          }
          </ul>
        </div>
      </section>
    );
  }


export default Main;
