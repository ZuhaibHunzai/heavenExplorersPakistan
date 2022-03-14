import { useNavigate } from "react-router-dom";
import { servicesData } from "../../Assets/Data/cardsData";
import { Typography } from "@material-ui/core";
import useStyles from "./styles";
import { Buttons } from "../Units/buttons";

const Cards = () => {
  const classes = useStyles();
  const navigate = useNavigate();
  function handleRoute(path) {
    navigate(path);
  }
  return (
    <div className={classes.CardsMain}>
      {servicesData.map((item, index) => {
        return (
          <div className={classes.card}>
            <div className={classes.cardsData}>
              <div className={classes.cardH}>
                <Typography
                  variant="h5"
                  style={{ color: "#FFFFFF", fontWeight: "bold" }}
                >
                  {item.title}
                </Typography>
              </div>
              <div className={classes.cardImg}>
                <img className={classes.cardImg} src={item.src} alt="img" />
              </div>

              <div className={classes.cardP}>
                <Typography variant="body1">{item.desc}</Typography>{" "}
              </div>

              <div className={classes.cardBtnMain}>
                <div
                  className={classes.cardBtnEnd}
                  style={{ marginLeft: "12px", marginBottom: "12px" }}
                >
                  <Buttons
                    className={classes.cardBtn}
                    type="button"
                    buttonSize="btn--medium"
                    buttonStyle="btn--secondary--outlined"
                    onClick={() => handleRoute(`/${item.link}`)}
                  >
                    Read More
                  </Buttons>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Cards;
