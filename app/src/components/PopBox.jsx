import clsx from "clsx";

const PopBox = ({
	children,
	backdropStyle = "bg-white",
	contentStyle = "border-3 bg-black border-hao-text",
}) => {
	return (
		<>
			<div
				id="pop-box-backdrop"
				className={clsx(
					backdropStyle,
					"relative items-center size-full text-fluid-base -z-1",
				)}
			>
				<div
					id="pop-box-content"
					className={clsx(
						contentStyle,
						"absolute bottom-3 right-3 w-full h-full z-1",
					)}
				>
					{children}
				</div>
			</div>
		</>
	);
};

export default PopBox;
