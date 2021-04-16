import React from "react";
import CardInfo from "../components/Cardinfo";
function Card(props) {
  return (
    <div className="d-inline-block" onClick={(e) => props.click(props.items)}>
      <img
        className="a-card-img"
        rounded
        fluid
        src={props.item.imgSrc}
        alt={props.item.imgSrc}
      />
      {props.item.selected && (
        <CardInfo
          title={props.item.title}
          subTitle={props.item.subTitle}
          link={props.item.link}
        />
      )}
    </div>
  );
}
export default Card;
