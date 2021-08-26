import React, { useState } from "react";

import NewPotluck from "./NewPotluck";
import PotluckList from "./PotluckList";

const Events = (props) => {
  const [displayPotlucks, setDisplayPotlucks] = useState(true);
  console.log(props);

  const handleClick = () => {
    setDisplayPotlucks(!displayPotlucks);
  };

  return (
    <div className="homeContainer">
      <button onClick={handleClick}>
        {displayPotlucks ? "Organize New Potluck!" : "Show Current Potlucks"}
      </button>
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
