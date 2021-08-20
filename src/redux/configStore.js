import {combineReducers, createStore} from 'redux'

import { FakeBookReducer } from './Reducers/FakeBookReducer'

// import mà không có default thì phải thêm hai dấu ngoặc

const rootReducer = combineReducers({
    FakeBookReducer 
})

export const store = createStore(rootReducer)