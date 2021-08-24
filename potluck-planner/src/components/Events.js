import React, { useState } from "react";

import NewPotluck from "./NewPotluck";
import PotluckList from "./PotluckList";

const Events = () => {
  const [displayPotlucks, setDisplayPotlucks] = useState(true);

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
          <PotluckList />
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
