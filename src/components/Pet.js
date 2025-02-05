import { useState } from "react";

function Pet({pet, deletePet, updatePet}){

    const [displayAnimalType, setDisplayAnimalType] = useState(false)
    
    const [displayForm, setDisplayForm] = useState(false)

    const [formData, setFormData] = useState({
        name: pet.name,
        image: pet.image,
        animal_type: pet.animal_type
    })

    function toggleDisplayAnimalType(){
        setDisplayAnimalType(!displayAnimalType)
    }

    function handleLikeButtonClick(){
        const updatedPetData = {
            likes: pet.likes + 1
        }

        // console.log(pet.id)

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
                response.json().then(updatedPetObject => updatePet(updatedPetObject))
            }
            else{
                alert(`Error: Unable to increase number of likes for Pet # ${pet.id}!`)
            }
        })

        // updatePet(updatedPetData)
    }

    function handleAdoptButtonClick(){
        fetch(`http://localhost:4000/pets/${pet.id}`, {
            method: "DELETE"
        })
        .then(response => {
            if(response.ok){
                deletePet(pet.id)
            }
            else{
                alert(`Error: Unable to delete Pet # ${pet.id}!`)
            }
        })
    }

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
                response.json().then(updatedPetData => updatePet(updatedPetData))
            }
            else{
                alert(`Error: Unable to update data for Pet # ${pet.id}!`)
            }
        })

        // const updatedPetData = {
        //     id: pet.id,
        //     ...formData,
        //     likes: pet.likes
        // }

        // console.log(updatedPetData)
        
        // updatePet(updatedPetData)

        setDisplayForm(false)
    }

    function updateFormData(event){
        // console.log(event.target.name)
        setFormData({...formData, [event.target.name]: event.target.value})
    }

    return (
        <li className="pet">
            <img src={pet.image} alt={pet.name}/>
            <h4 onClick={toggleDisplayAnimalType} className={displayAnimalType ? "display-animal-type" : ""}>{displayAnimalType ? pet.animal_type : pet.name}</h4>
            { displayForm ?
            <form onSubmit={handleSubmit} className="edit-pet">
                <input onChange={updateFormData} type="text" name="name" placeholder="Pet name" value={formData.name} />
                <input onChange={updateFormData} type="text" name="image" placeholder="Image URL" value={formData.image} />
                <input onChange={updateFormData} type="text" name="animal_type" placeholder="Animal type" value={formData.animal_type} />
                <button type="submit">Save Changes</button>
            </form>
            :
            <div className="button-div">
                <button onClick={() => setDisplayForm(true)} className="update-button">Update Pet</button>
                <button onClick={handleLikeButtonClick} className="like-button">{pet.likes} Likes</button>
                <br/>
                <button onClick={handleAdoptButtonClick} className="adopt-button">Adopt</button>
            </div>
            }
        </li>
    );
}

export default Pet;