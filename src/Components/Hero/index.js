import { Typography } from "@material-ui/core";
import { Buttons } from "../Units/buttons";
import { useNavigate } from "react-router-dom";

import useStyles from "./styles";

const Hero = () => {
  const navigate = useNavigate();
  function handleRoute(path) {
    navigate(path);
  }
  const classes = useStyles();
  return (
    <div className={classes.heroMain}>
      <div className={classes.HeroTextArea}>
        <div className={classes.heroHeading}>
          <Typography variant="h2" className={classes.heroMainH}>
            Heaven Explorers Pakistan
          </Typography>
        </div>
        <div className={classes.heroPara}>
          <Typography variant="subtitle1" className={classes.heroMainP}>
            Heaven Explorers Pakistan is supporting tourists to make, plan,
            manage and operate trips in Gilgit-Baltistan, pakistan.<br></br>{" "}
            (Tours, Expeditions, Trekking, Hiking, travel)
          </Typography>
        </div>
        <div style={{ paddingTop: "20px" }}>
          <Buttons
            type="button"
            buttonStyle="btn--primary--outlined"
            buttonSize="btn--medium"
            onClick={() => {
              handleRoute("/about");
            }}
          >
            Read More
          </Buttons>
        </div>
      </div>
    </div>
  );
};

export default Hero;
