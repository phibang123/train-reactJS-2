import React, { useEffect } from "react";

import { LayDanhSachPhimAction } from "../../redux/action/PhimAction";
import { TOKEN_CYBERSOFT } from "../../util/setting";
import axios from "axios";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";

export default function ApiMiddleWare(props)
{
    console.log('props' ,props)
	const { mangPhim } = useSelector((state) => state.PhimReducer);

	const dispatch = useDispatch();

	useEffect(() => {
		//có 2 loại action trong redux
		//loại 1: {type: 'TYPE_NAME' , data: ''}
		//loại 2: action function
        const action = LayDanhSachPhimAction('GP02')
		//trong trường hợp này action là function thì reudex sẻ đợi function thực thi xong => mới gửi dử liệu đi
		dispatch(action);
	},[]);

	const renderPhim = () => {
		return mangPhim.map((phim, index) => {
			return (
				<div className="col-4" key="index">
					<div className="card">
						<img src={phim.hinhAnh} className="mw-100"></img>
						<div className="card-body">
							<p>{phim.tenPhim}</p>
							<p>{phim.moTa}</p>
						</div>
					</div>
				</div>
			);
		});
	};
	return (
		<div className="container">
			<h3 className="text-center">Danh Sách Phim</h3>
			<div className="row">{renderPhim()}</div>
		</div>
	);
}

// const dispatch = useDispatch();
// useEffect(() => {

//có 2 loại action trong redux
//loại 1: {type: 'TYPE_NAME' , data: ''}
//loại 2: action function

// let promise = axios({
//     url: "http://movienew.cybersoft.edu.vn/api/QuanLyPhim/LayDanhSachPhim?maNhom=GP01",
//     method: "GET",
//     headers: {
//         TokenCybersoft: TOKEN_CYBERSOFT,
//     },
// });

// promise.then((result) => {
//     console.log("result", result.data);
//     //lấy được thì dưa qua reducer
//     dispatch({
//         type: "LAY_DANH_SACH_PHIM",
//         mangPhim: result.data.content
//     })
// });
// promise.catch((error) => {
//     console.log("error", error.reponse.data);
// });

// },[])
