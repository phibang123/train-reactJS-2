import { Fragment, useState } from "react";
import { Layout, Menu } from "antd";
import {
	MenuFoldOutlined,
	MenuOutlined,
	MenuUnfoldOutlined,
	UploadOutlined,
	UserOutlined,
	VideoCameraOutlined,
} from "@ant-design/icons";

import React from "react";
import { Route } from "react-router";

// Fragment thẻ này nhủ thẻ div nhưng nó là thẻ vô hình không làm vở layout không hiển thị ra giao diện

const { Header, Sider, Content } = Layout;

export const AdminTemplate = (props) => {
	const [state, setState] = useState({
		collapsed: false,
	});

	const toggle = () => {
		setState({
			collapsed: !state.collapsed,
		});
	};
	return (
		<Route
			exact
			path={props.path}
			render={(propsRoute) => {
				return (
					<Fragment>
						<Layout>
							<Sider trigger={null} collapsible collapsed={state.collapsed}>
								<div className="logo text-center">
									<img
										src="https://picsum.photos/200/200"
										style={{
											width: 50,
											height: 50,
											borderRadius: "50%",
											backgroundPosition: "center",
										}}
									></img>
								</div>
								<Menu theme="dark" mode="inline" defaultSelectedKeys={["1"]}>
									<Menu.Item key="1" icon={<UserOutlined />}>
										nav 1
									</Menu.Item>
									<Menu.Item key="2" icon={<VideoCameraOutlined />}>
										nav 2
									</Menu.Item>
									<Menu.Item key="3" icon={<UploadOutlined />}>
										nav 3
									</Menu.Item>
								</Menu>
							</Sider>
							<Layout className="site-layout">
								<Header
									className="site-layout-background"
									style={{ padding: 0 }}
								>
									{/* {React.createElement(
							state.collapsed ? MenuUnfoldOutlined : MenuFoldOutlined,
							{
								className: "trigger",
								onClick: toggle,
							}
						)} */}
									{state.collapsed ? (
										<MenuUnfoldOutlined
											style={{ fontSize: 25 }}
											onClick={toggle}
										/>
									) : (
										<MenuFoldOutlined
											style={{ fontSize: 25 }}
											onClick={toggle}
										/>
									)}
								</Header>
								<Content
									className="site-layout-background"
									style={{
										margin: "24px 16px",
										padding: 24,
										minHeight: 280,
									}}
								>
									<props.component {...propsRoute}></props.component>
								</Content>
							</Layout>
						</Layout>
					</Fragment>
				);
			}}
		></Route>
	);
};
