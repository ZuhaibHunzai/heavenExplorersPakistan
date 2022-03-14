import useStyles from "./styles";
import { Typography } from "@material-ui/core";
import { servicesData } from "../../Assets/Data/cardsData";
import { useNavigate } from "react-router-dom";
import { Buttons } from "../Units/buttons";

const ServicesMap = () => {
  const classes = useStyles();
  const navigate = useNavigate();
  function handleRoute(path) {
    navigate(path);
  }
  return (
    <div className={classes.ServicesMain}>
      <div className={classes.serviceMainDiv}>
        {servicesData.map((item, index) => {
          return (
            <div className={classes.servicesMainMap}>
              <div className={classes.services}>
                <div className={classes.serviceName}>
                  <div>
                    <Typography
                      variant="h4"
                      className={classes.serviceTitle}
                      style={{ marginTop: "12px" }}
                    >
                      {item.title}
                    </Typography>
                  </div>
                </div>
                <div>
                  <img
                    src={item.src}
                    alt="profile-pic"
                    className={classes.servicePic}
                  />
                </div>

                <div
                  className={classes.cardBtnEnd}
                  style={{ marginLeft: "12px", marginBottom: "12px" }}
                >
                  <Buttons
                    className={classes.cardBtn}
                    type="button"
                    buttonSize="btn--medium"
                    buttonStyle="btn--white--outlined"
                    onClick={() => handleRoute(`/${item.link}`)}
                  >
                    Explore Service
                  </Buttons>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ServicesMap;
