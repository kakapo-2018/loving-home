const initialState = {
    EventsCarousel: [],
    ActiveEvent: {
        id: 1
    }
}


const events = (state = initialState, action) => {
    switch (action.type) {
        case 'UPDATE_ACTIVE_EVENTS':
            return { ...state, ActiveEvent: { id: action.events } }
        case 'SET_ALL_EVENTS':
            return {...state, EventsCarousel: [...action.allEvents]}
        default:
            return state
    }
}

export default events