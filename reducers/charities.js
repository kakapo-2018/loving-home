const initialState = {
    charities: [
        {
            id: 1,
            charityName: "Puppies Motel",
            mission: "Just get it done",
            websiteURL: "www.totes-puppies.com",
            logo: "puppies-motel.jpg",
            donationPercent: 40
        }
    ],
    activeCharities: [
        {
            id: 1
        }
    ]
}

const charities = (state = initialState, action) => {
    switch (action.type) {
        case 'UPDATE_ACTIVE_CHARITY':
            return { ...state, activeCharities: [...state.activeCharities, { id: action.charity }] }
        default:
            return state
    }
}

export default charities