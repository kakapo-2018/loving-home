const request = require('superagent')

const baseURL = 'localhost:3000/api'

function getAllCharities (cb) {
    request
        .get(baseURL + '/charities/all')
        .end((err, res) => {
            cb(err, res.body)
        })
}

function getUserCharities (userId, cb) {
    request
        .get(baseURL + '/users/' + userId + '/charities')
        .end((err, res) => {
            cb(err, res.body)
        })
}

function updateUserCharities (userId, newCharities, cb) {
    request
        .post(baseURL + '/users/' + userId + '/charities')
        .send(newCharities)
        .end((err, res) => {
            cb(err, res.body)
        })
}

function getUserAnimals (userId, cb) {
    request
        .get(baseURL + '/users/' + userId + '/animals')
        .end((err, res) => {
            cb(err, res.body)
        })
}

function updateUserAnimals (userId, newAnimals, cb) {
    request
        .post(baseURL + '/users/' + userId + '/animals')
        .send(newAnimals)
        .end((err, res) => {
            cb(err, res.body)
        })
}

function getUserInventory (userId, cb) {
    request
        .get(baseURL + '/users/' + userId + '/inventory')
        .end((err, res) => {
            cb(err, res.body)
        })
}

function updateUserInventory (userId, newInventory, cb) {
    request
        .post(baseURL + '/users/' + userId + '/inventory')
        .send(newInventory)
        .end((err, res) => {
            cb(err, res.body)
        })
}

function getAnimalInventory (animalId, cb) {
    request
        .get(baseURL + '/animals/' + animalId + '/inventory')
        .end((err, res) => {
            cb(err, res.body)
        })
}

function updateAnimalInventory (animalId, newInventory, cb) {
    request
        .post(baseURL + '/animals/' + animalId + '/inventory')
        .send(newInventory)
        .end((err, res) => {
            cb(err, res.body)
        })
}

function getNews (cb) {
    request
        .get(baseURL + '/news')
        .end((err, res) => {
            cb(err, res.body)
        })
}

function getEvents (cb) {
    request
        .get(baseURL + '/events')
        .end((err, res) => {
            cb(err, res.body)
        })
}

function getStoreInventory (cb) {
    request
        .get(baseURL + '/store/inventory')
        .end((err, res) => {
            cb(err, res.body)
        })
}

//------

// Example API consumption function

// api.getAnimalByParam ('panda', myFunc)

// let myFunc = (e, stuff) => {
//   this.setState({
//     animals: stuff
//   })
// }

//------

module.exports = {
    getAllCharities,
    getUserCharities,
    updateUserCharities,
    getUserAnimals,
    updateUserAnimals,
    getUserInventory,
    updateUserInventory,
    getAnimalInventory,
    updateAnimalInventory,
    getNews,
    getEvents,
    getStoreInventory
}