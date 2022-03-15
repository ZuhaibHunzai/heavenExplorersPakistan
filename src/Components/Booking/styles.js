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
  contactLocation: {
    width: "100%",
    marginTop: "20px",
  },
  contactFormMain: {
    display: "flex",
    justifyContent: "space-around",
    // alignItems: "center",
    width: "800px",
    height: "auto",
    [theme.breakpoints.down("md")]: {
      width: "auto",
      flexDirection: "column",
    },
  },
  allInputs: {
    width: "100%",
  },
  contactFormInput: {
    width: "300px",
    height: "60px",
    fontSize: "18px",
    marginTop: "12px",
    border: "2px solid #162275",
    borderRadius: "5px",
    color: "#162275",
    [theme.breakpoints.down("sm")]: {
      width: "280px",
    },
  },
  contactFormText: {
    width: "400px",
    height: "170px",
    marginTop: "12px",
    border: "2px solid #162275",
    borderRadius: "5px",
    fontSize: "18px",
    color: "#162275",
    [theme.breakpoints.down("sm")]: {
      width: "280px",
    },
  },
}));

export default useStyles;
/*[theme.breakpoints.down("sm")]: {
      display: "none",
    },*/
