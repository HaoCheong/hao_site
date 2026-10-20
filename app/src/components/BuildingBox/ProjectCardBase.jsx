import clsx from "clsx";
import Button from "../Button";
import ProjectStatusIndicator from "../ProjectStatusIndicator";

const ProjectCardBase = ({ project }) => {
	return (
		<div className="size-full">
			<div
				id="project-card-header"
				className={clsx(
					"w-full h-1/12 flex m-4 font-grotesk font-bold",
				)}
			>
				<ProjectStatusIndicator variant={project.status} />
			</div>
			<div
				id="project-card-content"
				className={clsx(
					"w-full h-7/12 flex flex-col gap-4 text-hao-text p-4",
				)}
			>
				<h1
					className={clsx(
						"text-white text-5xl font-grotesk font-bold",
					)}
				>
					{project.title}
				</h1>
				<h2 className={clsx("text-white text-2xl font-grotesk")}>
					{project.description}
				</h2>
			</div>
			<div
				id="project-card-action"
				className={clsx(
					"w-full h-3/12 text-hao-text flex flex-row p-4",
				)}
			>
				<div className="w-10/12 h-full"></div>
				<div className="w-2/12 h-full">
					<Button
						onClick={(e) => {
							window.open(project.link, "_blank").focus();
							e.preventDefault();
						}}
					>
						▶
					</Button>
				</div>
			</div>
		</div>
	);
};

export default ProjectCardBase;
