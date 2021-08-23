import React from "react";
import { useSelector } from "react-redux";

export default function Modal(props)
{
	const {Component,handleSubmit} = useSelector(state => state.ModelReducer)
	//let Component = props.com
	return (
		<div>
			{/* Button trigger modal */}
			{/* <button
				type="button"
				className="btn btn-primary btn-lg"
				data-toggle="modal"
				data-target="#modelId"
			>
				Launch
			</button> */}
			{/* Modal */}
			<div
				className="modal fade"
				id="modelId"
				tabIndex={-1}
				role="dialog"
				aria-labelledby="modelTitleId"
				aria-hidden="true"
			>
				<div className="modal-dialog model-lg" role="document">
					<div className="modal-content">
						<div className="modal-header">
							<h5 className="modal-title">Modal title</h5>
							<button
								type="button"
								className="close"
								data-dismiss="modal"
								aria-label="Close"
							>
								<span aria-hidden="true">×</span>
							</button>
						</div>
						<div className="modal-body">
						    {/* dạng 1 */}
							{/* {props.component} */}
							{/* dạng 2: thẻ */}
							{/* {Component} */}
							{Component}
						</div>
						<div className="modal-footer">
							<button
								type="button"
								className="btn btn-secondary"
								data-dismiss="modal"
							>
								Close
							</button>
							<button type="button" className="btn btn-primary" onClick={()=>handleSubmit()}>
								Submit
							</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
