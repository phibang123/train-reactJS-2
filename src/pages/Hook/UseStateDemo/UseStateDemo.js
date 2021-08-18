import React, { useState } from "react";

export default function UseStateDemo(props) {
	// Cách 1 ưu tiên tao ra một cái state khác không cần phải gộp chung giống cách 2
	const [like, setLike] = useState(1); //vì đây state không phải objeckt nên không cần khai báo objeckt

	// Cách 2
	const [state, setState] = useState({ like: 1 }); // kết quả trả về mảng có hai phần tử [pt1 pt2]

	/*
    this.state = {
        like: 1
    }
    
    */
    const [imgCar, setImgCar] = useState('black')
    // const ChangeColor = (color) =>
    // {
    //     setImgCar(`./img/CarBasic/Products/${ color }-car.jpg`);
    // }


	return (
		<div className="container">
			<h3>Demo UseState</h3>
			<div className="card w-25">
				<img src="https://picsum.photos/200/200" className="w-100 " style={{maxWidth:'100'}}></img>
				<div className="card-body">
					<h3>Cách 1</h3>
					<p className="">{state.like} Like</p>
					<button
						className="btn btn-outline-danger"
						onClick={() => {
							setState({
								like: state.like + 1,
							});
						}}
					>
						Like
					</button>
					<h3>Cách 2</h3>
					<hr></hr>
					<p className="">{like} Like</p>
					<button
						className="btn btn-outline-danger"
						onClick={() => {
							setLike(like + 1);
						}}
					>
						Like
					</button>
				</div>
			</div>
			<h3>Bài Tập chọn màu xe</h3>
			<div className="row">
				<div className="col-6">
					<img src={`./img/CarBasic/Products/${imgCar}-car.jpg`} className="w100 mw-100" ></img>
				</div>
				<div className="col-6">
					<div>
                        <button className="btn bg-danger text-white m-2" onClick={() =>
                        {
                            setImgCar('red')
                        }}
                        //     onClick={() =>
                        //     {
                        //         ChangeColor('red')
                        // }}
                        >red</button>
						<button className="btn bg-dark text-white m-2"onClick={() =>
                        {
                            setImgCar('steel')
                        }}>steel</button>
						<button className="btn bg-dark text-white m-2" onClick={() =>
                        {
                            setImgCar('black')
                        }}>black</button>
						<button className="btn bg-dark text-white m-2" onClick={() =>
                        {
                            setImgCar('silver')
                        }}>silver</button>
					</div>
				</div>
			</div>
		</div>
	);
}
