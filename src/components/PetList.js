// Deliverable # 7 solution code
import Pet from "./Pet";

// Deliverable # 2 solution code
function PetList({pets}){

    // Deliverable # 3 - 5 solution code
    const petComponents = pets.map(pet => {
        return <Pet key={pet.id} pet={pet}/>
    })

    return (
        <ul className="pet-list">{petComponents}</ul>
    );
}

export default PetList;