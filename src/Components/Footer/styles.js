import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  FooterMain: {
    height: "400px",
    backgroundColor: "#156663",
    display: "flex",
    justifyContent: "center",
    color: "#fff",
    alignItems: "center",
    flexDirection: "column",
    borderTop: "1px solid #fff",
    [theme.breakpoints.down("md")]: {
      height: "auto",
    },
  },
  FooterData: {
    width: "80%",
    display: "flex",
    justifyContent: "space-between",
    height: "250px",
    [theme.breakpoints.down("md")]: {
      display: "flex",
      justifyContent: "left",
      flexDirection: "column",
      height: "auto",
    },
    [theme.breakpoints.down("sm")]: {
      width: "auto",
      flexDirection: "column",
      paddingLeft: "20px",
    },
  },
  footerText: {
    width: "350px",
    height: "auto",
    color: "#fff",
    [theme.breakpoints.down("md")]: {
      width: "auto",
      display: "flex",
      justifyContent: "left",
      flexDirection: "column",
      height: "auto",
    },
    [theme.breakpoints.down("sm")]: {
      marginTop: "20px",
      width: "auto",
    },
  },
  heavenExplorerText: {
    [theme.breakpoints.down("xs")]: {
      marginTop: "12px",
    },
  },
  heavenExplorer: {
    // paddingTop: "20px",
  },
  footerP: {
    width: "350px",
    [theme.breakpoints.down("md")]: {
      width: "auto",
    },
  },
  SocialMediaIcons: {
    display: "flex",
    justifyContent: "top",
    alignItems: "left",

    flexDirection: "column",
    [theme.breakpoints.down("md")]: {
      display: "flex",
      justifyContent: "left",
      flexDirection: "column",
      height: "auto",
      marginTop: "20px",
    },
  },
  iocons: {
    display: "flex",
    justifyContent: "space-between",
    paddingTop: "12px",
    width: "150px",
    [theme.breakpoints.down("sm")]: {
      width: "300px",
      display: "flex",
      justifyContent: "center",
      textAlign: "center",
      alignItems: "center",
    },
  },
  socialIcons: {
    // padding: "12px",
    fontSize: "35px",
    color: "#fff",
  },
  FooterTextCopyRight: {
    color: "#fff",
    fontSize: "22px",
    [theme.breakpoints.down("sm")]: {
      marginTop: "22px",
      fontSize: "16px",
      paddingBottom: "12px",
    },
  },
}));

export default useStyles;
/*[theme.breakpoints.down("sm")]: {
      display: "none",
    },*/
