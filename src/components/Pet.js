import { useState } from "react";

function Pet({pet}){

    // Deliverable # 1 solution code
    const [count, setCount] = useState(0);

    // Deliverable # 4 solution code
    const [displayAnimalType, setDisplayAnimalType] = useState(false);

    return (
        <li className="pet">
            <img src={pet.image} alt={pet.name}/>

            {/* Deliverable # 5 & 6 solution code */}
            <h4 onClick={() => setDisplayAnimalType(!displayAnimalType)} className={displayAnimalType ? "display-animal-type" : ""}>{displayAnimalType ? pet.animal_type : pet.name}</h4>

            {/* Deliverable # 2 & 3 solution code */}
            <button onClick={() => setCount(count + 1)} className="like-button">{count} Likes</button>
        </li>
    );
}

export default Pet;