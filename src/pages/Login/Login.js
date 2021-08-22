import React, { useState } from 'react'

import { Prompt } from 'react-router-dom';

export default function Login(props)
{
    const [state, setState] = useState({isSaveForm:true, taiKhoan: '', matKhau: '' })
    
    const handleChangeIput = (event) =>
    {
        let { value, name } = event.target;
        setState({
            ...state,
            [name]:value
        },console.log('aaa',state))
    }
    const handleSubmit = (event) =>
    {
        event.preventDefault()
        if (state.taiKhoan === 'CyberSoft')
        {
            // props.history.push('/home'/*truyền vào nó sẻ chạy vào patch */)

            props.history.replace('/home') //thay đổi trang hiệ tại thành trang có patch tương tự
        }
        else
        {
            alert('Tài khoản mật khẩu không đúng ')
        }
    }
    return (
        <form className='container' onSubmit={handleSubmit}>
            <h3 className="">Login</h3>
            <div className='form-group'>
                <p>Tài Khoản</p>
                <input className='form-control' name="taiKhoan" onChange={handleChangeIput}></input>
            </div>
            <div className='form-group'>
                <p>Mật Khẩu</p>
                <input className='form-control' name="matKhau" type="password" onChange={handleChangeIput}></input>
            </div>
            <div className='form-group'>
                <button type='submit' className='btn btn-outline-primary' >Đăng nhập</button>
                <button type='button' onClick={() => {
                    props.history.goBack()
                }}>Go Back</button>
            </div>
            <Prompt when={state.isSaveForm} message={(location) =>
            {
                return 'bạn có chắc muôn rời khỏi  trang'
            }}></Prompt>
        </form>
    )
}
