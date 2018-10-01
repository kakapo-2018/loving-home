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
    }

}


const store = (state = initialState, action) => {
    switch (action.type) {
        case 'UPDATE_ACTIVE_STORE_CAROUSEL':
            return { ...state, activeStoreCarousel: action.stores }
        case 'UPDATE_ACTIVE_ITEM':
            return { ...state, activeItem: { cosmetics: { id: action.items } } }   
        default:
            return state
    }
}

export default store



