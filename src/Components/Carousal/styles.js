import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  sliderMain: {
    width: "100%",
    height: "800px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",

    [theme.breakpoints.down("md")]: {
      width: "100%",
      height: "500px",
    },
    [theme.breakpoints.down("sm")]: {
      width: "100%",
      height: "320px",
    },
  },
  sliderBtnLeft: {
    backgroundColor: "#162275",
    color: "#FFFFFF",
    padding: "20px",
    fontSize: "30px",
    outline: "none",
    border: "none",

    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginLeft: "50px",
    cursor: "pointer",
    [theme.breakpoints.down("sm")]: {
      marginLeft: "0px",
      padding: "10px",
      fontSize: "20px",
    },
  },
  sliderBtnRight: {
    backgroundColor: "#162275",
    color: "#FFFFFF",
    padding: "20px",
    outline: "none",
    border: "none",
    fontSize: "30px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginRight: "50px",
    cursor: "pointer",
    [theme.breakpoints.down("sm")]: {
      marginRight: "0px",
      padding: "10px",
      fontSize: "20px",
    },
  },
  sliderImg: {
    width: "100%",
    [theme.breakpoints.down("sm")]: {
      //   display: "none",
    },
  },
}));

export default useStyles;
