// Deliverable # 13 solution code
import { dog, cat } from "../data/petsData"

// Deliverable # 7 solution code
function PetList(){
    return (
        <ul className="pet-list">
            {/* Deliverable # 14 - 16 solution code */}
            <li className="pet">
                <img src={dog.image} alt={dog.name}/>
                <h4>{dog.name}</h4>
            </li>
            <li className="pet">
                <img src={cat.image} alt={cat.name}/>
                <h4>{cat.name}</h4>
            </li>
        </ul>
    )
}

// Deliverable # 8 solution code
export default PetList;