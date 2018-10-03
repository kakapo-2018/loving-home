const initialState = {

    storeCarousel: [],
    activeStoreCarousel: "cosmetics",
    activeItem: {
        cosmetics: {
            id: 1
        }
    },
    currentCoins: 2000

}


const store = (state = initialState, action) => {
    switch (action.type) {
        case 'UPDATE_ACTIVE_STORE_CAROUSEL':
            return { ...state, activeStoreCarousel: action.stores }
        case 'UPDATE_ACTIVE_ITEM':
            return { ...state, activeItem: { cosmetics: { id: action.items } } }
        case 'SET_ALL_COSMETICS':
            return { ...state, storeCarousel: { ...state, cosmetics: [...action.allCosmetics] } }
        case 'SPEND_MONEY':
            return { ...state, currentCoins: state.currentCoins - action.price }
        default:
            return state
    }
}

export default store



