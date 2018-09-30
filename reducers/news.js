const initialState = {
    NewsCarousel: [
        {
            id: 1,
            organisation: "Dog Motel",
            headline: "2 cute 4 skool",
            content: "pretty self extraplanetory",
            image: "subwoofer.png"
        }
    ],
    ActiveNews: {
        id: 1
    }
}


const news = (state = initialState, action) => {
    switch (action.type) {
        case 'UPDATE_ACTIVE_NEWS':
            return { ...state, ActiveNews: { id: action.news } }
        default:
            return state
    }
}

export default news