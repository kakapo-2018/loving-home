const initialState = {
    EventsCarousel: [
        {
            id: 1,
            organisation: "Alpaca Petting Society",
            headline: "National Petting Day!",
            content: "So soft",
            image: "woolfriend.png",
            location: "Wellington",
            dateAndTime: 1538021034314
        }
    ],
    ActiveEvent: {
        id: 1
    }
}


const events = (state = initialState, action) => {
    switch (action.type) {
        case 'UPDATE_ACTIVE_EVENTS':
            return { ...state, ActiveEvent: { id: action.events } }
        default:
            return state
    }
}

export default events