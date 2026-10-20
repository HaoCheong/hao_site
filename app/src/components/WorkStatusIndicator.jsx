import FilledPopBox from "./BuildingBox/FilledPopBox";
const WorkStatusIndicator = ({ variant, backdropOn = true }) => {
	let fillVariant = "bg-neubrutal-green";
	let text = "Complete";

	if (variant === "current") {
		fillVariant = `green`;
		text = "Complete";
	} else if (variant === "previous") {
		fillVariant = `yellow`;
		text = "Historic";
	}

	return (
		<div className="h-13 w-29">
			<FilledPopBox variant={fillVariant} backdropOn={backdropOn}>
				<div className="flex items-center p-2 justify-center">
					<h3 className="text-md font-grotesk text-center">{text}</h3>
				</div>
			</FilledPopBox>
		</div>
	);
};

export default WorkStatusIndicator;
