import "./App.css";

//cấu hình router
import { BrowserRouter, Route, Switch } from "react-router-dom";

import About from "./pages/About/About";
import { AdminTemplate } from "./templates/AdminTemplate";
import AntDemo from "./pages/AntDemo/AntDemo";
import ApiMiddleWare from "./pages/AxiosDemo/ApiMiddleWare";
import AxiosDemoRCC from "./pages/AxiosDemo/AxiosDemoRCC";
import AxiosDemoRFC from "./pages/AxiosDemo/AxiosDemoRFC";
import Detail from './pages/Detail/Detail'
import HOC from "./pages/HOC/HOC";
import Header from "./component/HomePage/Header";
import Home from "./pages/Home/Home";
import { HomeTemplate } from "./templates/HomeTemplate";
import Login from "./pages/Login/Login";
import Profile from "./pages/Profile/Profile";
import ReduxHookDemo from "./pages/Hook/ReduxHookDemo/ReduxHookDemo";
import Register from "./pages/Register/Register";
import UseEffectDemo from "./pages/Hook/UseEffectDemo/UseEffectDemo";
import UseStateDemo from "./pages/Hook/UseStateDemo/UseStateDemo";
import { UserTemplate } from "./templates/UserTemplate";
import logo from "./logo.svg";

function App() {
	return (
		<BrowserRouter>
			{/* BrowserRouter giúp cho chúng ta luân chuyển các router */}
			{/* <Header></Header> */}
			<Switch>
				<HomeTemplate path='/home' component={Home}></HomeTemplate>
				<Route
					exact
          path="/home"

          /*nó sẻ chèn thêm vào home trước khi render*/

					render={(propsRoute /* dùng để truyền localtion  patch Name hay dùng để chuyển hướng */ ) => {
						return (
							<div>
								{/* <Header></Header> */}
								<Home {...propsRoute /*nó có bao nhiêu cái props thì nó sẻ truyền vô cho thằng này hết */}></Home>
							</div>
						);
					}}
				></Route>
				{/* <Route exact path="/home" component={Home}></Route> */}
				<UserTemplate exact path="/login" component={Login}></UserTemplate>
				<UserTemplate exact path="/register" component={Register}></UserTemplate>
				<HomeTemplate exact path="/about" /* component={About} xài render bỏ component */render={(propsRoute) =>
				{
					return <div>
						         {/* <Header></Header> */}
                                 <About {...propsRoute}></About>
					      </div>
				}}></HomeTemplate>	
				<HomeTemplate exact path="/useEffect" component={UseEffectDemo}></HomeTemplate>
				<HomeTemplate exact path="/about" component={About}></HomeTemplate>
				{/* <HomeTemplate exact path="/antd" component={AntDemo}></HomeTemplate> */}
				<HomeTemplate exact path="/useState" component={UseStateDemo}></HomeTemplate>
				<HomeTemplate exact path="/reudxHook" component={ReduxHookDemo}></HomeTemplate>
				<HomeTemplate exact path="/ajaxrcc" component={AxiosDemoRCC}></HomeTemplate>
				<HomeTemplate exact path="/ajaxrfc" component={AxiosDemoRFC}></HomeTemplate>
				<HomeTemplate exact path="/ajaxmiddleware" component={ApiMiddleWare}></HomeTemplate>
				<HomeTemplate exact path="/detail/:id" component={Detail}></HomeTemplate>
				<HomeTemplate exact path="/profile" component={Profile}></HomeTemplate>
				<HomeTemplate exact path="/hoc" component={HOC}></HomeTemplate>
				<AdminTemplate path='/admin/antd' component={AntDemo }></AdminTemplate>

				
				<HomeTemplate exact path="/" component={ApiMiddleWare}></HomeTemplate>

			</Switch>
			{/* khi người dùng rỏ search nó sẻ hển thị component tương ướng nếu có nhiều trường hợp tương ứng nó sẻ hiện     
      nhiề trường hợp đó nếu kong6 muốn có thể dùng switch và thêm exact=(so sánh chính sát)*/}
		</BrowserRouter>
	);
}

export default App;
