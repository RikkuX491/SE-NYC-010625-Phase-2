import Pet from "./Pet"

function PetList({pets}){

    // console.log(pets)

    const name = "Alice Baker"
    const age = 23

    const person = {
        name: name,
        age: age
    }

    console.log(person)

    const petLiElements = pets.map((pet, index) => {
        // console.log(index)
        // console.log(pet)
        return (
            <Pet key={pet.id} petProp={pet}/>
            // <li key={pet.id} className="pet">
            //     <img src={pet.image} alt={pet.name}/>
            //     <h4>{pet.name}</h4>
            // </li>
        )
    })

    // const {pets} = props
    // console.log(pets)

    // console.log(props)
    // console.log(props.pets)
    // console.log(props['greeting'])
    
    // props.pets.map(pet => {
    //     console.log(pet)
    // })

    return (
        <ul className="pet-list">{petLiElements}</ul>
    );
}

export default PetList;