import React from "react";
import { makeStyles } from "@material-ui/core";
import hunza from "../../Assets/Images/hunza.jpg";
import skardu from "../../Assets/Images/skardu.jpg";
import fairyMeadows from "../../Assets/Images/fairymeadows.jpg";
import nalter from "../../Assets/Images/nalter.jpg";
import { Buttons } from "../Units/buttons";
import { ServicesHeader } from "../Units/servicesHeader";
import { useNavigate } from "react-router-dom";
const SpecialOffers = () => {
  const classes = useStyles();
  const navigate = useNavigate();
  function handleRoute(path) {
    navigate(path);
  }
  return (
    <>
      <div className={classes.container}>
        <div className={classes.offersHeader}>
          <ServicesHeader style={{ backgroundColor: "#FFFFFF" }}>
            Special Offers
          </ServicesHeader>
        </div>

        <div className={classes.offersMain}>
          {/* fist Offer */}
          <div className={classes.kashi}>
            <div className={classes.intro}>
              <h1 className={classes.offersMainH}>Hunza 25% OFF</h1>
              <h4>5 Days Tour to Hunza Valley</h4>
              <p className={classes.offerP}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut aboris nisi ut aliquip ex ea
                commodo consequat. Lorem ipsum dolor sit amet, consectetur
                adipiscing elit, sed do eiusmod tempor incididunt ut aboris nisi
                ut aliquip ex ea commodo consequat.
              </p>
              <Buttons
                buttonSize="btn--medium"
                buttonStyle="btn--secondary--outlined"
                className={classes.bookingBtn}
                onClick={() => {
                  handleRoute("/offers/offer-booking");
                }}
              >
                Book Now
              </Buttons>
            </div>
            <div className={classes.pic_div}>
              <img src={hunza} alt="kashi" className={classes.pic} />
            </div>
          </div>
          {/* Second Offer */}
          <div className={classes.nano}>
            <div className={classes.pic_div}>
              <img src={skardu} alt="kashi" className={classes.pic} />
            </div>
            <div className={classes.intro}>
              <h1 className={classes.offersMainH}>Skardu 30% OFF</h1>
              <h4>3 Days Tour to Skardu</h4>
              <p className={classes.offerP}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut aboris nisi ut aliquip ex ea
                commodo consequat. Lorem ipsum dolor sit amet, consectetur
                adipiscing elit, sed do eiusmod tempor incididunt ut aboris nisi
                ut aliquip ex ea commodo consequat.
              </p>
              <Buttons
                buttonSize="btn--medium"
                buttonStyle="btn--secondary--outlined"
                className={classes.bookingBtn}
                onClick={() => {
                  handleRoute("/offers/offer-booking");
                }}
              >
                Book Now
              </Buttons>
            </div>
          </div>
          {/* third Offer */}
          <div className={classes.kashi}>
            <div className={classes.intro}>
              <h1 className={classes.offersMainH}>Fairy Meadows 40% OFF</h1>
              <h4>7 Days Tour to Fairy Meadows</h4>
              <p className={classes.offerP}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut aboris nisi ut aliquip ex ea
                commodo consequat. Lorem ipsum dolor sit amet, consectetur
                adipiscing elit, sed do eiusmod tempor incididunt ut aboris nisi
                ut aliquip ex ea commodo consequat.
              </p>
              <Buttons
                buttonSize="btn--medium"
                buttonStyle="btn--secondary--outlined"
                className={classes.bookingBtn}
                onClick={() => {
                  handleRoute("/offers/offer-booking");
                }}
              >
                Book Now
              </Buttons>
            </div>
            <div className={classes.pic_div}>
              <img src={fairyMeadows} alt="kashi" className={classes.pic} />
            </div>
          </div>
          {/* fourth Offer */}
          <div className={classes.nano}>
            <div className={classes.pic_div}>
              <img src={nalter} alt="kashi" className={classes.pic} />
            </div>
            <div className={classes.intro}>
              <h1 className={classes.offersMainH}>Nalter 20% OFF</h1>
              <h4>2 days Tour to Naltar </h4>
              <p className={classes.offerP}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut aboris nisi ut aliquip ex ea
                commodo consequat. Lorem ipsum dolor sit amet, consectetur
                adipiscing elit, sed do eiusmod tempor incididunt ut aboris nisi
                ut aliquip ex ea commodo consequat.
              </p>
              <Buttons
                buttonSize="btn--medium"
                buttonStyle="btn--secondary--outlined"
                className={classes.bookingBtn}
                onClick={() => {
                  handleRoute("/offers/offer-booking");
                }}
              >
                Book Now
              </Buttons>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
const useStyles = makeStyles((theme) => ({
  container: {
    // backgroundColor: "#156663",
    color: "#FFFFFF",
  },
  offersMain: {
    width: "100%",
    backgroundColor: "#156663",
  },
  kashi: {
    display: "flex",
    justifyContent: "space-evenly",
    margin: 20,
    borderBottom: "1px solid #FFFFFF",

    paddingTop: "12px",
    [theme.breakpoints.down("sm")]: {
      flexDirection: "column",
    },
  },
  offersHeader: {
    borderTop: "1px solid #156663",
  },
  intro: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
  },
  pic: {
    width: 450,
    height: 450,
    borderRadius: 10,
    [theme.breakpoints.down("sm")]: {
      width: 300,
      height: 250,
    },
  },
  nano: {
    display: "flex",
    justifyContent: "space-evenly",
    margin: 20,
    borderBottom: "1px solid #FFFFFF",
    paddingTop: "12px",
    [theme.breakpoints.down("sm")]: {
      flexDirection: "column-reverse",
    },
  },
  // icons: {
  //   padding: 15,
  //   cursor: "pointer",
  //   "&:hover": {
  //     opacity: "0.7",
  //   },
  //   [theme.breakpoints.down("sm")]: {
  //     marginBottom: "10px",
  //   },
  // },
  // links: {
  //   margin: 10,
  // },
  offersMainH: {
    color: "#FFFFFF",
  },
  offerP: {
    width: "500px",
    margin: "0px",
    padding: "0px",
    [theme.breakpoints.down("md")]: {
      width: "auto",
      textAlign: "justify",
      paddingBottom: "12",
    },
  },
  bookingBtn: {
    marginTop: "12px",
  },
}));
export default SpecialOffers;
