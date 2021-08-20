import { ADD_COMMENT } from "../typed/FakeBookType"

const initialState = {
    arrComment: [
        { name: 'Bằng', comment: 'Ahihi', img: 'http://picsum.photos/id/1/200/200' },
        { name: 'Lợi',  comment: 'con cu',img:'http://picsum.photos/id/2/200/200'}
        ]
}

export const FakeBookReducer = (state = initialState, action) => {
    switch (action.type) {

        case ADD_COMMENT: {
            console.log('userComment',action)
            state.arrComment = [...state.arrComment, action.userComment]
            console.log('render',state.arrComment)
            return {...state}
    }

    default:
        return state
    }
}
