import React from "react";
import { connect } from "react-redux";
import { useParams } from "react-router-dom";

const SelectedPotluck = (props) => {
  const { id } = useParams();

  const handleClick = () => {
    props.history.push("/events");
  };

  return (
    <div className="selectedPotluck">
      <div className="selectedTextContent">
        <h1>{props.potlucks[id].title}</h1>
        <h3>{props.potlucks[id].date}</h3>
        <p>{props.potlucks[id].location}</p>
        <p>{props.potlucks[id].description}</p>
      </div>
      <button onClick={handleClick}>Go Back</button>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    potlucks: state.potlucks,
  };
};

export default connect(mapStateToProps)(SelectedPotluck);
