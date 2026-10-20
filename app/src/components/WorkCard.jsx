import clsx from "clsx";
import AccentedPopBox from "./BuildingBox/AccentedPopBox";
import WorkCardBase from "./BuildingBox/WorkCardBase";

const WorkCard = ({ work }) => {
	let variant = "";
	if (work.status === "current") {
		variant = `green`;
	} else if (work.status === "previous") {
		variant = `yellow`;
	}

	return (
		<AccentedPopBox variant={variant}>
			<WorkCardBase work={work} />
		</AccentedPopBox>
	);
};

export default WorkCard;
