import React from "react";
import "./Home.scss";
import HTMLIcon from "../../assets/icons/svg/html5-original-wordmark.svg";
import CSSIcon from "../../assets/icons/svg/css3-original-wordmark.svg";
import JSIcon from "../../assets/icons/svg/javascript-original.svg";
import SCSSIcon from "../../assets/icons/svg/sass-original.svg";
import ReactIcon from "../../assets/icons/svg/react-original.svg";
import BootstrapIcon from "../../assets/icons/png/bootstrap.png";
import MaterialIcon from "../../assets/icons/svg/material-ui-original.svg";
import NodeIcon from "../../assets/icons/svg/nodejs-original.svg";
import ExpressIcon from "../../assets/icons/svg/express-original-wordmark.svg";
import NPMIcon from "../../assets/icons/svg/npm-logo.svg";
import GitIcon from "../../assets/icons/svg/git-original.svg";
import NetlifyIcon from "../../assets/icons/svg/netlify-icon.svg";
import HerokuIcon from "../../assets/icons/svg/heroku-plain-wordmark.svg";
import WordPressIcon from "../../assets/icons/png/wordpress-logotype-wmark.png";
import MySQLIcon from "../../assets/icons/svg/mysql-original-wordmark.svg";
import ReduxIcon from "../../assets/icons/svg/redux.svg";
import { List, Typography, Paper } from "@material-ui/core/";
import LocalCafeRoundedIcon from "@material-ui/icons/LocalCafeRounded";
import LaptopChromebookRoundedIcon from "@material-ui/icons/LaptopChromebookRounded";
import MenuBookRoundedIcon from "@material-ui/icons/MenuBookRounded";
import CreateIcon from "@material-ui/icons/Create";
import CheckCircleOutlineIcon from "@material-ui/icons/CheckCircleOutline";
import CheckCircleIcon from "@material-ui/icons/CheckCircle";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
import SkillCard from "../SkillCard/SkillCard";

function Home() {
  const frontend = [
    {
      id: 0,
      name: "HTML5",
      image: HTMLIcon,
    },
    {
      id: 1,
      name: "CSS3",
      image: CSSIcon,
    },
    {
      id: 2,
      name: "JavaScript",
      image: JSIcon,
    },
    {
      id: 3,
      name: "React",
      image: ReactIcon,
    },
    {
      id: 4,
      name: "SASS/SCSS",
      image: SCSSIcon,
    },

    {
      id: 5,
      name: "Bootstrap",
      image: BootstrapIcon,
    },
    { id: 6, name: "Material-UI", image: MaterialIcon },
  ];

  const backend = [
    {
      id: 0,
      name: "Node.js",
      image: NodeIcon,
    },
    {
      id: 1,
      name: "Express",
      image: ExpressIcon,
    },
    {
      id: 2,
      name: "MySQL",
      image: MySQLIcon,
    },
  ];

  const other = [
    {
      id: 0,
      name: "NPM",
      image: NPMIcon,
    },
    {
      id: 1,
      name: "Git",
      image: GitIcon,
    },
    {
      id: 2,
      name: "Netlify",
      image: NetlifyIcon,
    },
    { id: 3, name: "Heroku", image: HerokuIcon },
    {
      id: 4,
      name: "Wordpress",
      image: WordPressIcon,
    },
    {
      id: 5,
      name: "Redux",
      image: ReduxIcon,
    },
  ];

  return (
    <section className="home__non-mobile home">
      <div className="home__heading">
        <LaptopChromebookRoundedIcon color="action" className="home__icon" />
        <Typography variant="h3">Fullstack Web Developer</Typography>
        <LocalCafeRoundedIcon color="action" className="home__icon" />
      </div>
      <div className="home__text">
        <MenuBookRoundedIcon color="action" className="home__icon" />
        <Typography variant="h4" className="home__header">
          Story
        </Typography>
      </div>
      <Paper variant="outlined" className="home__description">
        <Typography variant="h6">
          Hi! I'm Eula, a fullstack web developer based in Canada. I enjoy
          building beautiful and user friendly websites to elevate user
          experience through visuals and interactions. I light up collaborative
          environments with my bright energy where I can learn, share and be
          myself.
        </Typography>
      </Paper>
      <div className="home__text">
        <CreateIcon color="action" className="home__icon" />
        <Typography variant="h4" className="home__header">
          What I Can Do
        </Typography>
      </div>
      <div className="home__skills">
        <Paper className="skill__container">
          <div className="skill__header">
            <CheckCircleOutlineIcon className="skill__image" />
            <Typography variant="h4">Frontend</Typography>
          </div>
          <div className="skill__table">
            <List className="skill__list">
              {frontend.map((skill) => (
                <SkillCard skill={skill} key={skill.id} />
              ))}
            </List>
          </div>
        </Paper>
        <Paper className="skill__container">
          <div className="skill__header">
            <CheckCircleIcon className="skill__image" />
            <Typography variant="h4">Backend</Typography>
          </div>
          <div className="skill__table">
            <List className="skill__list">
              {backend.map((skill) => (
                <SkillCard skill={skill} key={skill.id} />
              ))} 
            </List>
          </div>
        </Paper>
        <Paper className="skill__container">
          <div className="skill__header">
            <MoreHorizIcon className="skill__image" />
            <Typography variant="h4">More Skills</Typography>
          </div>
          <div className="skill__table">
            <List className="skill__list">
              {other.map((skill) => (
                <SkillCard skill={skill} key={skill.id} />
              ))}
            </List>
          </div>
        </Paper>
      </div>
    </section>
  );
}

export default Home;
