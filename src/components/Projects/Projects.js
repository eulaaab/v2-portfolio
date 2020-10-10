import React from "react";
import BuildIcon from "@material-ui/icons/Build";
import "./Projects.scss";
import { Typography } from "@material-ui/core/";
import ProjectCard from "../../components/ProjectCard/ProjectCard";
import eatermeter01 from "../../assets/images/eatermeter-01.png";
import eatermeter02 from "../../assets/images/eatermeter-02.png";
import eatermeter03 from "../../assets/images/eatermeter-03.png";
import eatermeter04 from "../../assets/images/eatermeter-04.png";
import brainflix01 from "../../assets/images/brainflix-01.png";
import brainflix02 from "../../assets/images/brainflix-02.png";
import brainflix03 from "../../assets/images/brainflix-03.png";
import brainflix04 from "../../assets/images/brainflix-04.png";
import startech01 from "../../assets/images/startech-01.png";
import startech02 from "../../assets/images/startech-02.png";
import startech03 from "../../assets/images/startech-03.png";
import tetherCert from "../../assets/images/bstn-ms-cert.png";
import tether00 from "../../assets/images/tether-00.png";
import tether01 from "../../assets/images/tether-01.png";
import tetherThumb from "../../assets/images/tether-thumbnail.png";
import wouldThumb from "../../assets/images/would-you-rather-thumbnail.png";
import eatermeterThumb from "../../assets/images/eatermeter-thumbnail.png";

function Projects() {
  let projects = [
    {
      id: "01",
      name: "Would You Rather?",
      blurb: "Polling game made to solidify Redux state management concepts.",
      description:
        "Would You Rather? is a polling game project made using React, Redux, and styled using Material-UI. How it works is a impersonates a user by logging it. The user is asked a question in the form: “Would you rather [option A] or [option B] ?” This solidified my understanding of React and Redux. I learned how to manage the application’s state; establish strict rules for getting, listening, and updating the store; and identify what state should live inside of Redux and what state should live inside of React components. The user can also make new questions and the app displays a Leader Board.",
      thumbnail: wouldThumb,
      images: [tether00, tether01, tetherCert],
      tools: "React / Redux / Material-UI / Surge",
      website: "https://would-you-rather-poll-app.surge.sh/",
      info: "",
    },
    {
      id: "02",
      name: "tether",
      blurb: "I built the Card component to render JIRA tickets.",
      description:
        "tether is a productivity web app that display Slack statuses based on the Jira ticket they are actively working on. Built with a Firebase database deployed in Heroku. You can login using Google and Github Oauthentication. BrainStation x Microsoft HackingAtHome hackathon project with 6 people completed in 2 days.",
      thumbnail: tetherThumb,
      images: [tetherCert, tether00, tether01],
      tools: "React / Firebase / Heroku / Sketch / Node / OAuth",
      website: "https://tethermsft.web.app/",
      info: "http://tiny.cc/55bhoz",
    },
    {
      id: "03",
      name: "EaterMeter",
      blurb: "Food metasearch engine React app.",
      description:
        "EaterMeter is a food metaseach engine designed to find the best places to eat by seeing all the ratings in one place. The platform renders ratings, review count and restaurant information taken from APIs Google Places, Yelp Fusion, and Zomato Developers.",
      thumbnail: eatermeterThumb,
      images: [eatermeter01, eatermeter02, eatermeter03, eatermeter04],
      tools: "React / Bootstrap / Express / Node / APIs / Heroku",
      github: "",
      website: "https://eatermeter.herokuapp.com/",
      video: "https://www.loom.com/share/74fc829740a54cabb888f3f30e908065",
    },
    {
      id: "04",
      name: "Startech",
      blurb: "Informational website for career hunters.",
      description:
        "Startech is an informational website to help educate recent graduates kickstart their careers. A static wedpage  built as part of the one-day hackathon with fellow UX Designer and Data Scientist students in the Winter 2020 Cohort",
      thumbnail: startech01,
      images: [startech01, startech02, startech03],
      tools: "React / SASS / Netlify",
      github: "https://github.com/eulaaab/brainstation-3d",
      website: "https://reverent-neumann-0948a0.netlify.com/",
      video: "",
    },
    {
      id: "05",
      name: "BrainFlix",
      blurb:
        "A fully-responsive React app to learn Component Lifecycle Methods.",
      description:
        "Brainflix is a responsive web application built as a project in my program to learn React, restful APIs, and Component Lifecycle Methods. Features includes next video navigation, posting comments, and upload videos.",
      thumbnail: brainflix01,
      images: [brainflix01, brainflix02, brainflix03, brainflix04],
      tools: "React / Axios / Component Lifecycle Method",
      github: "",
      website: "",
      video: "",
    },
  ];
  return (
    <section className="projects move-down-up">
      <div className="projects__text">
        <BuildIcon color="action" className="projects__icon" />
        <Typography variant="h4" className="projects__header">
          Cool Projects I Built
        </Typography>
      </div>
      <div className="projects__list">
        {projects.map((projectObj) => (
          <ProjectCard projectObj={projectObj} key={projectObj.id} />
        ))}
      </div>
    </section>
  );
}

export default Projects;
