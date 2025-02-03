import { v4 as uuid } from "uuid";
import { useState } from "react";

function NewPetForm({addPet}) {

  const [formData, setFormData] = useState({
    name: "",
    image: "",
    animal_type: ""
  })

  function updateFormData(event){
    setFormData({...formData, [event.target.name]: event.target.value})
  }

  function handleSubmit(event){
    event.preventDefault()

    // Deliverable # 2 solution code
    const newPet = {
      ...formData,
      likes: 0
    }

    // Deliverable # 3 solution code
    fetch("http://localhost:4000/pets", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      },
      body: JSON.stringify(newPet)
    })
    .then(response => {
      if(response.ok){
        response.json().then(newPetData => addPet(newPetData))
      }
    })
    
    setFormData({
      name: "",
      image: "",
      animal_type: ""
    })
  }

  return (
    <div className="new-pet-form">
      <h2>New Pet</h2>
      <form onSubmit={handleSubmit}>
        <input onChange={updateFormData} type="text" name="name" placeholder="Pet name" value={formData.name} required/>
        <input onChange={updateFormData} type="text" name="image" placeholder="Image URL" value={formData.image} required/>
        <input onChange={updateFormData} type="text" name="animal_type" placeholder="Animal type" value={formData.animal_type} required/>
        <button type="submit">Add Pet</button>
      </form>
    </div>
  );
}
  
  export default NewPetForm;