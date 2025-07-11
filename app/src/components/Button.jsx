import clsx from "clsx";

const Button = ({
	label = "Test",
	onClick,
	innerStyle = "border-hao-text bg-hao-background",
	active = false,
}) => {
	const buttonStyle =
		"absolute flex items-center justify-center w-full h-full border-2 text-hao-text font-bold transition-all duration-100 ";
	const buttonShape = "rounded-xl";

	return (
		<>
			<button
				id="button"
				className={clsx(
					buttonShape,
					"relative group transition duration-200 items-center size-full text-xl rounded-xl"
				)}
				onClick={onClick}
			>
				<div
					id="button-backdrop"
					className={clsx(
						buttonShape,
						"absolute top-2 left-2 w-full h-full border-2 border-hao-text bg-hao-text/80 transition duration-100 "
					)}
				></div>

				{active ? (
					<div
						className={clsx(
							"top-2 left-2 bg-hao-secondary/90",
							buttonStyle,
							buttonShape,
							innerStyle
						)}
					>
						{label}
					</div>
				) : (
					<div
						className={clsx(
							buttonStyle,
							buttonShape,
							"top-0 left-0 group-active:top-2 group-active:left-2 duration-100 ease-in-out hover:bg-hao-secondary hover:text-hao-text",
							innerStyle
						)}
					>
						{label}
					</div>
				)}
			</button>
		</>
	);
};

export default Button;
