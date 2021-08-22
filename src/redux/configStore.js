import {applyMiddleware, combineReducers, createStore} from 'redux'

import { FakeBookReducer } from './Reducers/FakeBookReducer'
import { PhimReducer } from './Reducers/PhimReducer'
import thunk from "redux-thunk"

// import mà không có default thì phải thêm hai dấu ngoặc


// cấu hình middleWare (dể có thể dispatch redux 1 action của function)





const rootReducer = combineReducers({
    FakeBookReducer,
    PhimReducer
})

export const store = createStore(rootReducer,applyMiddleware(thunk))