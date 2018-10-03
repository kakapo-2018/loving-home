
const baseURL = 'http://furever-home.herokuapp.com/api'
import request from 'superagent'

export const updateActiveAnimal = (animalId) => {
    return {
        type: 'UPDATE_ACTIVE_ANIMAL',
        animal: animalId
    }
}

export const updateActiveCharities = (charityId) => {
    return {
        type: 'UPDATE_ACTIVE_CHARITY',
        charities: charityId
    }
}

export const updateNews = (newsId) => {
    return {
        type: 'UPDATE_ACTIVE_NEWS',
        news: newsId
    }
}

export const updateEvent = (eventId) => {
    return {
        type: 'UPDATE_ACTIVE_EVENTS',
        events: eventId
    }
}

export const updateActiveStoreCarousel = (store) => {
    return {
        type: 'UPDATE_ACTIVE_STORE_CAROUSEL',
        stores: store
    }
}

export const updateActiveItem = (item) => {
    return {
        type: 'UPDATE_ACTIVE_ITEM',
        items: item
    }
}

export const setAllAnimals = (animals) => {
    return {
        type: 'SET_ALL_ANIMALS',
        allAnimals: animals
    }
}

export const setLoading = (bool) => {
    return {
        type: 'SET_LOADING',
        loading: bool
    }
}

export function fetchAnimals(cb) {

    return dispatch => {
        return request.get(baseURL + '/users/1/animals')
            .then(res => {
                dispatch(setAllAnimals(res.body))
                let allAnimals = res.body
                allAnimals.forEach(animal => {
                    dispatch(fetchAnimalInventory(animal.animalId))
                })
            })
            .catch(err => {
                console.log("ERRROOOOOORRRR")
                console.log(err)
            })
    }
}

export const setUserInventory = (inventory) => {
    return {
        type: 'SET_USER_INVENTORY',
        inventory: inventory
    }
}

export function fetchUserInventory() {
    return dispatch => {
        return request.get(baseURL + '/users/1/inventory')
            .then(res => {
                dispatch(setUserInventory(res.body))
            })
            .catch(err => {
                console.log("ERRROOOOOORRRR")
                console.log(err)
            })
    }
}

export const setAllNews = (news) => {
    return {
        type: 'SET_ALL_NEWS',
        allNews: news
    }
}

export function fetchNews() {

    return dispatch => {
        return request.get(baseURL + '/news')
            .then(res => dispatch(setAllNews(res.body)))
            .catch(err => {
                console.log("ERRROOOOOORRRR")
                console.log(err)
            })
    }
}

export const setAllEvents = (events) => {
    return {
        type: 'SET_ALL_EVENTS',
        allEvents: events
    }
}

export function fetchEvents() {

    return dispatch => {
        return request.get(baseURL + '/events')
            .then(res => dispatch(setAllEvents(res.body)))
            .catch(err => {
                console.log("ERRROOOOOORRRR")
                console.log(err)
            })
    }
}

export const setAllCosmetics = (cosmetics) => {
    return {
        type: 'SET_ALL_COSMETICS',
        allCosmetics: cosmetics
    }
}

export function fetchCosmetics() {

    return dispatch => {
        return request.get(baseURL + '/animals') //this needs to be the cosmetics route
            .then(res => dispatch(setAllCosmetics(res.body)))
            .catch(err => {
                console.log("ERRROOOOOORRRR")
                console.log(err)
            })
    }
}

export const setAnimalInventory = (inventory, animalId) => {
    //console.log(`action: new inventory of animal #${animalId} is ${JSON.stringify(inventory)}`)

    return {
        type: 'SET_ANIMAL_INVENTORY',
        animal: animalId,
        inventory: inventory
    }
}

export function fetchAnimalInventory(animalId) {
    return dispatch => {
        return request
            .get(baseURL + '/animals/' + animalId + '/inventory')
            .then(res => dispatch(setAnimalInventory(res.body, animalId)))
            .catch(err => {
                console.log("ERRROOOOOORRRR")
                console.log(err)
            })
    }
}