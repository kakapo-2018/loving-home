
const baseURL = 'http://furever-home.herokuapp.com/api'
import request from 'superagent'

export const updateActivePet = (animalId) => {
    return {
        type: 'UPDATE_ACTIVE_PET',
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

export const setAllNews = (news) => {
    return {
        type: 'SET_ALL_NEWS',
        allNews: news
    }
}

export function fetchNews(){

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

export function fetchEvents(){

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

export function fetchCosmetics(){

    return dispatch => {
        return request.get(baseURL + '/animals') //this needs to be the cosmetics route
            .then(res => dispatch(setAllCosmetics(res.body)))
            .catch(err => {
                console.log("ERRROOOOOORRRR")
                console.log(err)
            })
    }
}

export const setAllCharities = charities => {
    return {
      type: "SET_ALL_CHARITIES",
      allCharities: charities
    };
  };
  
  export function fetchCharities() {
    return dispatch => {
      return request
        .get(baseURL + "/charities/all")
        .then(res => dispatch(setAllCharities(res.body)))
        .catch(err => {
          console.log("ERRROOOOOORRRR");
          console.log(err);
        });
    };
  }

// export const newsAPI = () =>{
//     return fetch('http://localhost:3000/api/news')
//         .then((res) => {
//             console.log('hello', res)
//             setAllNews(res.body)
//         })
//         .catch(err=>{
//             throw err
//         })
// }