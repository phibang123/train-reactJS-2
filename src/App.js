import "./App.css";

//cấu hình router
import { BrowserRouter, Route, Switch } from "react-router-dom";

import About from "./pages/About/About";
import AxiosDemoRCC from "./pages/AxiosDemo/AxiosDemoRCC";
import AxiosDemoRFC from "./pages/AxiosDemo/AxiosDemoRFC";
import Header from "./component/HomePage/Header";
import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login";
import ReduxHookDemo from "./pages/Hook/ReduxHookDemo/ReduxHookDemo";
import Register from "./pages/Register/Register";
import UseEffectDemo from "./pages/Hook/UseEffectDemo/UseEffectDemo";
import UseStateDemo from "./pages/Hook/UseStateDemo/UseStateDemo";
import logo from "./logo.svg";

function App() {
	return (
		<BrowserRouter>
			{/* BrowserRouter giúp cho chúng ta luân chuyển các router */}
			<Header></Header>
			<Switch>
				{/* <Route
					exact
          path="/home"

          //nó sẻ chèn thêm vào home trước khi render

					render={(propsRoute) => {
						return (
							<div>
								Đây là trang chủ
								<Home></Home>
							</div>
						);
					}}
				></Route> */}
				<Route exact path="/home" component={Home}></Route>
				<Route exact path="/login" component={Login}></Route>
				<Route exact path="/register" component={Register}></Route>
				<Route exact path="/about" component={About}></Route>	
				<Route exact path="/useEffect" component={UseEffectDemo}></Route>
				<Route exact path="/useState" component={UseStateDemo}></Route>
				<Route exact path="/reudxHook" component={ReduxHookDemo}></Route>
				<Route exact path="/ajaxrcc" component={AxiosDemoRCC}></Route>
				<Route exact path="/ajaxrfc" component={AxiosDemoRFC}></Route>
				<Route exact path="/" component={Home}></Route>

			</Switch>
			{/* khi người dùng rỏ search nó sẻ hển thị component tương ướng nếu có nhiều trường hợp tương ứng nó sẻ hiện     
      nhiề trường hợp đó nếu kong6 muốn có thể dùng switch và thêm exact=(so sánh chính sát)*/}
		</BrowserRouter>
	);
}

export default App;
