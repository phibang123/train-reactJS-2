import React, { useState } from "react";

import Login from "../Login/Login";
import Modal from "./Modal";
import Regisger from "../Register/Register";

export default function HOC()
{
    const [component,setComponent] =useState(<Login></Login>)
    
	return (
		<div className="container align-center">
			<button
				data-toggle="modal"
				data-target="#modelId"
                className="btn btn-outline-primary mr-2"
                onClick={() =>
                {
                    setComponent(<Login></Login>)
                }}
			>
				Login
			</button>
			<button
				data-toggle="modal"
				data-target="#modelId"
                className="btn btn-outline-danger  mr-2"
                onClick={() =>
                {
                    setComponent(<Regisger/>)
                }}
			>
				Regisger
			</button>

            {/* <Modal component={<button className='btn btn-primary'>ahihi</button>}></Modal> */}
            <Modal component={component}></Modal>
		</div>
	);
}
