import React, { useState } from "react";
import ItemsCarousel from "react-items-carousel";
import fairymeadows from "../../Assets/Images/fairymeadows.jpg";
import hunza from "../../Assets/Images/hunza.jpg";
import skardu from "../../Assets/Images/skardu.jpg";
import naltar from "../../Assets/Images/nalter.jpg";
import trek from "../../Assets/Images/trekking.jpg";
import hike from "../../Assets/Images/hike.jpg";
import useStyles from "./styles";

const Gallary = () => {
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
          <img src={fairymeadows} alt="img" className={classes.sliderMain} />
        </div>
        <div className={classes.sliderMain}>
          <img src={hunza} alt="img" className={classes.sliderMain} />
        </div>
        <div className={classes.sliderMain}>
          <img src={skardu} alt="img" className={classes.sliderMain} />
        </div>
        <div className={classes.sliderMain}>
          <img src={naltar} alt="img" className={classes.sliderMain} />
        </div>
        <div className={classes.sliderMain}>
          <img src={trek} alt="img" className={classes.sliderMain} />
        </div>
        <div className={classes.sliderMain}>
          <img src={hike} alt="img" className={classes.sliderMain} />
        </div>
      </ItemsCarousel>
    </div>
  );
};

export default Gallary;
