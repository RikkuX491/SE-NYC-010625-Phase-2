import { useState, useEffect } from "react";

// Deliverable # 25 solution code
import { useParams, useOutletContext } from "react-router-dom";

function PetProfile(){

    // Deliverable # 26 solution code
    const { id } = useParams()

    // Deliverable # 27 solution code
    const { updatePet, deletePet } = useOutletContext()
    
    const [pet, setPet] = useState(null);
    const [displayAnimalType, setDisplayAnimalType] = useState(false);
    const [displayForm, setDisplayForm] = useState(false);
    const [formData, setFormData] = useState({
        name: "",
        image: "",
        animal_type: ""
    });

    // Deliverable # 28 solution code
    useEffect(() => {
        fetch(`http://localhost:4000/pets/${id}`)
        .then(response => {
            if(response.ok){
                response.json().then(petData => {
                    setPet(petData)
                    setFormData({
                        name: petData.name,
                        image: petData.image,
                        animal_type: petData.animal_type
                    })
                })
            }
        })
    }, []);

    function toggleDisplayAnimalType(){
        setDisplayAnimalType(displayAnimalType => !displayAnimalType)
    }

    function handleAdoptButtonClick(){
        fetch(`http://localhost:4000/pets/${pet.id}`, {
            method: "DELETE"
        })
        .then(response => {
            if(response.ok){
                deletePet(pet.id)
                setPet(null);
            }
            else{
                alert(`Error: Unable to delete Pet # ${pet.id}!`)
            }
        })
    }

    function toggleDisplayForm(){
        setDisplayForm(displayForm => !displayForm)
    }

    function handleSubmit(event){
        event.preventDefault();

        makePatchRequest(formData)

        toggleDisplayForm();
    }

    function updateFormData(event){
        setFormData({...formData, [event.target.name]: event.target.value})
    }

    function handleLikeButtonClick(){
        const updatedPetData = {
            likes: pet.likes + 1
        };

        makePatchRequest(updatedPetData)
    }

    function makePatchRequest(updatedPetData){
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
                    updatePet(updatedPetObject);
                    setPet(updatedPetObject);
                })
            }
            else{
                alert(`Error: Unable to update data for Pet # ${pet.id}!`)
            }
        })
    }

    return (
        <>
            {pet ?
            <div className="pet-profile">
                <img src={pet.image} alt={pet.name}/>
                <h4 onClick={toggleDisplayAnimalType} className={displayAnimalType ? "display-animal-type" : ""}>{displayAnimalType ? pet.animal_type : pet.name}</h4>
                { !displayForm ?
                <div className="button-div">
                    <button onClick={toggleDisplayForm} className="update-button">Update Pet</button>
                    <button onClick={handleLikeButtonClick} className="like-button">{pet.likes} Likes</button>
                    <br/>
                    <button onClick={handleAdoptButtonClick} className="adopt-button">Adopt</button>
                </div> :
                <form onSubmit={handleSubmit} className="edit-pet">
                    <input onChange={updateFormData} type="text" name="name" placeholder="Pet name" value={formData.name} />
                    <input onChange={updateFormData} type="text" name="image" placeholder="Image URL" value={formData.image} />
                    <input onChange={updateFormData} type="text" name="animal_type" placeholder="Animal type" value={formData.animal_type} />
                    <button type="submit">Save Changes</button>
                </form>
                }
            </div> :
            null
            }
        </>
    );
}

export default PetProfile;