import { Typography } from "@material-ui/core";
import CounterUp from "../../Components/CounterUp/index";
import useStyles from "./styles";

const Counts = () => {
  const classes = useStyles();
  return (
    <div className={classes.counterMain}>
      <div className={classes.counterMainH}>
        <div>
          <Typography variant="h2" className={classes.counterH}>
            Some Counts That Matters
          </Typography>
        </div>
      </div>
      <div>
        <CounterUp />
      </div>
    </div>
  );
};

export default Counts;
