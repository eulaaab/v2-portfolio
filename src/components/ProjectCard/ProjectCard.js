import React from "react";
import "./ProjectCard.scss";
import { Modal, Link, Card, CardActionArea,CardContent, Typography, MobileStepper, Button } from "@material-ui/core/";
import {useTheme } from '@material-ui/core/styles';
import KeyboardArrowLeft from '@material-ui/icons/KeyboardArrowLeft';
import KeyboardArrowRight from '@material-ui/icons/KeyboardArrowRight';

const ProjectCard = (props) => {
  let { projectObj } = props;
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);
  const [activeStep, setActiveStep] = React.useState(0);
  const maxSteps = projectObj.images.length;

  //for the modal
  const handleOpen = (e) => {
e.preventDefault();
    setOpen(true);
  };

  const handleClose = (e) => {
    e.preventDefault();
    setOpen(false);
  };

  //for the stepper images
  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const body = (
    <div className="project__modal">
      <Card className="project__modal-card">
        <CardActionArea>
          <div className="project__media-container">
        <img
        className="project__media"
        src={projectObj.images[activeStep]}
        alt={`${projectObj.name[activeStep]}`}
      />
        </div>
      <MobileStepper
        steps={maxSteps}
        position="static"
        variant="text"
        activeStep={activeStep}
        nextButton={
          <Button size="small" onClick={handleNext} disabled={activeStep === maxSteps - 1}>
            Next
            {theme.direction === 'rtl' ? <KeyboardArrowLeft /> : <KeyboardArrowRight />}
          </Button>
        }
        backButton={
          <Button size="small" onClick={handleBack} disabled={activeStep === 0}>
            {theme.direction === 'rtl' ? <KeyboardArrowRight /> : <KeyboardArrowLeft />}
            Back
          </Button>
        }
      />
          <CardContent>
          <Typography gutterBottom variant="h5" component="h2">{projectObj.name}</Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {projectObj.description}
          </Typography>
          <div className="project__tools">
          <span className="project__tool">
                <div
                  className="card__link"
                  onClick={handleClose}
                >
                  CLOSE
                </div>
              </span>
              <span className="project__tool">
                <a
                  href={projectObj.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="card__link"
                >
                  DEMO
                </a>
              </span>
              <span className="project__tool">
                <a
                  href={projectObj.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="card__link"
                >
                  GITHUB
                </a>
              </span>
            </div>
          </CardContent>
        </CardActionArea>
      </Card>
     
    </div>
  );

  return (
    <div className="project__container">
      <div className="project__card">
        <div className="project__card-overlay">
          <div
            className="project__card-overlay-2"
            style={{
              backgroundImage: `url(${projectObj.thumbnail})`,
            }}
          ></div>
        </div>
        <div className="project__content">
          <div className="image__wrapper">
            <img
              src={projectObj.thumbnail}
              alt={projectObj.thumbnail}
              className="project__thumbnail"
            />
            {/* <button type="button" class="text" onClick={handleOpen}>
              Learn More
            </button> */}
            <Link
              color="inherit"
              type="button"
              className="text"
              onClick={handleOpen}
              href=""
            >
              LEARN MORE
            </Link>
            <Modal
              open={open}
              onClose={handleClose}
              aria-labelledby="modal__title"
              aria-describedby="modal__description"
            >
              {body}
            </Modal>
          </div>

          <div className="project__text">
            <p style={{ fontWeight: "900" }}>{projectObj.name}</p>
            <p className="project__blurb">{projectObj.blurb}</p>
            <p>{projectObj.tools}</p>
            <div className="project__tools">
              <span className="project__tool">
                <a
                  href={projectObj.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="card__link"
                >
                  DEMO
                </a>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
