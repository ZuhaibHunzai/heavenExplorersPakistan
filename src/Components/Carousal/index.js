import React, { useState } from "react";
import ItemsCarousel from "react-items-carousel";
import form from "../../Assets/Images/form.jpg";
import gst from "../../Assets/Images/gst.jpg";
import legal from "../../Assets/Images/legal.jpg";
import society from "../../Assets/Images/society.jpg";
import useStyles from "./styles";

const Slider = () => {
  const classes = useStyles();
  const [activeItemIndex, setActiveItemIndex] = useState(0);
  const chevronWidth = 40;
  return (
    <div style={{ padding: "0px" }}>
      <ItemsCarousel
        requestToChangeActive={setActiveItemIndex}
        activeItemIndex={activeItemIndex}
        numberOfCards={1}
        gutter={20}
        leftChevron={<button className={classes.sliderBtnLeft}>{"<"}</button>}
        rightChevron={<button className={classes.sliderBtnRight}>{">"}</button>}
        chevronWidth={chevronWidth}
        infiniteLoop={true}
        enablePlaceholder={true}
      >
        <div className={classes.sliderMain}>
          <img src={society} alt="img" className={classes.sliderMain} />
        </div>
        <div className={classes.sliderMain}>
          <img src={form} alt="img" className={classes.sliderMain} />
        </div>
        <div className={classes.sliderMain}>
          <img src={gst} alt="img" className={classes.sliderMain} />
        </div>
        <div className={classes.sliderMain}>
          <img src={legal} alt="img" className={classes.sliderMain} />
        </div>
      </ItemsCarousel>
    </div>
  );
};

export default Slider;
