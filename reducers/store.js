const initialState = {

    storeCarousel: {
        cosmetics: [
            {
                id: 1,
                name: "Raincoat",
                image: "/assets/images/cat.png",
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
    },
    currentCoins: 1000

}


const store = (state = initialState, action) => {
    switch (action.type) {
        case 'UPDATE_ACTIVE_STORE_CAROUSEL':
            return { ...state, activeStoreCarousel: action.stores }
        case 'UPDATE_ACTIVE_ITEM':
            return { ...state, activeItem: { cosmetics: { id: action.items } } }   
        case 'SET_ALL_COSMETICS':
            return {...state, storeCarousel: {...state, cosmetics: [...action.allCosmetics]}}
        default:
            return state
    }
}

export default store



