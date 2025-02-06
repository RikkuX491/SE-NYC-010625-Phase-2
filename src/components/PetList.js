import Pet from "./Pet";

import { useOutletContext } from "react-router-dom"

// Delete the pets prop from the PetList component
function PetList(){

    // console.log(useOutletContext())

    // Write the code to retrieve the pets stateful variable using useOutletContext()
    const { pets } = useOutletContext()

    const petComponents = pets.map(pet => {
        return <Pet key={pet.id} pet={pet}/>
    })

    return (
        <ul className="pet-list">{petComponents}</ul>
    );
}

export default PetList;