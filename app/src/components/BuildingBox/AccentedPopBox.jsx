import PopBox from "./PopBox";

const AccentedPopBox = ({ variant, backdropOn = true, children }) => {
	const accentBase =
		"border-t-3 border-r-3 border-b-3 border-l-6 bg-black border-hao-text";
	const accentBackdrop = "";

	// Default (base case) contentStyle — no accent.
	let contentStyle = "border-3 bg-black border-hao-text";
	let backdropStyle = "bg-white";

	if (variant === "blue") {
		contentStyle = `${accentBase} border-l-neubrutal-blue`;
		backdropStyle = `${accentBackdrop} bg-neubrutal-blue`;
	} else if (variant === "orange") {
		contentStyle = `${accentBase} border-l-neubrutal-orange`;
		backdropStyle = `${accentBackdrop} bg-neubrutal-orange`;
	} else if (variant === "green") {
		contentStyle = `${accentBase} border-l-neubrutal-green`;
		backdropStyle = `${accentBackdrop} bg-neubrutal-green`;
	} else if (variant === "lavender") {
		contentStyle = `${accentBase} border-l-neubrutal-lavender`;
		backdropStyle = `${accentBackdrop} bg-neubrutal-lavender`;
	} else if (variant === "red") {
		contentStyle = `${accentBase} border-l-neubrutal-red`;
		backdropStyle = `${accentBackdrop} bg-neubrutal-red`;
	} else if (variant === "yellow") {
		contentStyle = `${accentBase} border-l-neubrutal-yellow`;
		backdropStyle = `${accentBackdrop} bg-neubrutal-yellow`;
	}

	return (
		<PopBox
			contentStyle={contentStyle}
			backdropStyle={backdropStyle}
			backdropOn={backdropOn}
		>
			{children}
		</PopBox>
	);
};

export default AccentedPopBox;
