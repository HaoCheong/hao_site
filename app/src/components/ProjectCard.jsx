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
						className="w-2/16 aspect-square h-full"
					>
						{project?.logo_link === "" ? (
							<div className="text-8xl">
								{project.logo_placeholder}
							</div>
						) : (
							<img
								src={project.logo_link}
								className="w-full h-full"
							/>
						)}
					</div>
					<div id="project-card-header" className="h-full w-3/16">
						<h1 className="text-hao-text font-space-mono text-xl">
							<b>Project: </b>
							{project.title}
						</h1>
					</div>
					<div
						id="project-card-content"
						className="h-full w-8/16 m-5 overflow-y-scroll"
					>
						{project.notes.map((notes, id) => {
							return (
								<li
									id="notes"
									className="text-hao-text text-lg font-space-mono"
								>
									{notes}
								</li>
							);
						})}
					</div>
					<div id="project-card-tech" className="h-full w-3/16 m-5">
						{project.tech.map((notes, id) => {
							return (
								<li
									id="tech"
									className="text-hao-text text-lg font-space-mono"
								>
									{notes}
								</li>
							);
						})}
					</div>
					<div
						id="project-card-action"
						className="h-full w-1/16 p-2 "
					>
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
		</>
	);
};

export default ProjectCard;
