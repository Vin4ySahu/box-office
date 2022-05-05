import React from "react";

import { StyledActorCard } from "./ActorCardStyled";

const ActorCard = ({ name, country, birthday, deathday, image }) => {
  return (
    <StyledActorCard>
      <div className="img-wrapper">
        <div>
          <img src={image} alt="actor" />
        </div>
        <h1>{`Name: ${name}`}</h1>
        <p>{`Country: ${country}`}</p>
        <p>{`Birth Day: ${birthday}`} </p>
        <p>{`Death: ${deathday}`}</p>
      </div>
    </StyledActorCard>
  );
};
export default ActorCard;
