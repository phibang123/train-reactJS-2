import { Fragment } from "react";
import Header from "../component/HomePage/Header";
import { Route } from "react-router";

// Fragment thẻ này nhủ thẻ div nhưng nó là thẻ vô hình không làm vở layout không hiển thị ra giao diện

export const UserTemplate = (props) => {
	//props (path, component)

	return (
		<Route
			exact
			path={props.path}
			render={(propsRoute) => {
				return (
					<Fragment>
						<div className="d-flex">
							<div className="w-50">
								<img src="https://picsum.photos/2000/2000" className='mw-100  vh-100'></img>
							</div>
							<div>
								<props.component {...propsRoute}></props.component>
							</div>
						</div>
					</Fragment>
				);
			}}
		></Route>
	);
};
