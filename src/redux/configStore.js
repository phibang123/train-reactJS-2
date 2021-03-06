import {applyMiddleware, combineReducers, createStore} from 'redux'

import { FakeBookReducer } from './Reducers/FakeBookReducer'
import { ModelReducer } from './Reducers/ModelReducer'
import { PhimReducer } from './Reducers/PhimReducer'
import {QuanLyNguoiDungReducer} from './Reducers/QuanLyNguoiDungReducer'
import thunk from "redux-thunk"

// import mà không có default thì phải thêm hai dấu ngoặc


// cấu hình middleWare (dể có thể dispatch redux 1 action của function)





const rootReducer = combineReducers({
    FakeBookReducer,
    PhimReducer,
    ModelReducer,
    QuanLyNguoiDungReducer
})

export const store = createStore(rootReducer,applyMiddleware(thunk))