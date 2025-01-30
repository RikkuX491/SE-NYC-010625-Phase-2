import { useState } from "react";

// Deliverable # 5 & 10 solution code
function Pet({pet, deletePet, updatePet}){

    const [displayAnimalType, setDisplayAnimalType] = useState(false)

    function toggleDisplayAnimalType(){
        setDisplayAnimalType(!displayAnimalType)
    }

    // Deliverable # 6 solution code
    function handleAdoptButtonClick(){
        deletePet(pet.id)
    }

    // Deliverable # 11 solution code
    function handleLikeButtonClick(){
        const updatedPetData = {
            ...pet,
            likes: pet.likes + 1
        }
        updatePet(updatedPetData)
    }

    return (
        <li className="pet">
            <img src={pet.image} alt={pet.name}/>
            <h4 onClick={toggleDisplayAnimalType} className={displayAnimalType ? "display-animal-type" : ""}>{displayAnimalType ? pet.animal_type : pet.name}</h4>

            {/* Deliverable # 8 & 12 solution code */}
            <button onClick={handleLikeButtonClick} className="like-button">{pet.likes} Likes</button>

            {/* Deliverable # 7 solution code */}
            <button onClick={handleAdoptButtonClick} className="adopt-button">Adopt</button>
        </li>
    );
}

export default Pet;