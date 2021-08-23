import { NavLink } from "react-router-dom";
import React from "react";

//rfc
export default function Header(props) {
	return (
		<div>
			{/* NavLink giống thẻ a nó sẻ thay đổi bên trong switch tức nó chỉ thay đổi bên trong switch chứ không thay đổi hết trang 
            
            dẩn đến nó nhẹ hơn thẻ a
            và hregf thành to */}
			<nav className="navbar navbar-expand-sm navbar-dark bg-dark">
				<NavLink className="navbar-brand text-white" to="/">
					CyberSoft
				</NavLink>
				<button
					className="navbar-toggler d-lg-none"
					type="button"
					data-toggle="collapse"
					data-target="#collapsibleNavId"
					aria-controls="collapsibleNavId"
					aria-expanded="false"
					aria-label="Toggle navigation"
				/>
				<div className="collapse navbar-collapse" id="collapsibleNavId">
					<ul className="navbar-nav mr-auto mt-2 mt-lg-0">
						<li className="nav-item">
							<NavLink
								/*activeClassName sẻ chạy cái này khi chúng ta active tức link to trả về đúng /home này, tương tự style
                            , exact là chính sát*/ activeStyle={{
									background: "#fff",
									color: "yellow",
								}}
								exact
								activeClassName="active"
								className="nav-link "
								to="/home" /*to ghi đúng với cái path bên app.js*/
							>
								Home <span className="sr-only">(current)</span>
							</NavLink>
						</li>
						<li className="nav-item">
							<NavLink
								exact
								activeClassName="active"
								className="nav-link"
								to="/about"
							>
								About
							</NavLink>
						</li>
						<li className="nav-item">
							<NavLink
								exact
								activeClassName="active"
								className="nav-link"
								to="/profile"
							>
								Profile
							</NavLink>
						</li>
						<li className="nav-item">
							<NavLink
								exact
								activeClassName="active"
								className="nav-link"
								to="/admin/antd"
							>
								Ant Design
							</NavLink>
						</li>
						<li className="nav-item">
							<NavLink
								exact
								activeClassName="active"
								className="nav-link"
								to="/login" /*to ghi đúng với cái path bên app.js*/
							>
								Login <span className="sr-only">(current)</span>
							</NavLink>
						</li>
						<li className="nav-item">
							<NavLink
								exact
								activeClassName="active"
								className="nav-link"
								to="/register" /*to ghi đúng với cái path bên app.js*/
							>
								Register <span className="sr-only">(current)</span>
							</NavLink>
						</li>
						<li className="nav-item">
							<NavLink
								exact
								activeClassName="active"
								className="nav-link"
								to="/hoc" /*to ghi đúng với cái path bên app.js*/
							>
								HOC (Higher order Component) <span className="sr-only">(current)</span>
							</NavLink>
						</li>

						<li className="nav-item dropdown">
							<a
								className="nav-link dropdown-toggle"
								to="#"
								id="dropdownId"
								data-toggle="dropdown"
								aria-haspopup="true"
								aria-expanded="false"
							>
								Hook
							</a>
							<div className="dropdown-menu" aria-labelledby="dropdownId">
								<NavLink exact className="dropdown-item" to="/useState">
									Use State Hook
								</NavLink>
								<NavLink exact className="dropdown-item" to="/useEffect">
									Use Effect Hook
								</NavLink>
								<NavLink exact className="dropdown-item" to="/reudxHook">
									Use Redux Hook
								</NavLink>
								<NavLink exact className="dropdown-item" to="/ajaxrcc">
									Axios React Class RCC
								</NavLink>
								<NavLink exact className="dropdown-item" to="/ajaxrfc">
								Axios React Function RFC
								</NavLink>
								
							</div>
						</li>
						<li className="nav-item dropdown">
							<a
								className="nav-link dropdown-toggle"
								to="#"
								id="dropdownIdAxios"
								data-toggle="dropdown"
								aria-haspopup="true"
								aria-expanded="false"
							>
								Axios
							</a>
							<div className="dropdown-menu" aria-labelledby="dropdownIdAxios">
								
								<NavLink exact className="dropdown-item" to="/ajaxrcc">
									Axios React Class RCC
								</NavLink>
								<NavLink exact className="dropdown-item" to="/ajaxrfc">
								Axios React Function RFC
								</NavLink>
								<NavLink exact className="dropdown-item" to="/ajaxmiddleware">
								Axios React Middle Ware
								</NavLink>
							</div>
						</li>
					</ul>
					<form className="form-inline my-2 my-lg-0">
						<input
							className="form-control mr-sm-2"
							type="text"
							placeholder="Search"
						/>
						<button
							className="btn btn-outline-success my-2 my-sm-0"
							type="submit"
						>
							Search
						</button>
					</form>
				</div>
			</nav>
		</div>
	);
}
