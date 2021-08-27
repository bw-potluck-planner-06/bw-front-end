import React from "react";
import styled from "styled-components";

const CheckItOut = styled.button`
  background-color: #97e092;
  border-radius: 3px;
  font-size: 20px;
`;

const PotluckCard = (props) => {
  const { data } = props;
  const handleClick = () => {
    props.push(`/events/${data.id}`);
  };

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
      <CheckItOut className="potluckBtn" onClick={handleClick}>
        Check It Out!
      </CheckItOut>
    </div>
  );
};

export default PotluckCard;
