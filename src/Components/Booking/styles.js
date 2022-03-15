import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  contactMain: {
    marginTop: "20px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
  },
  contactHeader: {
    width: "100%",
  },
  formMain: {
    // height: "600px",
    // display: "flex",
    // justifyContent: "center",
    // alignContent: "center",
  },
  contactLocation: {
    width: "100%",
    marginTop: "20px",
  },
  contactFormMain: {
    width: "850px",
    height: "350px",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    // alignItems: "center",

    [theme.breakpoints.down("md")]: {
      width: "auto",
      height: "auto",
      flexDirection: "column",
    },
  },
  allInputs: {
    width: "100%",
  },
  contactFormInput: {
    width: "400px",
    height: "60px",
    fontSize: "18px",
    marginTop: "12px",
    border: "2px solid #156663",
    borderRadius: "5px",
    color: "#156663",
    [theme.breakpoints.down("md")]: {
      width: "400px",
    },
    [theme.breakpoints.down("sm")]: {
      width: "280px",
    },
  },
  contactFormText: {
    width: "400px",
    height: "168px",
    marginTop: "12px",
    border: "2px solid #156663",
    borderRadius: "5px",
    fontSize: "18px",
    color: "#156663",
    [theme.breakpoints.down("sm")]: {
      width: "400px",
    },
    [theme.breakpoints.down("sm")]: {
      width: "280px",
    },
  },
  bookingBtnMain: {
    width: "100%",
    display: "flex",
    justifyContent: "space-evenly",
    alignItems: "center",
  },
  bookingBtn: {
    width: "100%",
    display: "block",
  },
}));

export default useStyles;
/*[theme.breakpoints.down("sm")]: {
      display: "none",
    },*/
