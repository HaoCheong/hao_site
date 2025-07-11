const Button = ({ label, onClick, outerStyle, innerStyle, active = false }) => {
	return (
		<>
			<button
				className={`relative group transition-all duration-200 items-center ${outerStyle} font-jersey text-3xl`}
				onclick={() => {
					onClick;
				}}
			>
				<div class="absolute top-2 left-2 w-full h-full border-2 border-white bg-white transition-all duration-200 "></div>

				{active === true ? (
					<div
						className={`absolute top-0 left-0 flex items-center justify-center w-full h-full border-2 ${innerStyle} text-white font-bold transition-all duration-100 top-2 left-2`}
					>
						{label}
					</div>
				) : (
					<div
						className={`absolute top-0 left-0 flex items-center justify-center w-full h-full border-2 ${innerStyle} text-white font-bold transition-all duration-100 group-active:top-2 group-active:left-2`}
					>
						{label}
					</div>
				)}
			</button>
		</>
	);
};

export default Button;
