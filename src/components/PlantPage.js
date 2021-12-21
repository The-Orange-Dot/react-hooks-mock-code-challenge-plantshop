import React, { useState } from "react";
import NewPlantForm from "./NewPlantForm";
import PlantList from "./PlantList";
import Search from "./Search";

function PlantPage() {
  const [search, setSearch] = useState("");

  const searchHandler = (event) => {
    setSearch(event.target.value);
  };
  return (
    <main>
      <NewPlantForm />
      <Search searchHandler={searchHandler} />
      <PlantList search={search} />
    </main>
  );
}

export default PlantPage;
