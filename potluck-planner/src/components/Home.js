import React, { useState } from "react";

import NewPotluck from "./NewPotluck";
import PotluckList from "./PotluckList";

const Home = () => {
  const [displayPotlucks, setDisplayPotlucks] = useState(true);

  const handleClick = () => {
    // console.log("yo");
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

export default Home;
