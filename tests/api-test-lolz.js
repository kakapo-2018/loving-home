const api = require('../utils/api-oldskool')

const userId = 1
const animalId = 1

const newCharities = [
    {
        charityId: 1,
        donationPercent: 50
    },
    {
        charityId: 2,
        donationPercent: 30
    }
]

// api.getAllCharities(getAllCharitiesCB)
// api.getUserCharities(userId, getUserCharitiesCB)
api.updateUserCharities(userId, newCharities, updateUserCharitiesCB)

// function getAllCharitiesCB (err, charities) {
//     console.log("\n--------------")
//     console.log("GET All Charities")
//     if (charities) {
//         console.log("Output: " + charities[0]["charityName"])
//     } else {
//         console.log("Output: " + "it broked")
//     }
//     console.log("--------------")
// }

// function getUserCharitiesCB (err, charities) {
//     console.log("\n--------------")
//     console.log("GET User Charities")
//     if (charities) {
//         console.log(charities)
//         console.log("Output: " + charities[0]["charityName"])
//     } else {
//         console.log("Output: " + "it broked")
//     }
//     console.log("--------------")
// }

function updateUserCharitiesCB (err, charities) {
    console.log("\n--------------")
    console.log("POST User Charities")
    if (charities) {
        //console.log("Output: " + JSON.stringify(charities))
        charities.forEach(charity => {
            console.log("Output: " + charity["charityName"] + ' ' + charity["donationPercent"])
        });
    } else {
        console.log("Output: " + "it broked")
    }
    console.log("--------------")
}