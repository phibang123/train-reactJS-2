import React,{useState} from "react";
import { connect, useDispatch, useSelector } from "react-redux";

import { ADD_COMMENT } from "../../../redux/typed/FakeBookType";
import { addCommentAction } from "../../../redux/action/FakeBookAction";

export default function ReduxHookDemo(props)
{
    // nên viế hook ngay trên đầu không nên viết hook ở dưới hàm
    const [userComment, setUserComment] = useState({
        name: '',
        comment: ''
    })
    //useSelector giống với this.props.dispatch bên rcc
    const dispatch = useDispatch();
    
	//useSelector là hook tương dương với hàm mapStateToProps
	// cách 1
	// const arrComment = useSelector(state => state.FakeBookReducer.arrComment)
	// cách 2
	//bóc tác phần tử
	const { arrComment } = useSelector((state) => state.FakeBookReducer);


    const handleChangeInput = (event) =>
    {
        let { value, name } = event.target;
        //cách 1
        // const newUserComment = { ...userComment }
        // newUserComment[name] = value
        // setUserComment(newUserComment)

        //cách 2
        setUserComment({
            //lưu ý trong hook không thể chèn giá trị mới vào vì nó chỉ được 1 giá trị duy nhất
            //chúng ta phải sa chép lại thuộc tính củ của hàm state và truyền lại vào
            ...userComment,
            [name]: value
        })
    }
     /*lưu ý */
    // const hocSinh = { hoten: 'abc', nam: 1999 }
    // hocSinh.nam = 20000,
    // hocSinh['nam'] = 2001,
    // hocSinh = {hoTen: 'abc',nam: 1922, nam: 1922},


    
	//redner

	const renderComment = () => {
		return arrComment.map((comment, index) => {
			return (
				<div className="row" key={index}>
					<div className="col-1">
						<img src={comment.img} className="w-100"></img>
					</div>
					<div className="col-10">
						<h3 className="text-danger">{comment.name}</h3>
						<p>{comment.comment}</p>
					</div>
				</div>
			);
		});
	};
    const handleSubmit = (event) =>
    {
        //chặn sự kiện sutmit browser
       
        event.preventDefault()
        console.log("alo")
        // const action = {
        //     type: ADD_COMMENT,
        //     userComment: {...userComment,img: `https://i.pravatar.cc/50?u=${userComment.name}`}
        // }
        const action = addCommentAction(userComment)
        dispatch(action)
        
    }

	return (
		<div className="container">
			<h3>Fake Book</h3>
			<div className="card">
				<div className="card-header">{renderComment()}</div>
				<form className="card-body" onSubmit={handleSubmit} >
					<div className="from-group">
						<p>Name</p>
						<input className="form-control" name="name" onChange={handleChangeInput}></input>
					</div>
					<div className="from-group">
						<p>content</p>
						<input className="form-control" name="comment" onChange={handleChangeInput}></input>
					</div>
					<div className="from-group">
						<button className="btn btn-outline-success m-2" type="submit">Send</button>
					</div>
				</form>
			</div>
		</div>
	);
}

// cách 1
// const mapStateToProps = (state) =>
// ({
//     arrComment :  state.FakeBookReducer.arrComment
// })

// export default connect(mapStateToProps)(ReduxHookDemo)
