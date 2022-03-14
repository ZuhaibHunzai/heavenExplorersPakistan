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
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    width: "500px",
    height: "auto",
    [theme.breakpoints.down("sm")]: {
      width: "280px",
    },
  },
  allInputs: {
    width: "100%",
  },
  contactFormInput: {
    width: "100%",
    height: "40px",
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
    width: "100%",
    height: "200px",
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
