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

const newAnimals = [
    {
        userId: 1,
        animalId: 4
    }
]

// api.getAllCharities(getAllCharitiesCB)
// api.getUserCharities(userId, getUserCharitiesCB)
// api.updateUserCharities(userId, newCharities, updateUserCharitiesCB)

// api.getNews(getNewsCB)
// api.getEvents(getEventsCB)

// api.getStoreInventory(getStoreInventoryCB)

api.getUserAnimals(userId, getUserAnimalsCB)
api.updateUserAnimals(userId, newAnimals, updateUserAnimalsCB)

function getAllCharitiesCB(err, charities) {
    console.log("\n--------------")
    console.log("GET All Charities")
    if (charities) {
        console.log("Output: " + charities[0]["charityName"])
    } else {
        console.log("Output: " + "it broked")
    }
    console.log("--------------")
}

function getUserCharitiesCB(err, charities) {
    console.log("\n--------------")
    console.log("GET User Charities")
    if (charities) {
        charities.forEach(charity => {
            console.log("Output: " + charity["charityName"])
        });
    } else {
        console.log("Output: " + "it broked")
    }
    console.log("--------------")
}

function updateUserCharitiesCB(err, charities) {
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

function getNewsCB(err, news) {
    console.log("\n--------------")
    console.log("GET News")
    if (news) {
        news.forEach(newsItem => {
            console.log("Output: " + newsItem["headline"])
        });
    } else {
        console.log("Output: " + "it broked")
    }
    console.log("--------------")
}

function getEventsCB(err, events) {
    console.log("\n--------------")
    console.log("GET Events")
    if (events) {
        events.forEach(event => {
            console.log("Output: " + event["headline"])
        });
    } else {
        console.log("Output: " + "it broked")
    }
    console.log("--------------")
}

function getStoreInventoryCB(err, inventory) {
    console.log("\n--------------")
    console.log("GET Store Inventory")
    if (inventory) {
        console.log(inventory)
        Object.keys(inventory).forEach(category => {
            console.log("Output: " + category)
        })
        // inventory.forEach(category => {
        //     console.log("Output: " + item["headline"])
        // });
    } else {
        console.log("Output: " + "it broked")
    }
    console.log("--------------")
}

function getUserAnimalsCB(err, animals) {
    console.log("\n--------------")
    console.log("GET User Animals")
    if (animals) {
        animals.forEach(animal => {
            console.log(`Output: ${animal.name} is a ${animal.disposition} ${animal.species}`)
        })
    } else {
        console.log("Output: " + "it broked")
    }
    console.log("--------------")
}

function updateUserAnimalsCB(err, animals) {
    console.log("\n--------------")
    console.log("POST User Animals")
    if (animals) {
        animals.forEach(animal => {
            console.log(`Output: ${animal.name} is a ${animal.disposition} ${animal.species}`)
        })
    } else {
        console.log("Output: " + "it broked")
    }
    console.log("--------------")
}
function getUserInventoryCB(err, inventory) {

}
function updateUserInventoryCB(err, inventory) {

}
function getAnimalInventoryCB(err, inventory) {

}
function updateAnimalInventoryCB(err, inventory) {

}

/*
getStoreInventory
*/