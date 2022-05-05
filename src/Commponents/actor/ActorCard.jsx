import React from "react";

const ActorCard = ({ name, country, birthday, deathday, image }) => {
  return (
    <div>
      <div>
        <div>
          <img src={image} alt="actor" />
        </div>
        <h1>{`Name: ${name}`}</h1>
        <p>{`Country: ${country}`}</p>
        <p>{`Birth Day: ${birthday}`} </p>
        <p>{`Death: ${deathday}`}</p>
      </div>
    </div>
  );
};
export default ActorCard;
