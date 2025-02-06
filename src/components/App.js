import Header from "./Header";
import PetList from "./PetList";
import { useState, useEffect } from "react";
import NewPetForm from "./NewPetForm";
import ErrorPage from "./ErrorPage";
import NavBar from "./NavBar";

import { Outlet } from "react-router-dom";

function App(){

    // window.location.pathname will show us the pathname that we're currently on
    // i.e.: If the href is "http://localhost:3000", such that the origin is "http://localhost:3000",
    // then the pathname is "/"
    // And if the href is "http://localhost:3000/hello", then the pathname is "/hello"
    // console.log(window.location.pathname)

    const [pets, setPets] = useState([]);

    // const [path, setPath] = useState(window.location.pathname)

    // let component = <ErrorPage/>

    // if(window.location.pathname === "/"){
    //     component = <PetList pets={pets}/>
    // }
    // else if(window.location.pathname === "/add_pet"){
    //     component = <NewPetForm addPet={addPet}/>
    // }

    useEffect(() => {
        fetch('http://localhost:4000/pets')
        .then(response => response.json())
        .then(petsData => setPets(petsData))
    }, []);

    function deletePet(id){
        fetch(`http://localhost:4000/pets/${id}`, {
            method: "DELETE"
        })
        .then(response => {
            if(response.ok){
                setPets((pets) => pets.filter(pet => {
                    return pet.id !== id
                }))
            }
            else{
                alert("Error: Unable to delete pet!")
            }
        })
    }

    function addPet(newPet){
        fetch('http://localhost:4000/pets', {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({...newPet, likes: 0})
        })
        .then(response => response.json())
        .then(newPetData => setPets([...pets, newPetData]))
    }

    function updatePet(id, petDataForUpdate){
        fetch(`http://localhost:4000/pets/${id}`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            body: JSON.stringify(petDataForUpdate)
        })
        .then(response => response.json())
        .then(updatedPet => setPets(pets => pets.map(pet => {
            if(updatedPet.id === pet.id){
                return updatedPet
            }
            else{
                return pet
            }
        })))
    }

    // function navigate(event){
    //     event.preventDefault()
    //     console.log(event.target.href)
    //     window.history.pushState(null, "", event.target.href)
    //     console.log(window.location.pathname)
    //     setPath(window.location.pathname)
    // }

    // const firstATagClass = (path === "/") ? "active" : ""
    // const secondATagClass = (path === "/add_pet") ? "active" : ""

    return (
      <div className="app">
        {/* <nav className="navbar">
            <a onClick={navigate} href="/" className={firstATagClass}>Home</a>
            <a onClick={navigate} href="/add_pet" className={secondATagClass}>Add Pet</a>
        </nav> */}
        <NavBar/>
        <Header/>
        <Outlet context={{
            pets: pets,
            addPet: addPet,
            updatePet: updatePet,
            deletePet: deletePet
        }} />
        {/* {component} */}
        {/* <NewPetForm addPet={addPet}/> */}
        {/* <PetList pets={pets}/> */}
      </div>
    );
}

export default App;