import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  counterMain: {
    height: "400px",
    display: "flex",
    flexDirection: "column",
    [theme.breakpoints.down("md")]: {
      height: "auto",
    },
  },
  counterMainH: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    height: "200px",
    [theme.breakpoints.down("md")]: {
      height: "120px",
    },
  },
  counterH: {
    fontWeight: "400",
    fontSize: "70px",
    color: "#156663",
    [theme.breakpoints.down("md")]: {
      textAlign: "center",
      fontSize: "50px",
    },
    [theme.breakpoints.down("sm")]: {
      textAlign: "center",
      fontSize: "30px",
    },
  },
}));

export default useStyles;
/*[theme.breakpoints.down("sm")]: {
      display: "none",
    },*/
