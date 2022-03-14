import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  card: {
    width: "280px",
    height: "auto",
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
      color: "#162275",
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
