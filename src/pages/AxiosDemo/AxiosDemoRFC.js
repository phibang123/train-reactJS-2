import React, { useEffect, useState } from "react";

import { TOKEN_CYBERSOFT } from "../../util/setting";
import axios from "axios";

export default function AxiosDemoRFC() {
	const [mangPhim, setMangPhim] = useState([]);

	useEffect(() => {
		let promise = axios({
			url: "http://movienew.cybersoft.edu.vn/api/QuanLyPhim/LayDanhSachPhim?maNhom=GP01",
			method: "GET",
			headers: {
				TokenCybersoft: TOKEN_CYBERSOFT,
			},
		});

		promise.then((result) => {
			console.log("result", result.data);
			//sau khi gọi api thành công
			//lấy dử liệu api gán vào state
			setMangPhim(result.data.content);
		});
		promise.catch((error) => {
			console.log("error", error.reponse.data);
		});
	}, [] /*chỉ chạy 1 lần duy nhất */);

	const renderPhim = () => {
		return mangPhim.map((phim, index) => {
			return (
				<div className="col-4" key={index}>
					<div className="card">
						<img src={phim.hinhAnh} height={300}></img>
						<div className="card-body">
							<h3>{phim.tenPhim}</h3>
							<p>{phim.moTa}</p>
						</div>
					</div>
				</div>
			);
		});
	};
	return (
		<div className="container">
			<button className="btn btn-primary" onClick={() => {}}>
				lấy danh sách phim
			</button>
			<h3 className="text-center">Danh sách phim</h3>
			<div className="row">{renderPhim()}</div>
		</div>
	);
}
