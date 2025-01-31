import { v4 as uuid } from "uuid";

import { useState } from "react";

function NewPetForm({addPet}) {
  // console.log(addPet)

  // const [name, setName] = useState("")
  // const [image, setImage] = useState("")
  // const [animal_type, setAnimal_type] = useState("")

  const [formData, setFormData] = useState({
    name: "",
    image: "",
    animal_type: ""
  })
  // console.log(formData)

  function handleSubmit(event){
    event.preventDefault()

    const newPet = {
      id: uuid(),
      ...formData,
      likes: 0
    }

    // const newPet = {
    //   id: uuid(),
    //   name: formData.name,
    //   image: formData.image,
    //   animal_type: formData.animal_type,
    //   likes: 0
    // }

    // console.log(newPet)

    addPet(newPet)

    // console.log(uuid())
  }

  // function updateName(event){
  //   setName(event.target.value)
    
  //   console.log({
  //     [event.target.name]: event.target.value
  //   })
  // }

  // function updateImage(event){
  //   setImage(event.target.value)
    
  //   console.log({
  //     [event.target.name]: event.target.value
  //   })
  // }

  // function updateAnimalType(event){
  //   setAnimal_type(event.target.value)
    
  //   console.log({
  //     [event.target.name]: event.target.value
  //   })
  // }

  function updateFormData(event){
    setFormData({
      ...formData,
      [event.target.name]: event.target.value
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