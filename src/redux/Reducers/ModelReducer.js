import React from 'react'

const stateDefault = {
    Component: <p>Default</p>,  //ney61 truyền dạng function thừ chử cái đầu tiên viết hoa
    handleSumit: () =>   //khi bạn truyền 1 component nó cũng sẻ có  button 
    {
        alert('Default')
    }
}

export const ModelReducer = (state = stateDefault, action) =>
{
    switch (action.type)
    {
        case 'OPEN_LOGIN': {
            state.Component = action.Component
            state.handleSubmit = action.handleSubmit
            return {...state}
        }
        default: return {...state}        
    }

}