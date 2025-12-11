import clsx from "clsx";
import Navbar from "../components/Navbar";
import Page from "../components/Page";
import ProjectCard from "../components/ProjectCard";

const Projects = () => {
	const projectList = [
		{
			title: "Spenny",
			description: "A budgeting application",
			start_date: "June/2023",
			tech: ["React", "FastAPI", "PostgreSQL", "SQLAlchemy"],
		},
	];

	return (
		<Page>
			<div
				id="project-mobile-page"
				className="2xl:hidden size-full overflow-y-scroll"
			>
				MOBILE
			</div>

			<div
				id="project-desktop-page"
				className="max-2xl:hidden size-full flex flex-col gap-4"
			>
				<Navbar />
				<div
					id="project-desktop-heading"
					className={clsx(
						"w-full h-6/20 flex justify-center items-center"
					)}
				>
					<div
						id="project-heading"
						className={clsx("p-4 w-6/10 h-full flex flex-row")}
					>
						<img
							src="/src/assets/logo-animated.gif"
							className="w-auto h-full p-3 aspect-square object-cover rounded-xl bg-hao-text shadow-[10px_10px_0px_0px_#6cc030] border-3 border-solid border-hao-primary"
						/>
						<div className="w-full flex justify-center items-center">
							<h1 className="text-5xl p-4 text-hao-text text-center font-sora">
								Projects I am proud of
							</h1>
						</div>
					</div>
				</div>
				<div
					id="project-desktop-content"
					className={clsx(
						"w-full h-13/20 flex justify-center items-center"
					)}
				>
					{projectList.map((project, id) => {
						return <ProjectCard key={id} project={project} />;
					})}
				</div>
				<div
					id="project-desktop-footer"
					className="w-full h-1/20 text-hao-text flex justify-center items-center p-4"
				>
					<h2 className="text-xl text-hao-text/60">@HaoCheong</h2>
				</div>
			</div>
		</Page>
	);
};

export default Projects;
