// The Pet component expects to receive a prop named "pet" whose value should be an object.
function Pet({petProp, ham}){
    // console.log(ham)
    return (
        <li key={petProp.id} className="pet">
            <img src={petProp.image} alt={petProp.name}/>
            <h4>{petProp.name}</h4>
        </li>
    )
}

export default Pet;