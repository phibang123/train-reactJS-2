# redux trên hook
//useSelector là hook tương dương với hàm mapStateToProps
	// cách 1
	// const arrComment = useSelector(state => state.FakeBookReducer.arrComment)
	// cách 2
	//bóc tác phần tử
    const { arrComment } = useSelector((state) => state.FakeBookReducer);
# axios trên hook
` cài [npm i axios] `
` Api là hàm bất đồng bộ vì nó phải trả về back-end để sử lý nên nên hàm phía sau không đợi nó và chạy trước nó `
` để biến hàm Api, setState hoặc những hàm bất dồng bộ khác trở nên dồng bộ hãy sử dụng async () => {}`
` qua đó chúng ta không cần `then get` trong axios vì nó cũng giống await nó đơi sử lý xong rồi mới then get nhứng await thì phải đợi nó chạy xong thằng nào chạy cũng đc ko cần thêm then get`
` vậy bắt lỗi thì sao, chúng ta dùng `try get` chỉ cần 1 cái lỗi ben trong hàm try xãy ra nó sẻ chạy hàm catch`
# chi tiết ở trong AxiosDemo/AxiosDemoRCC
## nhược điểm: khi lâý api từ nhiều nguồn thì dử liệu load lên rất là lâu và khi ấy không cần dùng async vì nó ko cần phải đợi quay lại cách củ
## ưu điê: thích hợp cho Api tuần tự xảy ra

## tổng hợp buổi học gồn có useSelector, dispatch import, cách gọi Api và componentdidmout 