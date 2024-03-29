import React from "react";

const SwimWaveSvg = () => {
	return (
		<div>
			<svg
				className="swimmingWaveIcon"
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
							d="M19.99 13.33a3.7 3.7 0 01-3.32-2l-.17-.32h-1.01l-.17.32a3.763 3.763 0 01-6.65 0l-.17-.32H7.49l-.17.32a3.72 3.72 0 01-3.32 2 3.7 3.7 0 01-3.01-1.51v1.88a5.02 5.02 0 003.01.98 5.054 5.054 0 004-1.92 5.116 5.116 0 007.99 0 5.122 5.122 0 007.01.94v-1.88a3.71 3.71 0 01-3.01 1.51zm-7.99 8a3.725 3.725 0 01-3.33-2L8.49 19H7.5l-.18.33a3.7 3.7 0 01-3.32 2 3.7 3.7 0 01-3.01-1.51v1.89c.873.64 1.929.98 3.01.97a5.054 5.054 0 004-1.92 5.054 5.054 0 004 1.92 4.947 4.947 0 003-.98v-1.87a3.654 3.654 0 01-3 1.5zm8-16.02a3.735 3.735 0 01-3.33-2L16.51 3h-1.02l-.16.31a3.724 3.724 0 01-3.33 2 3.681 3.681 0 01-3-1.5V5.7a5.04 5.04 0 003 .96 5.024 5.024 0 004-1.92 5.023 5.023 0 004 1.92 5.124 5.124 0 003-.95v-1.9a3.654 3.654 0 01-3 1.5z"
							fill=""
						></path>
					</svg>
				</svg>
			</svg>
		</div>
	);
};

export default SwimWaveSvg;
