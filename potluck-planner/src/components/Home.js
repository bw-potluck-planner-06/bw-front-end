import React, { useState } from "react";
import styled from "styled-components";
import NewPotluck from "./NewPotluck";
import PotluckList from "./PotluckList";
import "./Home.css"


const Home = () => {
  const [displayPotlucks, setDisplayPotlucks] = useState(true);

  const handleClick = () => {
    setDisplayPotlucks(!displayPotlucks);
  };

const Button = styled.button`
background-color: #97e092;
border-radius: 3px;
font-size: 30px;
`

  return (
    <div className="homeContainer">
      <Button onClick={handleClick}>
        {displayPotlucks ? "Organize New Potluck!" : "Show Current Potlucks"}
      </Button>
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
