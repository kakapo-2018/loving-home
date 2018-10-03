import { combineReducers } from 'redux'

import animals from './animals'
import charities from './charities'
import news from './news'
import events from './events'
import store from './store'
import user from './user'

export default combineReducers({
    animals,
    charities,
    news,
    events,
    store,
    user
})