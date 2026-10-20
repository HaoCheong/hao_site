import clsx from "clsx";

const PopBox = ({
	children,
	backdropStyle = "bg-white",
	contentStyle = "border-3 bg-black border-hao-text",
	depthStyle = "bottom-2 right-2",
	backdropOn = true,
}) => {
	return (
		<>
			<div
				id="pop-box-backdrop"
				className={clsx(
					backdropStyle,
					"relative items-center size-full text-fluid-base",
				)}
			>
				{backdropOn ? (
					<div
						id="pop-box-content"
						className={clsx(
							contentStyle,
							"absolute w-full h-full z-1",
							depthStyle,
						)}
					>
						{children}
					</div>
				) : (
					<div
						id="pop-box-content"
						className={clsx(contentStyle, "w-full h-full")}
					>
						{children}
					</div>
				)}
			</div>
		</>
	);
};

export default PopBox;
