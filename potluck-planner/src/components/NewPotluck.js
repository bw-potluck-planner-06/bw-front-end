import React, { useState } from "react";

import { addPotluck } from "../actions";
import { connect } from "react-redux";
import { v4 as uuidv4 } from "uuid";

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
      id: uuidv4(),
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addPotluck(formValues);
    setFormValues(initialFormState);
    setDisplayPotlucks(!displayPotlucks);
  };

  return (
    <div>
      <label>
        New Potluck
        <form onSubmit={handleSubmit} className="potluckForm">
          <label>
            TITLE:
            <input
              name="title"
              type="text"
              value={formValues.title}
              onChange={handleChanges}
            />
          </label>
          <label>
            IMAGE:
            <input
              name="img"
              type="text"
              value={formValues.img}
              onChange={handleChanges}
            />
          </label>
          <label>
            DATE:
            <input
              name="date"
              type="text"
              value={formValues.date}
              onChange={handleChanges}
            />
          </label>
          <label>
            LOCATION:
            <input
              name="location"
              type="text"
              value={formValues.location}
              onChange={handleChanges}
            />
          </label>
          <label>
            DESCRIPTION:
            <input
              name="description"
              type="text"
              value={formValues.description}
              onChange={handleChanges}
            />
          </label>
          <button type="submit">Submit</button>
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
