// import iceCreamData from "../data/iceCreamData";
// console.log(iceCreamData)

import { iceCreamHeaderClassName, titleText, descriptionText } from "../data/iceCreamData"

// console.log(iceCreamHeaderClassName)
// console.log(titleText)
// console.log(descriptionText)

function IceCreamShopHeader(){

    // const iceCreamHeaderClassName = "ice-cream-header"
    // const titleText = "🍦 Ice Cream Shop 🍦"
    // const descriptionText = "Welcome to the best ice cream shop in the world!"

    return (
      <div className={iceCreamHeaderClassName}>
        <h1>{titleText}</h1>
        <h2>Hello {descriptionText} Goodbye</h2>
      </div>
    )
}

export default IceCreamShopHeader;