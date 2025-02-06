import Header from "./Header";
import PetList from "./PetList";
import { useState, useEffect } from "react";
import NewPetForm from "./NewPetForm";

function App(){

    const [pets, setPets] = useState([]);

    useEffect(() => {
        fetch('http://localhost:4000/pets')
        .then(response => response.json())
        .then(petsData => setPets(petsData))
    }, []);

    function deletePet(id){
        setPets(pets.filter(pet => {
            return pet.id !== id
        }))
    }

    function addPet(newPet){
        setPets([...pets, newPet])
    }

    function updatePet(id, petDataForUpdate){
        fetch(`http://localhost:4000/pets/${id}`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            body: JSON.stringify(petDataForUpdate)
        })
        .then(response => response.json())
        .then(updatedPet => setPets(pets => pets.map(pet => {
            if(updatedPet.id === pet.id){
                return updatedPet
            }
            else{
                return pet
            }
        })))
    }

    return (
      <div className="app">
        <Header/>
        <NewPetForm addPet={addPet}/>
        <PetList pets={pets}/>
      </div>
    );
}

export default App;