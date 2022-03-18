import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  counterMain: {
    width: "100%",
    display: "flex",
    justifyContent: "space-around",
    alignItems: "center",
    flexWrap: "wrap",
    color: "#313131",
    [theme.breakpoints.down("sm")]: {
      height: "500px",
      flexDirection: "column",
    },
  },
  couterup: {
    fontSize: "70px",
    fontWeight: "bold",
    [theme.breakpoints.down("sm")]: {
      fontSize: "40px",
      fontWeight: "bold",
    },
  },
  counter: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
  },
  counterP: {
    fontSize: "22px",
    fontWeight: "bold",
    [theme.breakpoints.down("sm")]: {
      fontSize: "16px",
    },
  },
}));

export default useStyles;
/*[theme.breakpoints.down("sm")]: {
      display: "none",
    },*/
