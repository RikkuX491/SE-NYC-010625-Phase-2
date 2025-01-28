import Header from "./Header";
import PetList from "./PetList";

import {pets} from "../data/petsData";

console.log(pets);

function App() {
  return (
    <div className="app">
        <Header/>

        {/* Deliverable # 1 solution code */}
        <PetList pets={pets}/>
    </div>
  );
}

export default App;