import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  card: {
    width: "310px",
    height: "400px",
    backgroundColor: "#fff",
    display: "flex",
    justifyContent: "center",
    borderTopRightRadius: "20px",
    borderTopLeftRadius: "20px",
    borderBottomLeftRadius: "20px",
    borderBottomRightRadius: "20px",
    "&:hover": {
      transform: "translateY(-5px)",
      transition: "0.5s ease",
    },
  },
  cardsData: {
    display: "flex",
    justifyContent: "space-between",
    flexDirection: "column",
    backgroundColor: "#156663",
  },
  cardText: {
    paddingLeft: "12px",
    paddingRight: "12px",
  },
  cardImg: {
    width: "280px",
    height: "250px",
    borderTopRightRadius: "20px",
    borderTopLeftRadius: "20px",
  },
  CardsMain: {
    display: "grid",
    gridTemplateColumns: "1fr 1fr 1fr ",
    gridGap: "50px",
    justifyItems: "space-between",

    [theme.breakpoints.down("md")]: {
      gridTemplateColumns: "1fr 1fr",
      gridGap: "100px",
    },
    [theme.breakpoints.down("sm")]: {
      gridTemplateColumns: "1fr",
      gridGap: "30px",
    },
    cardH: {
      color: "#FFFFFF",
    },
    cardP: {},
    cardBtnMain: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
    },
    cardBtnEnd: {
      display: "flex",
    },
    cardBtn: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
    },
  },
}));

export default useStyles;
/*[theme.breakpoints.down("sm")]: {
      display: "none",
    },*/
