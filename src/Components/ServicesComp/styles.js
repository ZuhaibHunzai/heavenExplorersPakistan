import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  servicesMain: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    backgroundColor: "#FFFFFF",

    borderTopLeftRadius: "350px",
    borderBottomRightRadius: "350px",
    borderTop: "1px solid #fff",
    paddingBottom: "50px",
    [theme.breakpoints.down("md")]: {
      borderTopLeftRadius: "250px",
      borderBottomRightRadius: "250px",
    },
    [theme.breakpoints.down("sm")]: {
      borderTopLeftRadius: "150px",
      borderBottomRightRadius: "100px",
    },
  },
  serviceMainH: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "200px",

    [theme.breakpoints.down("md")]: {
      height: "120px",
    },
  },
  serviceH: {
    fontWeight: "400",
    fontSize: "70px",
    color: "#156663",
    [theme.breakpoints.down("md")]: {
      fontSize: "50px",
    },
    [theme.breakpoints.down("sm")]: {
      fontSize: "30px",
    },
  },
  serviceCArds: {
    justifyContent: "center",
  },
}));

export default useStyles;
/*[theme.breakpoints.down("sm")]: {
      display: "none",
    },*/
