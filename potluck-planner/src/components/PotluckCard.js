import React from "react";

const PotluckCard = ({ data }) => {
  return (
    <div className="potluckCard">
      <img src={data.img} alt="potluck" />
      <div className="potluckCardTextContent">
        <h4>{data.title}</h4>
        <p>
          <em>{data.date}</em>
        </p>
        <p>
          <b>{data.location}</b>
        </p>
        <p>{data.description}</p>
      </div>
      <button className="potluckBtn">Check It Out!</button>
    </div>
  );
};

export default PotluckCard;
