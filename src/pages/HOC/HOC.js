import React, { useState } from "react";

import Login from "../Login/Login";
import Modal from "./Modal";
import Regisger from "../Register/Register";
import { useDispatch } from "react-redux";

export default function HOC()
{
    // const [component,setComponent] =useState(<Login></Login>)
     
	const dispatch = useDispatch();


	return (
		<div className="container align-center">
			<button
				data-toggle="modal"
				data-target="#modelId"
                className="btn btn-outline-primary mr-2"
                onClick={() =>
                {
					dispatch({
						type: 'OPEN_LOGIN',
						Component: <Login></Login>,
						handleSubmit: () =>
						{		
							alert('sử lý đăng nhập!')
						}
					})
                }}
			>
				Login
			</button>
			<button
				data-toggle="modal"
				data-target="#modelId"
                className="btn btn-outline-danger  mr-2"
                // onClick={() =>
                // {
                //     setComponent(<Regisger/>)
                // }}
				onClick={() =>
					{
						dispatch({
							type: 'OPEN_LOGIN',
							Component: <Regisger></Regisger>,
							handleSubmit: () =>
							{		
								alert('sử lý đăng nhập!')
							}
						})
					}}
			>
				Regisger
			</button>

            {/* <Modal component={<button className='btn btn-primary'>ahihi</button>}></Modal> */}
			<Modal ></Modal>
			{/* <Modal com={component}></Modal> */}
		</div>
	);
}
