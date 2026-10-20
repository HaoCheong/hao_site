import clsx from "clsx";
import Navbar from "../components/Navbar";
import Page from "../components/Page";
import ProjectCard from "../components/ProjectCard";
import logoAnimated from "../assets/logo-animated.gif";
import WindowedBox from "../components/BuildingBox/WindowedBox";

const Projects = () => {
	const projectList = [
		{
			title: "Convo Ink",
			description: "Epaper edition of Convo",
			start_date: "-",
			status: "ongoing",
			tech: ["TBD"],
			notes: ["epaper device for sending limited chat"],
			link: "https://github.com/HaoCheong",
			logo_link: "",
			logo_placeholder: "",
		},
		{
			title: "Spenny",
			description: "A budgetting application",
			start_date: "-",
			status: "complete",
			tech: ["React", "FastAPI", "PostgreSQL", "SQLAlchemy"],
			notes: [
				"self hosted automation budgetting application",
				"hosted on a home rapsberry pi",
				"i didn't want to use excel",
			],
			link: "https://github.com/HaoCheong/spenny",
			logo_link: "",
			logo_placeholder: "💸",
		},
		{
			title: "Inkpress",
			description: "A cli tool to help auto fill preset templates",
			start_date: "-",
			status: "complete",
			tech: ["node"],
			notes: [
				"cli tool to help auto fill preset templates",
				"time saver tool for marking students",
			],
			link: "https://github.com/HaoCheong/inkpress",
			logo_link: "",
			logo_placeholder: "🐙",
		},
		{
			title: "convo",
			description:
				"Scrappy text chat app that only keeps the most recent 3 text",
			start_date: "-",
			status: "complete",
			tech: ["python", "more python than I should have used"],
			notes: [
				"scrappy text chat app that only keeps the most recent 3 text messages",
				"experiment in esoteric ui/ux design",
			],
			link: "https://github.com/HaoCheong/convo",
			logo_link: "",
			logo_placeholder: "💬",
		},
		{
			title: "algo crash course",
			description: "A collection of pdfs of algorithm notes from uni",
			start_date: "-",
			status: "complete",
			tech: ["Handwritten"],
			notes: [
				"handwritten, bespoke notes on algorithm studies",
				"people were asking me to teach them and i had no time :(",
			],
			link: "https://github.com/HaoCheong/AlgorithmCrashCourse",
			logo_link: "",
			logo_placeholder: "📝",
		},
	];

	return (
		<Page>
			<div
				id="project-mobile-page"
				className="md:hidden flex justify-center items-center h-screen m-3"
			>
				<h1
					id="work-in-progress"
					className="font-space-mono text-3xl text-hao-text text-center"
				>
					Project Page: current a work in progress 🙇‍♂️
				</h1>
			</div>

			<div
				id="project-desktop-page"
				className="max-md:hidden size-full flex flex-col gap-4"
			>
				<Navbar />
				<div
					id="project-desktop-heading"
					className={clsx(
						"w-full h-8/32 flex justify-center items-center",
					)}
				>
					<div
						id="project-heading"
						className={clsx(
							"p-4 w-full h-full flex flex-row gap-12",
						)}
					>
						<img
							src={logoAnimated}
							className="w-auto h-full p-3 aspect-square object-cover rounded-xl bg-hao-text shadow-[10px_10px_0px_0px_#6cc030] border-3 border-solid border-hao-primary"
						/>
						<WindowedBox title="Decription">
							<div className="size-full flex items-center justify-center p-4">
								<h1 className="text-4xl text-hao-text font-syne font-extrabold">
									Projects I have done_
								</h1>
							</div>
						</WindowedBox>
					</div>
				</div>
				<div
					id="project-desktop-content"
					className={clsx(
						"w-full h-22/32 grid grid-cols-3 auto-rows-[20rem] content-start p-4 gap-8 overflow-y-scroll",
					)}
				>
					{projectList.map((project, id) => {
						return <ProjectCard key={id} project={project} />;
					})}
				</div>
				<div
					id="project-desktop-footer"
					className="w-full h-2/32 text-hao-text flex justify-center items-center p-4"
				>
					<h2 className="text-xl text-hao-text/60">@HaoCheong</h2>
				</div>
			</div>
		</Page>
	);
};

export default Projects;
