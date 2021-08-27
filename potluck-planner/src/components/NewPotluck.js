import "./Login.css";

import React, { useState } from "react";

import ButtonLogin from "./Button";
import { addPotluck } from "../actions";
import { connect } from "react-redux";

const initialFormState = {
  id: "",
  img: "",
  title: "",
  date: "",
  location: "",
  description: "",
};

const NewPotluck = ({
  setDisplayPotlucks,
  displayPotlucks,
  addPotluck,
  potlucks,
}) => {
  const [formValues, setFormValues] = useState(initialFormState);

  const handleChanges = (e) => {
    e.preventDefault();
    setFormValues({
      ...formValues,
      [e.target.name]: e.target.value,
      id: potlucks.length,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addPotluck(formValues);
    setFormValues(initialFormState);
    setDisplayPotlucks(!displayPotlucks);
  };

  return (
    <div className="loginSection">
      <label>
        <form onSubmit={handleSubmit} className="form">
          New Potluck
          <input
            name="title"
            type="text"
            value={formValues.title}
            onChange={handleChanges}
            placeholder="TITLE"
          />
          <input
            name="img"
            type="text"
            value={formValues.img}
            onChange={handleChanges}
            placeholder="IMAGE"
          />
          <input
            name="date"
            type="text"
            value={formValues.date}
            onChange={handleChanges}
            placeholder="DATE"
          />
          <input
            name="location"
            type="text"
            value={formValues.location}
            onChange={handleChanges}
            placeholder="LOCATION"
          />
          <input
            name="description"
            type="text"
            value={formValues.description}
            onChange={handleChanges}
            placeholder="DESCRIPTION"
          />
          <button type="submit" class="button">
            Submit
          </button>
        </form>
      </label>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    potlucks: state.potlucks,
  };
};

export default connect(mapStateToProps, { addPotluck })(NewPotluck);
