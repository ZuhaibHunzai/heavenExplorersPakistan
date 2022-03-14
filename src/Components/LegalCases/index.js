import { ServicesHeader } from "../Units/servicesHeader";
import legal from "../../Assets/Images/legal.jpg";
import { Buttons } from "../Units/buttons";
import { useNavigate } from "react-router-dom";
import useStyles from "./styles";
import { Typography } from "@material-ui/core";

const LegalCases = () => {
  const navigate = useNavigate();
  function handleRoute(path) {
    navigate(path);
  }
  const classes = useStyles();
  return (
    <div className={classes.LegalMain}>
      <div>
        <ServicesHeader>Legal Cases / Matters</ServicesHeader>
      </div>

      <div className={classes.servicesBodyMain}>
        <div className={classes.servicesImgDiv}>
          <img
            src={legal}
            alt="legal Case"
            className={classes.servicesBodyImg}
          />
        </div>
        <div className={classes.servicesBodyTextDiv}>
          <div className={classes.servicesBodyTextH}>
            <Typography variant="h2" className={classes.serviceH}>
              Legal Cases / Matters
            </Typography>
          </div>
          <div className={classes.servicesbodyTextP}>
            <Typography variant="body2" className={classes.serviceP}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </Typography>
          </div>
          <div style={{ marginTop: "12px" }}>
            <Buttons
              type="button"
              buttonStyle="btn--primary--outlined"
              buttonSize="btn--medium"
              onClick={() => {
                handleRoute("/contact");
              }}
            >
              Contact Us
            </Buttons>
          </div>
        </div>
      </div>
    </div>
  );
};
export default LegalCases;
