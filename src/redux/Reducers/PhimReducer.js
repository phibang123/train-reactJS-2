const initialState = {
    mangPhim: [

        {maPhim: 1,tenPhim:"Xmen",hinhAnh: 'https://picsum.photos/id/1/200/200',moTa:'phim hay'},
        {maPhim: 2,tenPhim:"End Game",hinhAnh: 'https://picsum.photos/id/3/200/200',moTa:'phim hay'}
    ]
}

export const  PhimReducer  = (state = initialState, action) => {
    switch (action.type) {

        case "LAY_DANH_SACH_PHIM": {
            state.mangPhim = action.mangPhim
            return {...state}
    }

    default:
        return state
    }
}
