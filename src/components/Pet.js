import { useState } from "react";

function Pet({pet, deletePet, updatePet}){

    const [displayAnimalType, setDisplayAnimalType] = useState(false)

    // Deliverable # 2 solution code
    const [displayForm, setDisplayForm] = useState(false)

    // Deliverable # 4 solution code
    const [formData, setFormData] = useState({
        name: pet.name,
        image: pet.image,
        animal_type: pet.animal_type
    })

    function toggleDisplayAnimalType(){
        setDisplayAnimalType(!displayAnimalType)
    }

    // Deliverable # 1 solution code
    function handleLikeButtonClick(){
        const updatedPetData = {
            likes: pet.likes + 1
        }

        fetch(`http://localhost:4000/pets/${pet.id}`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            body: JSON.stringify(updatedPetData)
        })
        .then(response => {
            if(response.ok){
                response.json().then(updatedPetObject => {
                    updatePet(updatedPetObject)
                })
            }
        })
    }

    // Deliverable # 5 solution code
    function handleAdoptButtonClick(){
        fetch(`http://localhost:4000/pets/${pet.id}`, {
            method: "DELETE"
        })
        .then(response => {
            if(response.ok){
                deletePet(pet.id)
            }
        })
    }

    function toggleDisplayForm(){
        setDisplayForm(!displayForm)
    }

    // Deliverable # 3 & 4 solution code
    function handleSubmit(event){
        event.preventDefault()

        fetch(`http://localhost:4000/pets/${pet.id}`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            body: JSON.stringify(formData)
        })
        .then(response => {
            if(response.ok){
                response.json().then(updatedPetObject => {
                    updatePet(updatedPetObject)
                })
            }
        })

        toggleDisplayForm()
    }

    // Deliverable # 4 solution code
    function updateFormData(event){
        setFormData({...formData, [event.target.name]: event.target.value})
    }

    return (
        <li className="pet">
            <img src={pet.image} alt={pet.name}/>
            <h4 onClick={toggleDisplayAnimalType} className={displayAnimalType ? "display-animal-type" : ""}>{displayAnimalType ? pet.animal_type : pet.name}</h4>

            {/* Deliverable # 2 & 3 solution code */}
            { displayForm ?
            <form onSubmit={handleSubmit} className="edit-pet">

                {/* Deliverable # 4 solution code */}
                <input onChange={updateFormData} type="text" name="name" placeholder="Pet name" value={formData.name} />
                <input onChange={updateFormData} type="text" name="image" placeholder="Image URL" value={formData.image} />
                <input onChange={updateFormData} type="text" name="animal_type" placeholder="Animal type" value={formData.animal_type} />

                <button type="submit">Save Changes</button>
            </form>
            :
            <div className="button-div">

                {/* Deliverable # 3 solution code */}
                <button onClick={toggleDisplayForm} className="update-button">Update Pet</button>

                <button onClick={handleLikeButtonClick} className="like-button">{pet.likes} Likes</button>
                <br/>
                <button onClick={handleAdoptButtonClick} className="adopt-button">Adopt</button>
            </div>
            }
        </li>
    );
}

export default Pet;