import React, { useState } from "react";

const initialFormValues = {
  img: "",
  title: "",
  date: "",
  location: "",
  description: "",
};

const NewPotluck = ({ setDisplayPotlucks, displayPotlucks }) => {
  const [formValues, setFormValues] = useState(initialFormValues);

  const handleChanges = (e) => {
    e.preventDefault();
    setFormValues({
      ...formValues,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("this works cool");
    setFormValues(initialFormValues);
    setDisplayPotlucks(!displayPotlucks);
  };

  console.log(formValues);
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

export default NewPotluck;
