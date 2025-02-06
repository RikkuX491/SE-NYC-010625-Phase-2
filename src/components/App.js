import Header from "./Header";
import PetList from "./PetList";
import { useState, useEffect } from "react";
import NewPetForm from "./NewPetForm";

// Deliverable # 13 solution code
import NavBar from "./NavBar";
import { Outlet } from "react-router-dom";

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

    function updatePet(updatedPetData){
        setPets(pets.map(pet => {
            if(pet.id === updatedPetData.id){
                return updatedPetData
            }
            else{
                return pet
            }
        }))
    }

    // Deliverable # 14 solution code
    return (
      <div className="app">
        <NavBar/>
        <Header/>
        <Outlet context={
            {
                pets: pets,
                addPet: addPet,
                updatePet: updatePet,
                deletePet: deletePet
            }
        }/>
      </div>
    );
}

export default App;