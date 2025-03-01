const Button = ({ label, onClick, outerStyle, innerStyle }) => {
	// return <>
	//     <div class="relative w-32 h-20 mx-auto">
	//         <button class="font-jersey border-solid border-white border-2 text-white text-5xl bg-black p-5 shadow-white" onclick={()=>{onClick}}>
	//             {label}
	//         </button>
	//     </div>

	// </>

	return (
		<>
			<button
				className={`relative group transition-all duration-200 items-center ${outerStyle} font-jersey text-2xl`}
				onclick={() => {
					onClick;
				}}
			>
				<div class="absolute top-2 left-2 w-full h-full border-2 border-white bg-white transition-all duration-200 "></div>
				<div
					className={`absolute top-0 left-0 flex items-center justify-center w-full h-full border-2 ${innerStyle} text-white font-bold transition-all duration-100 group-active:top-2 group-active:left-2`}
				>
					{label}
				</div>
			</button>
		</>
	);
};

export default Button;
