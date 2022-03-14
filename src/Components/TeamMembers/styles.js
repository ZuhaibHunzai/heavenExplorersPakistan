import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  ServicesMain: {
    backgroundColor: "#FFFFFF",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    color: "#fff",
  },
  serviceMainDiv: {
    display: "grid",
    gridTemplateColumns: "1fr 1fr 1fr",
    gridGap: "50px",
    paddingTop: "20px",
    paddingBottom: "50px",
    [theme.breakpoints.down("md")]: {
      paddingTop: "20px",
      gridTemplateColumns: "1fr 1fr",
    },
    [theme.breakpoints.down("sm")]: {
      paddingTop: "20px",
      gridTemplateColumns: "1fr",
    },
  },
  servicesMainMap: {
    width: "340px",
    height: "430px",
    borderRadius: "10px",
    // background: "#fff",
    display: "flex",
    justifyItems: "center",
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
    backgroundColor: "#156663",
    color: "#162275",
    boxShadow: "0px 0px 5px #156663",
  },
  services: {
    // width: "300px",
    height: "100%",
    display: "flex",
    justifyContent: "space-between",
    flexDirection: "column",
    justifyItem: "center",
    alignItems: "center",

    [theme.breakpoints.down("md")]: {
      flexDirection: "column",
      marginLeft: "0px",
      width: "auto",
    },
  },
  serviceName: {
    width: "290px",
    paddingLeft: "12px",
    [theme.breakpoints.down("md")]: {
      paddingLeft: "0px",
      textAlign: "center",
    },
  },
  serviceTitle: {
    color: "#FFFFFF",
  },
  servicePic: {
    display: "flex",
    width: "100%",
    height: "280px",
  },
  membersDes: {
    display: "flex",
    textAlign: "justify",
    padding: "12px",
    fontSize: "18px",
    [theme.breakpoints.down("md")]: {
      marginTop: "12px",
    },
  },
}));

export default useStyles;
/*[theme.breakpoints.down("sm")]: {
      display: "none",
    },*/
