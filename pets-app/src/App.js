import logo from './logo.svg';
import './App.css';

import IceCreamShopHeader from "./components/IceCreamShopHeader"

// const iceCreamArray = [
//   {
//     title: "🍦 Ice Cream Shop # 1 🍦"
//   },
//   {
//     title: "🍦 Ice Cream Shop # 2 🍦"
//   },
//   {
//     title: "🍦 Ice Cream Shop # 3 🍦"
//   }
// ]

function App() {

  // const iceCreamComponents = iceCreamArray.map(iceCreamData => {
  //   return <IceCreamShopHeader/>
  // })

  return (
    <div className="App">
      <IceCreamShopHeader/>
      {/* {iceCreamComponents} */}
      {/* <IceCreamShopHeader/>
      <IceCreamShopHeader/> */}
      {/* <h1 id="greeting-text">hello</h1> */}
    </div>
  );
}

export default App;
