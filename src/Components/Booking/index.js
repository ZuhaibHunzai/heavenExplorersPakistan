import useStyles from "./styles";
import emailjs from "emailjs-com";
import { Buttons } from "../Units/buttons";
import { ServicesHeader } from "../Units/servicesHeader";
import Location from "../Location";

const Booking = () => {
  const classes = useStyles();
  function sendEmail(e) {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_6xbujr4",
        "template_bksl5fb",
        e.target,
        "user_UvZFjzYS5adrlsF1J780Y"
      )
      .then(
        (result) => {
          console.log(result);
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  }

  return (
    <div className={classes.contactMain}>
      <div className={classes.contactHeader}>
        <ServicesHeader>Book Your trip</ServicesHeader>
      </div>
      <div>
        <form onSubmit={sendEmail} className={classes.contactFormMain}>
          <div className={classes.offerBookingInputs}>
            <div className={classes.allInputs}>
              <input
                type="text"
                name="subject"
                placeholder="Subject"
                className={classes.contactFormInput}
                required
              />
            </div>
            <div className={classes.allInputs}>
              <input
                type="text"
                name="name"
                placeholder="Your name"
                className={classes.contactFormInput}
                required
              />
            </div>
            <div className={classes.allInputs}>
              <input
                type="email"
                name="email"
                placeholder="Your email"
                className={classes.contactFormInput}
                required
              />
            </div>
          </div>
          <div className={classes.offersbookingTextandBtn}>
            <div className={classes.allInputs}>
              <textarea
                name="message"
                placeholder="Type your message"
                className={classes.contactFormText}
                required
              />
            </div>
            <div
              style={{
                display: "flex",
                justifyContent: "space-evenly",
              }}
            >
              <Buttons
                type="submit"
                buttonSize="btn--medium"
                buttonStyle="btn--primary--solid"
                value="Send"
              >
                Book Now
              </Buttons>
            </div>
          </div>
        </form>
      </div>
      <div className={classes.contactLocation}>
        <Location />
      </div>
    </div>
  );
};

export default Booking;
