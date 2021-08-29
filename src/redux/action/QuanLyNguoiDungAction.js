import { ACCESS_TOKEN, TOKEN_CYBERSOFT, USER_LOGIN } from "../../util/setting";

import axios from "axios";

export const dangKyAsynAction = (thongTinNguoiDung) =>
{
    // console.log({ thongTinNguoiDung })
    // return;
    return async (dispatch) =>
    {
        try
        {
            //asynce await dùng khi nhừng api sử dựng từng tự
            //promise sẻ dùng những api 
            const result = await axios({
                url: `http://movienew.cybersoft.edu.vn/api/QuanLyNguoiDung/DangKy`,
                method: 'POST',
                data: thongTinNguoiDung,
                headers: {
                    'ToKenCybersoft': TOKEN_CYBERSOFT
                }
            })
        } catch (error)
        {
            console.log({error})
        }
        console.log(Object)
        //     promise.then(result =>
        //     {
        //         console.log({result})
        //         //chuyển hướng thành công   
        //     })
        //     promise.catch(error =>
        //     {     
        //         console.log(error.response?.data)
        //         console.log({error})
        //      })
    }
}

export const danhNhapAction = (thongTinDangNhap, history) =>
{
    return async (dispatch, getState) =>
    {
        try
        {
            const result = await axios({
                url: `http://movienew.cybersoft.edu.vn/api/QuanLyNguoiDung/DangNhap`,
                method: 'POST',
                data:thongTinDangNhap,
                headers: {
                    'ToKenCybersoft': TOKEN_CYBERSOFT
                }
            })


            //lưu vào localStory thông tin đăng nhập
            localStorage.setItem(ACCESS_TOKEN, result.data.content.accessToken);

            const sUserLogin = JSON.stringify(result.data.content);

            localStorage.setItem(USER_LOGIN, sUserLogin);
            //sao khi lưu vào store đưa dử liệu lên redux
            dispatch({
                type: 'LOGIN',
                userLogin: result.data.content
            })
            
            console.log('Result',result)
        } catch (error)
        {
            
            console.log({ error })
            alert('Mật khẩu không đúng')
        }
    }
}