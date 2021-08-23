import { Badge, Space, Switch } from "antd";

import { ClockCircleOutlined } from "@ant-design/icons";
import { DatePicker } from "antd";
import React from "react";

export default function AntDemo(props) {
	const [show, setShow] = React.useState(true);
	return (
		<div className="container">
			<DatePicker />

			<Space>
				<Switch checked={show} onChange={() => setShow(!show)} />
				<Badge count={show ? 25 : 0} />
				<Badge
					count={
						show ? <ClockCircleOutlined style={{ color: "#f5222d" }} /> : 0
					}
				/>
				<Badge
					className="site-badge-count-109"
					count={show ? 109 : 0}
					style={{ backgroundColor: "#52c41a" }}
				/>
			</Space>
		</div>
	);
}
