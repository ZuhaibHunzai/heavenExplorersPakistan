import { makeStyles } from "@material-ui/core";
import Bg from "../../Assets/Images/heroBg.jpg";

const useStyles = makeStyles((theme) => ({
  heroMain: {
    width: "100%",
    height: "90vh",
    backgroundImage: `url(${Bg})`,
    backgroundPosition: "center",
    backgroundSize: "cover",
    display: "flex",
    justifyContent: "left",
    alignItems: "center",
    flexWrap: "wrap",

    [theme.breakpoints.down("md")]: {
      width: "auto",
      height: "60vh",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
    },
    [theme.breakpoints.down("sm")]: {
      width: "auto",
      height: "auto",
      backgroundPosition: "left",
    },
    [theme.breakpoints.down("sm")]: {
      backgroundImage: "none",
      height: "auto",
    },
  },
  HeroTextArea: {
    marginLeft: "100px",

    width: "550px",
    height: "350px",
    display: "flex",
    justifyContent: "space-around",
    alignItems: "left",
    flexDirection: "column",

    [theme.breakpoints.down("md")]: {
      justifyContent: "space-around",
      alignItems: "left",
      flexDirection: "column",
      marginLeft: "0px",
      width: "auto",
      height: "auto",
    },
    [theme.breakpoints.down("sm")]: {
      width: "auto",
      height: "auto",
      paddingTop: "20px",
      paddingBottom: "20px",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
    },
  },
  heroMainH: {
    color: "#156663",
    fontSize: "68px",
    fontWeight: "500",
    [theme.breakpoints.down("md")]: {
      display: "flex",
      fontSize: "30px",
      fontWeight: "500",

      textAlign: "center",
    },
    [theme.breakpoints.down("sm")]: {
      display: "flex",
      fontSize: "30",
      fontWeight: "400",
      width: "auto",
      marginLeft: "10px",
    },
  },
  heroPara: {
    display: "flex",
    width: "550px",
    [theme.breakpoints.down("md")]: {
      display: "flex",
      width: "450px",
      fontSize: "22px",
      marginLeft: "10px",
    },
    [theme.breakpoints.down("md")]: {
      marginLeft: "10px",
      display: "flex",
      width: "auto",
      fontSize: "22px",
    },
  },
  heroMainH2: {
    color: "#162275",
    fontSize: "32px",
    margin: "0px",
    [theme.breakpoints.down("md")]: {
      marginLeft: "10px",
      display: "flex",
      width: "auto",
      fontSize: "22px",
    },
    [theme.breakpoints.down("sm")]: {
      marginLeft: "10px",
      display: "flex",
      width: "auto",
      fontSize: "20px",
      textAlign: "center",
    },
  },
  heroMainP: {
    width: "100%",
    color: "#585858",
    // textShadow: "2px 2px gray",
    fontSize: "18px",
    fontWeight: "400",
    lineHeight: "2rem",
    letterSpacing: "1px",
    [theme.breakpoints.down("md")]: {
      display: "flex",

      width: "550px",
    },
    [theme.breakpoints.down("sm")]: {
      display: "flex",
      width: "auto",
      paddingTop: "20px",
      paddingRight: "12px",
      paddingLeft: "12px",
      textAlign: "justify",
      fontSize: "18px",
    },
  },
  HeroImgArea: {
    display: "flex",
    justifyContent: "center",
    width: "800px",
    height: "500px",
    [theme.breakpoints.down("sm")]: {
      width: "auto",
      height: "auto",
    },
  },
  HeroImg: {
    display: "flex",
    width: "800px",
    height: "500px",
    [theme.breakpoints.down("md")]: {
      display: "none",
    },
  },
}));

export default useStyles;
/*[theme.breakpoints.down("sm")]: {
      display: "none",
    },*/

//background pic link https://pixabay.com/photos/right-advocacy-lex-attorney-jura-4703934/
