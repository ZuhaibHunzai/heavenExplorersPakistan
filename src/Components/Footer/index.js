import { Typography } from "@material-ui/core";
import FacebookIcon from "@material-ui/icons/Facebook";
import InstagramIcon from "@material-ui/icons/Instagram";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import Logo from "../../Assets/Images/logo.jpg";
import useStyles from "./styles";

const Footer = () => {
  const classes = useStyles();
  return (
    <div className={classes.FooterMain}>
      <div className={classes.FooterData}>
        <div className={classes.footerData1}>
          <div>
            <img
              src={Logo}
              alt="logo"
              style={{ width: "80px", height: "80px" }}
            />
          </div>
          <div className={classes.footerP}>
            <Typography variant="h5">Heaven Explorers Pakistan</Typography>
          </div>
          <div className={classes.footerP}>
            <Typography variant="body2">Local and Tour Website</Typography>
          </div>
        </div>
        <div className={classes.footerText}>
          <div>
            <Typography
              variant="subtitle1"
              className={classes.heavenExplorerT}
              style={{ fontSize: "22px" }}
            >
              Contact Us
            </Typography>
          </div>
          <div>
            <div
              className={classes.heavenExplorer}
              style={{ paddingTop: "12px" }}
            >
              <Typography
                variant="subtitle1"
                className={classes.heavenExplorer}
              >
                <ul>
                  <li>info@heavenexplorerspakistan.com</li>
                </ul>
              </Typography>
            </div>
            <div className={classes.heavenExplorerText}>
              <Typography
                variant="subtitle1"
                className={classes.heavenExplorer}
              >
                <ul>
                  <li>03495747188</li>
                </ul>
              </Typography>
            </div>
            <div className={classes.heavenExplorerText}>
              <Typography
                variant="subtitle1"
                className={classes.heavenExplorer}
              >
                <ul>
                  <li>Office#1 Hunza Plaza, Hunza, GB, Pakistan</li>
                </ul>
              </Typography>
            </div>
          </div>
        </div>
        <div className={classes.SocialMediaIcons}>
          <div>
            <Typography
              variant="subtitle1"
              className={classes.heavenExplorerT}
              style={{ fontSize: "22px" }}
            >
              Follow Us
            </Typography>
          </div>
          <div className={classes.iocons}>
            <div>
              <FacebookIcon className={classes.socialIcons} />
            </div>
            <div>
              <InstagramIcon
                className={classes.socialIcons}
                style={{ paddingLeft: "20px", paddingRight: "20px" }}
              />
            </div>
            <div>
              <LinkedInIcon className={classes.socialIcons} />
            </div>
          </div>
        </div>
      </div>
      <div className={classes.FooterTextCopyRight}>
        <div>
          <Typography
            variant="subtitle1"
            className={classes.heavenExplorer}
            style={{ fontSize: "16px" }}
          >
            Copyright 2022 © Heaven Explorers Pakistan
          </Typography>
        </div>
      </div>
    </div>
  );
};

export default Footer;
