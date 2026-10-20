import clsx from "clsx";
import AccentedPopBox from "./BuildingBox/AccentedPopBox";
import ProjectCardBase from "./BuildingBox/ProjectCardBase";

const ProjectCard = ({ project }) => {
	let variant = "";
	if (project.status === "complete") {
		variant = `green`;
	} else if (project.status === "ongoing") {
		variant = `yellow`;
	}

	return (
		<AccentedPopBox variant={variant}>
			<ProjectCardBase project={project}></ProjectCardBase>
		</AccentedPopBox>
	);
};

export default ProjectCard;
