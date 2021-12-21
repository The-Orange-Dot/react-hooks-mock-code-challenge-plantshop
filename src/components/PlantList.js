import React, { useState, useEffect } from "react";
import PlantCard from "./PlantCard";

function PlantList({ search }) {
  const [plants, setPlants] = useState([]);
  const API = "http://localhost:3000/plants";

  useEffect(() => {
    fetch(API)
      .then((r) => r.json())
      .then((plants) => setPlants(plants));
  }, []);

  const filteredSearch = plants.filter((plant) => {
    return plant.name.toLowerCase().includes(search.toLowerCase());
  });

  return (
    <ul className="cards">
      {filteredSearch.map((plant) => {
        return (
          <PlantCard
            name={plant.name}
            image={plant.image}
            price={plant.price}
            id={plant.id}
          />
        );
      })}
    </ul>
  );
}

export default PlantList;
