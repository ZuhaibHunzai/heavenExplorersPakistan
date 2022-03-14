import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  ContactNavMain: {
    width: "100%",
    height: "5vh",
    fontSize: "14px",
    color: "rgb(20, 20, 20)",
    display: "flex",
    backgroundColor: "#FFFFFF",
    justifyContent: "space-around",
    alignItems: "center",
    letterSpacing: "1px",
    fontFamily: "Roboto",
    fontWeight: "500",
    // borderBottom: "1px solid #fdfd",
    [theme.breakpoints.down("md")]: {
      display: "none",
    },
  },
  ContactNavItemsMain: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  ContactNavIcons: {
    display: "flex",
    marginRight: "10px",
    color: "#156663",
  },
  locationIcon: {
    marginRight: "10px",
    marginTop: "5px",
  },
  socialLinks: {
    width: "100px",
    paddingRight: "15px",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  SocialLinksHover: {
    cursor: "pointer",
    "&:hover": {
      color: "#d5d5d5",
      transition: "0.5s",
    },
    facebookIcon: {
      BackgroundColor: "#162275",
    },
    instagramIcon: {
      color: "#162275",
    },
  },
}));

export default useStyles;
/*[theme.breakpoints.down("sm")]: {
      display: "none",
    },*/
