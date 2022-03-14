import useStyles from "./styles";
import emailjs from "emailjs-com";
import { Buttons } from "../Units/buttons";
import { ServicesHeader } from "../Units/servicesHeader";
import Location from "../Location";

const Contact = () => {
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
        <ServicesHeader>Contact Us</ServicesHeader>
      </div>
      <div>
        <form onSubmit={sendEmail} className={classes.contactFormMain}>
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
          <div className={classes.allInputs}>
            <textarea
              name="message"
              placeholder="Type your message"
              className={classes.contactFormText}
              required
            />
          </div>
          <Buttons
            style={{ marginTop: "12px" }}
            type="submit"
            buttonSize="btn--medium"
            buttonStyle="btn--primary--solid"
            value="Send"
          >
            Send Message
          </Buttons>
        </form>
      </div>
      <div className={classes.contactLocation}>
        <Location />
      </div>
    </div>
  );
};

export default Contact;
