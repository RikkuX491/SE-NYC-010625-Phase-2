import PetList from "./PetList";
import Search from "./Search";

import pets from "../data/pets";

import { useState } from "react";

console.log(pets)

function PetPage(){

    const [searchText, setSearchText] = useState("")
    const [petsState, setPetsState] = useState(pets)

    const filteredPets = petsState.filter(pet => {
        return pet.name.toUpperCase().includes(searchText.toUpperCase())
    })

    function deletePet(id){
        const updatedArray = petsState.filter(pet => {
            return pet.id !== id
        })
        setPetsState(updatedArray)
    }

    function updatePet(updatedPetData){
        // console.log(updatedPetData)
        // console.log("New number of likes: " + updatedPetData.likes)
        // console.log("Pet's id: " + updatedPetData.id)

        const updatedArray = petsState.map(pet => {
            if(pet.id === updatedPetData.id){
                return updatedPetData
            }
            return pet
        })

        setPetsState(updatedArray)
        
    }

    function updateSearchText(event){
        setSearchText(event.target.value)
    }

    return (
        <main>
            <Search updateSearchText={updateSearchText}/>
            <PetList pets={filteredPets} deletePet={deletePet} updatePet={updatePet}/>
        </main>
    );
}

export default PetPage;