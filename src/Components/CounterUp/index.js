import useStyles from "./styles";
import CountUp from "react-countup";
import { Typography } from "@material-ui/core";

const CounterUp = () => {
  const classes = useStyles();
  return (
    <div className={classes.counterMain}>
      <div className={classes.counter}>
        <div>
          <CountUp
            useEasing={true}
            end={3000}
            duration={5}
            className={classes.couterup}
          />
        </div>
        <Typography variant="subtitle1" className={classes.counterP}>
          Tour Completed
        </Typography>
      </div>
      <div className={classes.counter}>
        <div>
          <CountUp
            useEasing={true}
            end={12000}
            duration={5}
            className={classes.couterup}
          />
        </div>
        <Typography variant="subtitle1" className={classes.counterP}>
          Total Guests
        </Typography>
      </div>
      <div className={classes.counter}>
        <div>
          <CountUp
            useEasing={true}
            end={15}
            duration={8}
            className={classes.couterup}
          />
        </div>
        <Typography variant="subtitle1" className={classes.counterP}>
          Years of Experience
        </Typography>
      </div>
    </div>
  );
};

export default CounterUp;
