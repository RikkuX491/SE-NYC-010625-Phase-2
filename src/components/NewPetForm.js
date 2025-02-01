import { v4 as uuid } from "uuid";

import { useState } from "react";

// Deliverable # 5 solution code
function NewPetForm({addPet}) {

  // Deliverable # 1 solution code
  const [petName, setPetName] = useState("")
  const [petImage, setPetImage] = useState("")
  const [petAnimalType, setPetAnimalType] = useState("")

  // Deliverable # 2 solution code
  function updatePetName(event){
    setPetName(event.target.value)
  }
  function updatePetImage(event){
    setPetImage(event.target.value)
  }
  function updatePetAnimalType(event){
    setPetAnimalType(event.target.value)
  }

  // Deliverable # 3 solution code
  function handleSubmit(event){
    event.preventDefault()

    const newPet = {
      id: uuid(),
      name: petName,
      image: petImage,
      animal_type: petAnimalType,
      likes: 0
    }

    // Deliverable # 6 solution code
    addPet(newPet)
  }

  return (
    <div className="new-pet-form">
      <h2>New Pet</h2>

      {/* Deliverable # 3 solution code */}
      <form onSubmit={handleSubmit}>

        {/* Deliverable # 1 & 2 solution code */}
        <input onChange={updatePetName} type="text" name="name" placeholder="Pet name" value={petName} required/>
        <input onChange={updatePetImage} type="text" name="image" placeholder="Image URL" value={petImage} required/>
        <input onChange={updatePetAnimalType} type="text" name="animal_type" placeholder="Animal type" value={petAnimalType} required/>

        <button type="submit">Add Pet</button>
      </form>
    </div>
  );
}
  
export default NewPetForm;