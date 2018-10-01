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