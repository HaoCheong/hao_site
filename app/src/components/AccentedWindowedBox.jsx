import WindowedBox from "./WindowedBox";

const AccentedWindowedBox = ({ title, variant, children }) => {
	const accentBase =
		"border-t-3 border-r-3 border-b-3 border-l-6 bg-black border-hao-text";
	const accentBackdrop = "";

	// Default (base case) windowStyle — no accent.
	let windowStyle = "border-3 bg-black border-hao-text";
	let backdropStyle = "bg-white";

	if (variant === "blue") {
		windowStyle = `${accentBase} border-l-neubrutal-blue`;
		backdropStyle = `${accentBackdrop} bg-neubrutal-blue`;
	} else if (variant === "orange") {
		windowStyle = `${accentBase} border-l-neubrutal-orange`;
		backdropStyle = `${accentBackdrop} bg-neubrutal-orange`;
	} else if (variant === "green") {
		windowStyle = `${accentBase} border-l-neubrutal-green`;
		backdropStyle = `${accentBackdrop} bg-neubrutal-green`;
	} else if (variant === "lavender") {
		windowStyle = `${accentBase} border-l-neubrutal-lavender`;
		backdropStyle = `${accentBackdrop} bg-neubrutal-lavender`;
	} else if (variant === "red") {
		windowStyle = `${accentBase} border-l-neubrutal-red`;
		backdropStyle = `${accentBackdrop} bg-neubrutal-red`;
	} else if (variant === "yellow") {
		windowStyle = `${accentBase} border-l-neubrutal-yellow`;
		backdropStyle = `${accentBackdrop} bg-neubrutal-yellow`;
	}

	return (
		<WindowedBox
			title={title}
			windowStyle={windowStyle}
			backdropStyle={backdropStyle}
		>
			{children}
		</WindowedBox>
	);
};

export default AccentedWindowedBox;
