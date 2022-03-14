import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  updatesTextMain: {
    padding: "20px",
    width: "700px",
    display: "flex",
    justifyContent: "center",
    flexDirection: "column",
  },
  updatesHeading: {
    display: "flex",
    color: "#162275",
    [theme.breakpoints.down("sm")]: {
      fontSize: "35px",
    },
  },
  updatesPara: {
    display: "flex",
    textAlign: "justify",
    fontSize: "22px",
  },
}));

export default useStyles;
/*[theme.breakpoints.down("sm")]: {
      display: "none",
    },*/
