import React, { useState } from "react";

function NewPlantForm() {
  const [newPlant, setnewPlant] = useState({
    id: "",
    name: "",
    image: "",
    price: "",
  });

  const postNewPlant = (event) => {
    event.preventDefault();
    fetch("http://localhost:3000/plants", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newPlant),
    });
  };

  const handleChange = (event) => {
    console.log(event.target.value);
    setnewPlant({
      ...newPlant,
      [event.target.name]: event.target.value,
    });
  };

  return (
    <div className="new-plant-form">
      <h2>New Plant</h2>
      <form onSubmit={postNewPlant}>
        <input
          type="text"
          name="name"
          placeholder="Plant name"
          onChange={handleChange}
        />
        <input
          type="text"
          name="image"
          placeholder="Image URL"
          onChange={handleChange}
        />
        <input
          type="number"
          name="price"
          step="0.01"
          placeholder="Price"
          onChange={handleChange}
        />
        <button type="submit">Add Plant</button>
      </form>
    </div>
  );
}

export default NewPlantForm;
