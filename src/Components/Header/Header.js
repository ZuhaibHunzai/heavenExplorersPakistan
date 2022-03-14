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
            <img width="140px" className={classes.logo} src={Logo} alt="logo" />
          </div>
          <div className={classes.logoText}>
            <div>
              <Typography
                variant="p"
                className={classes.logoTextMainH}
                style={{ color: "#162275" }}
              >
                Heaven Explorers Pakistan
              </Typography>
            </div>
            <div>
              <Typography
                variant="p"
                logoTextMainP
                style={{ color: "#162275" }}
              >
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
            onClick={() => handleRoute("/team")}
          >
            Team
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
            onClick={() => handleRoute("/new-updates")}
          >
            Updates
          </Buttons>
        </div>
        <div className="walletDiv">
          <Buttons
            type="button"
            buttonStyles="btn--primary--solid"
            buttonSize="btn-large"
            onClick={() => handleRoute("/contact")}
            className={classes.bookingBtn}
          >
            Book Consultant
          </Buttons>

          <HamBurger />
        </div>
      </Toolbar>
    </AppBar>
  );
});

export default Header;
