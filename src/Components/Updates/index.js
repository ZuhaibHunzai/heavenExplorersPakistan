import { ServicesHeader } from "../Units/servicesHeader";
import { updates } from "../../Assets/Data/cardsData";
import { Typography } from "@material-ui/core";
import useStyles from "./styles";

const Updates = () => {
  const classes = useStyles();
  return (
    <div>
      <ServicesHeader>New Updates</ServicesHeader>
      {updates.map((item, index) => {
        return (
          <div
            style={{
              display: "flex",
              justifyContent: "center",
            }}
          >
            <div className={classes.updatesTextMain}>
              <div>
                <Typography variant="h3" className={classes.updatesHeading}>
                  {item.updateName}
                </Typography>
              </div>
              <div>
                <Typography variant="p" className={classes.updatesPara}>
                  {item.updateAbstract}
                </Typography>
                <br></br>
                <br></br>
              </div>
              <div>
                <Typography variant="p" className={classes.updatesPara}>
                  {item.updateDesc}
                </Typography>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Updates;
