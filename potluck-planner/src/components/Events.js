import React, { useState } from "react";

import NewPotluck from "./NewPotluck";
import PotluckList from "./PotluckList";
import styled from "styled-components";

const Events = (props) => {
  const [displayPotlucks, setDisplayPotlucks] = useState(true);

  const handleClick = () => {
    setDisplayPotlucks(!displayPotlucks);
  };

  const Button = styled.button`
    background-color: #e5e5e5;
    border-radius: 0.5em;
    font-size: 1.3rem;
    color: #14213d;
    margin: 2rem 0 1rem;
    padding: 1rem 3rem;
    border: 2px solid #14213d;
    transition: background 200ms ease-in, color 200ms ease-in;
  `;

  return (
    <div className="events">
      <Button onClick={handleClick}>
        {displayPotlucks ? "Organize New Potluck!" : "Show Current Potlucks"}
      </Button>
      <div>
        {displayPotlucks ? (
          <PotluckList push={props.history.push} />
        ) : (
          <NewPotluck
            setDisplayPotlucks={setDisplayPotlucks}
            displayPotlucks={displayPotlucks}
          />
        )}
      </div>
    </div>
  );
};

export default Events;
