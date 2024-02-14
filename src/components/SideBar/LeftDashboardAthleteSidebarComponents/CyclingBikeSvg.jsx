import React from "react";

const CyclingBikeSvg = () => {
	return (
		<div>
			<svg
				className="bikingIcon"
				width="80"
				height="80"
				viewBox="-3.8000000000000003 -3.8000000000000003 83.60000000000001 83.60000000000001"
			>
				<circle
					cx="38"
					cy="38"
					r="38"
					stroke="none"
					strokeWidth="1"
					fill="#44b6c2"
					opacity="0"
				></circle>
				<circle
					cx="38"
					cy="38"
					r="38"
					stroke="#d3d1cd"
					strokeWidth="5"
					fill="none"
				></circle>
				<circle
					cx="38"
					cy="38"
					r="38"
					stroke="#44b6c2"
					strokeWidth="5"
					fill="none"
					strokeDasharray="0px 1px"
					strokeDashoffset="0px"
					transform="rotate(-90,38,38)"
					pathLength="1"
				></circle>
				<svg
					x="22.8"
					y="22.8"
					width="30.400000000000002"
					height="30.400000000000002"
					aria-hidden="true"
				>
					<svg
						fill="currentColor"
						xmlns="http://www.w3.org/2000/svg"
						viewBox="0 0 24 24"
						width="30.400000000000002"
						height="30.400000000000002"
					>
						<path
							d="M5.5 19.675a5.166 5.166 0 005.105-4.485h1.105l3.28-6.52.76 1.46a5.044 5.044 0 101.22-.57l-2.03-3.89H17a.333.333 0 01.33.33v.57h1.34V6A1.674 1.674 0 0017 4.32h-4.29l1.57 3.01H8.542L7.66 5.67h1.45l-.72-1.35H4.17l.72 1.35h1.241l1.26 2.37v.01l-.76 1.41a5.2 5.2 0 00-1.13-.135 5.175 5.175 0 100 10.35zm12.79-4.695h1.52l-2.2-4.2c.291-.073.59-.11.89-.11a3.83 3.83 0 11-3.83 3.83 3.877 3.877 0 011.7-3.19l1.92 3.67zm-4.82-6.31l-2.046 4.082-2.17-4.082h4.216zm-5.32.8l2.323 4.371H5.8l2.35-4.37zM5.5 10.675c.151.005.302.019.451.041l-1.58 2.944.79 1.53h4.1a3.822 3.822 0 11-3.76-4.515z"
							fill=""
						></path>
					</svg>
				</svg>
			</svg>
		</div>
	);
};

export default CyclingBikeSvg;
