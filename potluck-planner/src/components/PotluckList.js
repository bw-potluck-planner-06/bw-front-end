import PotluckCard from "./PotluckCard";
import React from "react";
import { connect } from "react-redux";
import { v4 as uuidv4 } from "uuid";

const PotluckList = (props) => {
  return (
    <div>
      {props.potlucks.map((obj) => {
        return <PotluckCard data={obj} key={uuidv4()} />;
      })}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    potlucks: state.potlucks,
  };
};

export default connect(mapStateToProps)(PotluckList);
