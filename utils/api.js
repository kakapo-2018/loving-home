import request from 'superagent'
import { setAllNews } from '../actions';


const baseURL = 'http://192.168.1.25:3000/api'

export function getAllCharities (cb) {
    request
        .get(baseURL + '/charities/all')
        .end((err, res) => {
            cb(err, res.body)
        })
}

export function getUserCharities (userId, cb) {
    request
        .get(baseURL + '/users/' + userId + '/charities')
        .end((err, res) => {
            cb(err, res.body)
        })
}

export function updateUserCharities (userId, newCharities, cb) {
    request
        .post(baseURL + '/users/' + userId + '/charities')
        .send(newCharities)
        .end((err, res) => {
            cb(err, res.body)
        })
}

export function getUserAnimals (userId, cb) {
    request
        .get(baseURL + '/users/' + userId + '/animals')
        .end((err, res) => {
            cb(err, res.body)
        })
}

export function updateUserAnimals (userId, newAnimals, cb) {
    request
        .post(baseURL + '/users/' + userId + '/animals')
        .send(newAnimals)
        .end((err, res) => {
            cb(err, res.body)
        })
}

export function getUserInventory (userId, cb) {
    request
        .get(baseURL + '/users/' + userId + '/inventory')
        .end((err, res) => {
            cb(err, res.body)
        })
}

export function updateUserInventory (userId, newInventory, cb) {
    request
        .post(baseURL + '/users/' + userId + '/inventory')
        .send(newInventory)
        .end((err, res) => {
            cb(err, res.body)
        })
}

export function getAnimalInventory (animalId, cb) {
    request
        .get(baseURL + '/animals/' + animalId + '/inventory')
        .end((err, res) => {
            cb(err, res.body)
        })
}

export function updateAnimalInventory (animalId, newInventory, cb) {
    request
        .post(baseURL + '/animals/' + animalId + '/inventory')
        .send(JSON.stringify(newInventory))
        .end((err, res) => {
            cb(err, res.body)
        })
}

// export function getNews (cb) {
//     console.log("BING")
//     request
//         .get(baseURL + '/news')
//         .end((err, res) => {
//             cb(err, res.body)
//         })
// }

export function getEvents (cb) {
    
    request
        .get(baseURL + '/events')
        .end((err, res) => {
            cb(err, res.body)
        })
}



export function getStoreInventory (cb) {
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