import PopBox from "./PopBox";

const FilledPopBox = ({ variant, backdropOn = true, children }) => {
	// Default (base case) contentStyle — no accent.
	let fillStyle = "bg-black";

	if (variant === "blue") {
		fillStyle = `bg-neubrutal-blue`;
	} else if (variant === "orange") {
		fillStyle = `bg-neubrutal-orange`;
	} else if (variant === "green") {
		fillStyle = `bg-neubrutal-green`;
	} else if (variant === "lavender") {
		fillStyle = `bg-neubrutal-lavender`;
	} else if (variant === "red") {
		fillStyle = `bg-neubrutal-red`;
	} else if (variant === "yellow") {
		fillStyle = `bg-neubrutal-yellow`;
	}

	return (
		<PopBox backdropOn={backdropOn} depthStyle="bottom-1 right-1">
			<div
				id="filled-accented-inner"
				className={`${fillStyle} size-full`}
			>
				{children}
			</div>
		</PopBox>
	);
};

export default FilledPopBox;
