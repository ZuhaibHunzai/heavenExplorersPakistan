import { ServicesHeader } from "../Units/servicesHeader";
import profile from "../../Assets/Images/profile.jpeg";
import { Typography } from "@material-ui/core";
import useStyles from "./styles";
import Location from "../Location";

const About = () => {
  const classes = useStyles();
  return (
    <div>
      <div>
        <ServicesHeader>About Us</ServicesHeader>
      </div>
      <div className={classes.servicesBodyMain}>
        <div className={classes.servicesImgDiv}>
          <img
            src={profile}
            alt="legal Case"
            className={classes.servicesBodyImg}
          />
        </div>
        <div className={classes.servicesBodyTextDiv}>
          <div className={classes.servicesBodyTextH}>
            <Typography variant="h2" className={classes.serviceH}>
              Raja Abid Hussain
            </Typography>
          </div>
          <div className={classes.servicesBodyTextH}>
            <Typography variant="h2" className={classes.serviceH2}>
              Member Islamabad / Rawalpindi Tax Bar Association
            </Typography>
          </div>
          <div className={classes.servicesbodyTextP}>
            <Typography variant="body2" className={classes.serviceP}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </Typography>
          </div>
        </div>
      </div>
      <div className={classes.location}>
        <Location />
      </div>
    </div>
  );
};

export default About;
