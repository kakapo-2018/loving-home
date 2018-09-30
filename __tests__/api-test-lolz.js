const api = require('../utils/api')

const userId = 1
const animalId = 1

api.getAllCharities(getAllCharitiesCB)

function getAllCharitiesCB (charities) {
    console.log("--------------")
    console.log("GET All Charities")
    console.log("Output: " + charities)
    console.log("--------------\n")
}