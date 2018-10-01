// import api from '../utils/api.js'
// import { bindActionCreators } from '../../../../../AppData/Local/Microsoft/TypeScript/3.0/node_modules/redux/index.js';

const initialState = {
    NewsCarousel: [{id:'1', headline: 'not Working'}],
    ActiveNews: {
        id: 1
    }
}




const news = (state = initialState, action) => {
    switch (action.type) {
        case 'UPDATE_ACTIVE_NEWS':
            return { ...state, ActiveNews: { id: action.news } }
        case 'SET_ALL_NEWS':
            return {...state, NewsCarousel: [...action.allNews]}
        default:
            return state
    }
}

export default news