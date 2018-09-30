const initialState = {

    storeCarousel: {
        cosmetics: [
            {
                id: 1,
                name: "Raincoat",
                image: "raincoat.jpg",
                price: 2000
            }
        ],
        animals: [
            {
                id: 1,
                name: "Chippy",
                species: "Dog",
                disposition: "Sassy"
            }
        ]
    },
    activeStoreCarousel: "cosmetics",
    activeItem: {
        cosmetics: {
            id: 1
        }
    }

}


export const storeCarousel = (state = initialState, action) => {
    switch (action.type) {
        case 'UPDATE_ACTIVE_STORE_CAROUSEL':
            return { ...state, activeStoreCarousel: action.stores }
        default:
            return state
    }
}

export const activeItem = (state = initialState, action) => {
    switch (action.type) {
        case 'UPDATE_ACTIVE_ITEM':
            return { ...state, activeItem: { cosmetics: { id: action.items } } }
        default:
            return state
    }
}

