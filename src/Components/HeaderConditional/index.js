import { useEffect, useRef } from "react";
import ConAndHeader from "../ConAndHeader";
import Header from "../Header/Header";
import useStyles from "./styles";

const HeaderCon = () => {
  const classes = useStyles();
  const headerRef = useRef(null);
  useEffect(() => {
    const fn = () => {
      console.log({ headerRef });
      if (
        headerRef.current &&
        (document.body.scrollTop > 20 ||
          document.documentElement.scrollTop > 20)
      ) {
        headerRef.current.style.top = "0";
      } else {
        headerRef.current.style.top = "-100px";
      }
    };
    window.addEventListener("scroll", fn);

    return () => {
      window.removeEventListener("scroll", fn);
    };
  }, []);
  return (
    <div className={classes.headers}>
      <>
        <ConAndHeader />

        <Header ref={headerRef} />
      </>
    </div>
  );
};

export default HeaderCon;
