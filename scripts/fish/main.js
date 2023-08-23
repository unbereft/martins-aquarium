import { getFish } from './database.js'
// Import the FishList function from the correct module
import { FishList } from './FishList.js'

const parentHTMLElement = document.querySelector(".fishDiv")


parentHTMLElement.innerHTML = FishList()

const allFish = getFish()

for (const fish of allFish) {
    console.log(fish)
}

// const careTips = {
//     waterSalinity:
//     waterTemp:
// }