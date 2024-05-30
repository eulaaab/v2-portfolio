import React from "react";
import "./SkillCard.scss";
import { ListItem, Typography } from "@mui/material";

const SkillCard = (props) => {
  const { image, name } = props.skill;
  return (
    <div className="skill__wrapper">
      <ListItem className="skill__item">
        <img src={image} className="skill__icon" alt={`skill ${name} icon`}/>
        <Typography variant="h6">{name}</Typography>
      </ListItem>
    </div>
  );
};

export default SkillCard;
