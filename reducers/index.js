import { combineReducers } from 'redux'

import animals from './animals'
import charities from './charities'
import news from './news'
import events from './events'
import { storeCarousel, activeItem } from './store'

export default combineReducers({
    animals,
    charities,
    news,
    events,
    storeCarousel,
    activeItem
})