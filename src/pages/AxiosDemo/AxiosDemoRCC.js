import React, { Component } from "react";

import { TOKEN_CYBERSOFT } from "../../util/setting";
import axios from "axios";

export default class AxiosDemoRCC extends Component {
	constructor(props) {
		super(props);
		this.state = {
			mangPhim: [],
		};
	}
    //hàm sử lí sự kiện click để call api
	
	getApi = async () =>
	{
		try
		{
			const result = await axios({
				url: "http://movienew.cybersoft.edu.vn/api/QuanLyPhim/LayDanhSachPhim?maNhom=GP01",
				method: "GET",
				headers: {
					TokenCybersoft: TOKEN_CYBERSOFT,
				}
			})

			await this.setState({
				mangPhim: result.data.content
			})

			console.log('result', result.data.content)

			console.log("alo alo trần dần")
		} catch (error)
		{
			console.log("lỗi")
		}
		
	}

    renderPhim = () =>
    {
        
		return this.state.mangPhim.map((phim, index) => {
			return (
				<div className="col-4" key={index}>
					<div className="card">
						<img src={phim.hinhAnh} height={300}></img>
                        <div className='card-body'>
                            <h3>{phim.tenPhim}</h3>
                            <p>{phim.moTa}</p>
                        </div>
					</div>
				</div>
			);
		});
	};
	render() {
		return (
			<div className="container">
				<button
					className="btn btn-primary"
					onClick={() => {
						this.getApi();
					}}
				>
					lấy danh sách phim
				</button>
				<h3 className="text-center">Danh sách phim</h3>
				<div className="row">{this.renderPhim()}</div>
			</div>
		);
    }
    //componentDidMount chạy sau khi render
    componentDidMount()
    {
        this.getApi()
	}
	// getApi = async () =>
	// {
	// 	let promise = axios({
	// 		url: "http://movienew.cybersoft.edu.vn/api/QuanLyPhim/LayDanhSachPhim?maNhom=GP01",
	// 		method: "GET",
	// 		headers: {
	// 			TokenCybersoft: TOKEN_CYBERSOFT,
	// 		},
	// 	});

	// 	promise.then((result) => {
	// 		console.log("result", result.data);
	// 		//sau khi gọi api thành công
	// 		//lấy dử liệu api gán vào state
	// 		this.setState({
	// 			mangPhim: result.data.content,
	// 		});
	// 	});
	// 	promise.catch((error) => {
	// 		console.log("error", error.reponse.data);
	// 	});
	// }
}
