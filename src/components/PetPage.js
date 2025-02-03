import PetList from "./PetList";
import { useState, useEffect } from "react";
import Search from './Search';
import NewPetForm from "./NewPetForm";

function PetPage(){

    const [pets, setPets] = useState([])
    const [searchText, setSearchText] = useState("")

    // console.log('Before useEffect code...')

    useEffect(() => {
        // console.log('Executing side effect function code')

        fetch("http://localhost:4000/pets")
        .then(response => {
            if(response.ok){
                response.json().then(petsData => setPets(petsData))
            }
            else{
                alert("Error: Unable to retrieve pets data!")
            }
        })

        // setPets([{
        //     id: 1,
        //     name: "Fido",
        //     image: "/images/dog.jpeg",
        //     animal_type: "Dog",
        //     likes: 5
        // }])
    }, [])

    // No dependency array example
    // useEffect(() => {
    //     console.log('The side effect function was called!')
    // })

    // Empty dependency array example
    // useEffect(() => {
    //     console.log('The side effect function was called!')
    // }, [])

    // Dependency array with searchText state example
    // useEffect(() => {
    //     console.log('The side effect function was called!')
    // }, [searchText])

    // console.log('After useEffect code...')

    const filteredPets = pets.filter(pet => {
        return pet.name.toUpperCase().includes(searchText.toUpperCase())
    })

    function updateSearchText(event){
        setSearchText(event.target.value)
    }

    function deletePet(id){
        setPets(pets.filter(pet => {
            return pet.id !== id
        }))
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

    function addPet(newPet){
        setPets([...pets, newPet])
    }

    return (
        <main>
            <NewPetForm addPet={addPet}/>
            <Search updateSearchText={updateSearchText} searchText={searchText}/>
            <PetList pets={filteredPets} deletePet={deletePet} updatePet={updatePet}/>
        </main>
    );
}

export default PetPage;