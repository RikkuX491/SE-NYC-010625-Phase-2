import { useState } from 'react';

function Pet({pet}){

    // let numberOfLikes = 0

    // console.log(useState(0))
    // console.log(useState(0)[0])
    // console.log(useState(0)[1])

    // const useStateReturnedArray = useState('hello')
    // const statefulVariable = useStateReturnedArray[0]
    // const setterFunction = useStateReturnedArray[1]
    // console.log(statefulVariable)
    // console.log(setterFunction)

    const [numberOfLikes, setNumberOfLikes] = useState(0)
    const [displayName, setDisplayName] = useState(true)
    // console.log(`Pet # ${pet.id} number of likes: ${numberOfLikes}`)
    // console.log('<Pet> rendered!')

    // let phrase = "hello"

    function increaseNumberOfLikes(){
        setNumberOfLikes(numberOfLikes + 1)
    }

    // function handleClick(){
    //     phrase += "flatiron"
    //     console.log(phrase)
    // }

    // console.log(pet)

    function toggleDisplayName(){
        // console.log(!displayName)
        // setDisplayName(!displayName)
        setDisplayName(displayName => !displayName)
        console.log(displayName)
    }

    return (
        <li className="pet">
            <img src={pet.image} alt={pet.name}/>
            <h4 onClick={toggleDisplayName} className={displayName ? "" : "display-animal-type"}>{displayName ? pet.name : pet.animal_type}</h4>
            <button onClick={increaseNumberOfLikes} className="like-button">{numberOfLikes} Likes</button>
            {/* <h4 onClick={handleClick}>Test element</h4> */}
        </li>
    );
}

export default Pet;