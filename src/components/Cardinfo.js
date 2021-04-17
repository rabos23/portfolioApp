import React from "react";
import { animated, useSpring } from "react-spring";
function CardInfo(props) {
  const style = useSpring({ opacity: 1, from: { opacity: 0 } });
  return (
    <animated.div className="g-card-info" style={style}>
      <br />
      <p className="g-card-title">{props.title}</p>
      <p className="g-card-title">{props.subTitle}</p>
      <a href={props.link} target="_blank" rel="no opener noreferrernpm r">
        View
      </a>
    </animated.div>
  );
}

export default CardInfo;
