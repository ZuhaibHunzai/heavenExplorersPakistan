import { Typography } from "@material-ui/core";
import useStyles from "./styles";

const Location = () => {
  const classes = useStyles();
  return (
    <div className={classes.locationMain}>
      <div>
        <div>
          <Typography variant="h2" className={classes.locationH}>
            Our Location
          </Typography>
        </div>
      </div>
      <div>
        <iframe
          title="location"
          width="100%"
          height="400"
          frameborder="0"
          scrolling="no"
          marginwidth="0"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3321.905183367081!2d73.07490809821049!3d33.633700391393354!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38df954be7149cad%3A0xb744596225c62873!2sA%20Law%20Associates!5e0!3m2!1sen!2s!4v1645180717022!5m2!1sen!2s"
        ></iframe>
      </div>
    </div>
  );
};

export default Location;
