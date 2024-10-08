import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import { Buttons } from "../Units/buttons";
import Logo from "../../Assets/Images/logo.jpg";
import HamBurger from "../HamBurger/index";
import useStyles from "./Style";
import { useNavigate } from "react-router-dom";

const Header = React.forwardRef((props, ref) => {
  const classes = useStyles();
  const navigate = useNavigate();
  function handleRoute(path) {
    navigate(path);
  }
  return (
    <AppBar className={classes.AppBar} ref={ref}>
      <Toolbar className={classes.Toolbar}>
        <div className={classes.logoDiv}>
          <div className={classes.logoName}>
            <img
              onClick={() => {
                handleRoute("/");
              }}
              style={{ cursor: "pointer" }}
              width="140px"
              className={classes.logo}
              src={Logo}
              alt="logo"
            />
          </div>
          <div className={classes.logoText}>
            <div>
              <Typography
                variant="subtitle1"
                className={classes.logoTextMainH}
                style={{ color: "#162275" }}
              >
                Heaven Explorers Pakistan
              </Typography>
            </div>
            <div>
              <Typography variant="subtitle1" style={{ color: "#162275" }}>
                Local and Tour Website
              </Typography>
            </div>
          </div>
        </div>
        <div className={classes.headerMidData}>
          <Buttons
            type="button"
            buttonStyle="btn--black--solid"
            buttonSize="btn--medium"
            onClick={() => handleRoute("/")}
          >
            Home
          </Buttons>

          <Buttons
            type="button"
            buttonStyle="btn--black--solid"
            buttonSize="btn--medium"
            onClick={() => handleRoute("/services")}
          >
            Services
          </Buttons>
          <Buttons
            type="button"
            buttonStyle="btn--black--solid"
            buttonSize="btn--medium"
            onClick={() => handleRoute("/offers")}
          >
            Offers
          </Buttons>

          <Buttons
            type="button"
            buttonStyle="btn--black--solid"
            buttonSize="btn--medium"
            onClick={() => handleRoute("/gallary")}
          >
            Gallary
          </Buttons>
          <Buttons
            type="button"
            buttonStyle="btn--black--solid"
            buttonSize="btn--medium"
            onClick={() => handleRoute("/about")}
          >
            About
          </Buttons>
          <Buttons
            type="button"
            buttonStyle="btn--black--solid"
            buttonSize="btn--medium"
            onClick={() => handleRoute("/contact")}
          >
            Contact
          </Buttons>
        </div>
        <div className="walletDiv">
          <Buttons
            type="button"
            buttonStyles="btn--primary--solid"
            buttonSize="btn-large"
            onClick={() => {
              handleRoute("/offers/offer-booking");
            }}
            className={classes.bookingBtn}
          >
            Book a Trip
          </Buttons>

          <HamBurger />
        </div>
      </Toolbar>
    </AppBar>
  );
});

export default Header;
