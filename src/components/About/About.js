import React from "react";
import {
  Grid,
  Tooltip,
  IconButton,
  Typography,
  Paper,
  Card,
  CardContent,
  Avatar,
} from "@material-ui/core/";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import DescriptionIcon from "@material-ui/icons/Description";
import GitHubIcon from "@material-ui/icons/GitHub";
import CodeIcon from "@material-ui/icons/Code";
import "./About.scss";
import eula from "../../assets/images/photo.jpg";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import EmailIcon from '@material-ui/icons/Email';
import skyDive from "../../assets/images/eula-dive.png"

function About() {
  return (
    <section className="about move-left-right">
      <div className="about__text">
        <CodeIcon color="action" className="about__icon" />
        <Typography variant="h4" className="about__header">
          Nice To Meet You!
        </Typography>
        <Avatar
          src={eula}
          alt="eula bengco web developer"
          className="about__avatar"
        />
      </div>
      <Paper variant="outlined" className="about__description">
        <Typography variant="h6">
          I'm a highly-motivated individual who loves to explore and try new
          things. I have been always fascinated with the internet, how it works
          and decided to pursue my dream of becoming a Web Developer. I love the
          feeling of writing bits of text and see it come to life on a website.
        </Typography>
      </Paper>
      <Paper variant="outlined" className="about__description">
        <Typography variant="h6">
          The push happened when I took a professional break in 2018 and
          realized that I wanted to share my travel experiences in the web.
          While travelling, I learned the three fundamentals of the web: HTML,
          CSS, and JavaScript.
        </Typography>
      </Paper>
      <Paper variant="outlined" className="about__description">
        <Typography variant="h6">
          When I came back to Canada, I enrolled at BrainStation and graduated
          from their Full-time Web Development Diploma program in Winter 2020
          Cohort.
        </Typography>
      </Paper>
      <Paper variant="outlined" className="about__description">
        <Typography variant="h6">
          When not coding, you'll find me at a concert, globe trotting, playing
          guitar, or planning my next food adventure.
        </Typography>
      </Paper>
      <Card className="about__sky-container">
        <img src={skyDive} className="about__sky" alt="Eula Bengco Sky Dive"/>
        <CardContent>
          <Typography variant="body2" color="textSecondary" component="p">
            I jumped off a plane at Byron Bay, Queensland, Australia back in September 2017.
          </Typography>
        </CardContent>
      </Card>
      <div className="about__links">
        <AccountCircleIcon color="action" className="about__icon" />
        <Typography variant="h4" className="about__header">
          Contact
        </Typography>
      </div>
      <Paper className="about__icons">
        <Grid
          container
          direction="row"
          justify="space-evenly"
          alignItems="center"
        >
          <Grid item xs={3}>
            <Tooltip title="LinkedIn" placement="bottom">
              <IconButton
                aria-label="LinkedIn"
                href="https://www.linkedin.com/in/eulabengco/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <LinkedInIcon className="about__icon" />
              </IconButton>
            </Tooltip>
          </Grid>
          <Grid item xs={3}>
            <Tooltip title="Resume" placement="bottom">
              <IconButton
                aria-label="Resume"
                href="https://docs.google.com/document/d/1mRGhqcJQzpKn-3o8235B5nuiXQaxfMx55eAmZrLB5IA/edit?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
              >
                <DescriptionIcon className="about__icon" />
              </IconButton>
            </Tooltip>
          </Grid>
          <Grid item xs={3}>
            <Tooltip title="GitHub" placement="bottom">
              <IconButton
                aria-label="GitHub"
                href="https://github.com/eulaaab"
                target="_blank"
                rel="noopener noreferrer"
              >
                <GitHubIcon className="about__icon" />
              </IconButton>
            </Tooltip>
          </Grid>
          <Grid item xs={3}>
            <Tooltip title="Email" placement="bottom">
            <a href="mailto:eulabengco@gmail.com?Subject=Saying Hi!">
              <IconButton
                aria-label="Email"
              >
                <EmailIcon className="about__icon" />
              </IconButton>
                </a>
            </Tooltip>
          </Grid>
        </Grid>
      </Paper>
    </section>
  );
}

export default About;
