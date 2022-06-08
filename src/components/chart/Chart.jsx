import React from "react";
import "./chart.css";
import {
	LineChart,
	Line,
	XAxis,
	CartesianGrid,
	Tooltip,
	ResponsiveContainer,
} from "recharts";

export default function Chart({title, data, datakey, grid}) {
	return (
		<div className="chart">
			<h3 className="chartTitle">{title}</h3>
			<ResponsiveContainer width="100%" aspect={4 / 1}>
				<LineChart data={data}>
					<XAxis dataKey="name" stroke="#5550BD" />
					<Line dataKey={datakey} type="monotone" stroke="#5550BD" />
                    <Tooltip />
                    {grid && <CartesianGrid stroke="#E0DFDF" strokeDasharray="5 5"/>}
				</LineChart>
			</ResponsiveContainer>
		</div>
	);
}
