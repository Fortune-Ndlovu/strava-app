import { React, useState } from "react";

const WeeksStyleSvg = () => {
	// State to store the current day of the week (0 = Sunday, 1 = Monday, ..., 6 = Saturday)
	const [currentDay, setCurrentDay] = useState(() => new Date().getDay());
	
	const daysOfWeek = ["M", "T", "W", "T", "F", "S", "S"];

	return (
		<div>
			{" "}
			<svg
				className="recharts-surface"
				width="150"
				height="100"
				viewBox="0 0 150 100"
			>
				<title></title>
				<desc></desc>
				<defs>
					<clipPath id="recharts1-clip">
						<rect x="5" y="5" height="60" width="140"></rect>
					</clipPath>
				</defs>
				<g className="recharts-layer recharts-bar">
					<g className="recharts-layer recharts-bar-rectangles">
						<g className="recharts-layer recharts-bar-rectangle">
							<path
								fill="#d3d1cd"
								width="16"
								height="2"
								x="7"
								y="63"
								radius="0"
								className="recharts-rectangle"
								d="M 7,63 h 16 v 2 h -16 Z"
							></path>
						</g>
						<g className="recharts-layer recharts-bar-rectangle">
							<path
								fill="#d3d1cd"
								width="16"
								height="2"
								x="27"
								y="63"
								radius="0"
								className="recharts-rectangle"
								d="M 27,63 h 16 v 2 h -16 Z"
							></path>
						</g>
						<g className="recharts-layer recharts-bar-rectangle">
							<path
								fill="#d3d1cd"
								width="16"
								height="2"
								x="47"
								y="63"
								radius="0"
								className="recharts-rectangle"
								d="M 47,63 h 16 v 2 h -16 Z"
							></path>
						</g>
						<g className="recharts-layer recharts-bar-rectangle">
							<path
								fill="#d3d1cd"
								width="16"
								height="2"
								x="67"
								y="63"
								radius="0"
								className="recharts-rectangle"
								d="M 67,63 h 16 v 2 h -16 Z"
							></path>
						</g>
						<g className="recharts-layer recharts-bar-rectangle">
							<path
								fill="#d3d1cd"
								width="16"
								height="2"
								x="87"
								y="63"
								radius="0"
								className="recharts-rectangle"
								d="M 87,63 h 16 v 2 h -16 Z"
							></path>
						</g>
						<g className="recharts-layer recharts-bar-rectangle">
							<path
								fill="#d3d1cd"
								width="16"
								height="2"
								x="107"
								y="63"
								radius="0"
								className="recharts-rectangle"
								d="M 107,63 h 16 v 2 h -16 Z"
							></path>
						</g>
						<g className="recharts-layer recharts-bar-rectangle">
							<path
								fill="#d3d1cd"
								width="16"
								height="2"
								x="127"
								y="63"
								radius="0"
								className="recharts-rectangle"
								d="M 127,63 h 16 v 2 h -16 Z"
							></path>
						</g>
					</g>
					<g className="recharts-layer"></g>
				</g>
				<g className="recharts-layer recharts-cartesian-axis recharts-xAxis xAxis">
					<g className="recharts-cartesian-axis-ticks">
						<g className="recharts-layer recharts-cartesian-axis-tick">
							{/* Mapping over daysOfWeek to create text labels and polygons for each day */}
							{daysOfWeek.map((day, index) => (
								<g key={index} transform={`translate(${15 + index * 20},73)`}>
									<text
										x="0"
										y="10"

										// Conditional fill color for the text based on the current day
										fill={index + 1 === currentDay ? "#fc5200" : "#2b2b2b"}
										textAnchor="middle"

										// Conditional font weight for the text based on the current day
										fontWeight={index + 1 === currentDay ? "800" : "400"}
									>
										{day}
									</text>
									
									{/* Polygon to highlight the current day */}
									{index + 1 === currentDay && (
										<svg x="-5" y="15" width="10" height="10">
											<polygon points="5,0 0,10 10,10" fill="#fc5200"></polygon>
										</svg>
									)}
								</g>
							))}
						</g>
					</g>
				</g>
			</svg>
		</div>
	);
};

export default WeeksStyleSvg;
