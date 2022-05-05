import React from "react";
import ActorCard from "./ActorCard";
import IMAGE_NOT_FOUND from "../../Image/not-found.png";

const ActorGrid = ({ data }) => {
  return (
    <div>
      {data.map(({ person }) => (
        <ActorCard
          key={person.id}
          name={person.name}
          country={person.country ? person.country.name : "Unknown"}
          birthday={person.birthday ? person.birthday : "Unknown"}
          deathday={person.deathday ? person.deathday : "Unknown"}
          image={person.image ? person.image.medium : IMAGE_NOT_FOUND}
        />
      ))}
    </div>
  );
};

export default ActorGrid;
