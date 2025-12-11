import Button from "./Button";

const ProjectCard = ({ key, project }) => {
	return (
		<>
			<div
				id="project-card"
				className="w-full h-1/3 rounded-xl bg-hao-background shadow-[10px_10px_0px_0px_#6cc030] border-3 border-solid border-hao-primary p-2 min-h-[180px]"
			>
				<div
					id="project-card-content"
					className="flex flex-row justify-center items-center gap-4 h-full p-2"
				>
					<div
						id="project-card-image"
						className="w-2/16 aspect-square h-full bg-red-500"
					></div>
					<div
						id="project-card-content"
						className="h-full w-12/16"
					></div>
					<div
						id="project-card-action"
						className="h-full w-1/16 p-2 "
					>
						<Button>▶</Button>
					</div>
				</div>
			</div>
		</>
	);
};

export default ProjectCard;
