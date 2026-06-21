import clsx from "clsx";

const Button = ({
	children,
	onClick,
	innerStyle = "border-hao-text",
	active = false,
}) => {
	const buttonStyle =
		"font-space-mono absolute flex flex-col items-center justify-center w-full h-full border-2 text-hao-text font-bold transition-all duration-100 ";
	const buttonShape = "rounded-xl";

	return (
		<>
			<button
				id="button"
				className={clsx(
					buttonShape,
					"relative group transition duration-200 items-center size-full text-xl rounded-xl",
				)}
				onClick={onClick}
			>
				<div
					id="button-backdrop"
					className={clsx(
						buttonShape,
						"absolute top-2 left-2 w-full h-full border-2 border-hao-text bg-hao-text transition duration-100 ",
					)}
				></div>

				{active ? (
					<div
						className={clsx(
							"top-2 left-2 bg-hao-accent",
							buttonStyle,
							buttonShape,
							innerStyle,
						)}
					>
						{children}
					</div>
				) : (
					<div
						className={clsx(
							buttonStyle,
							buttonShape,
							"bg-hao-background top-0 left-0 group-active:top-2 group-active:left-2 duration-100 ease-in-out hover:bg-hao-accent hover:text-hao-text",
							innerStyle,
						)}
					>
						{children}
					</div>
				)}
			</button>
		</>
	);
};

export default Button;
