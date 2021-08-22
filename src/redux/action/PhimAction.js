import { TOKEN_CYBERSOFT } from "../../util/setting";
import axios from "axios";

//việc bạn truyền vào function và trả về 1 funxton Nó đc gọi là closure function


export const LayDanhSachPhimAction = (maNhom /* ='CP01'*/) => {
	return (
		dispatch2 /* đây là dispatch 2 truyền vào, sử dụng khi gởi qua nhiều sử lí api */
	) => {
		let promise = axios({
			url: `http://movienew.cybersoft.edu.vn/api/QuanLyPhim/LayDanhSachPhim?maNhom=${maNhom}`,
			method: "GET",
			headers: {
				TokenCybersoft: TOKEN_CYBERSOFT,
			},
		});

		promise.then((result) => {
			console.log("result", result.data);
			//lấy được thì dưa qua reducer
			dispatch2(
				/* dùng dispatch thứ 2 để gừi dử liệu api đi*/ {
					type: "LAY_DANH_SACH_PHIM",
					mangPhim: result.data.content,
				}
			);
		});
		promise.catch((error) => {
			console.log("error", error.reponse.data);
		});
	};
};
