import clsx from "clsx";
import Button from "../components/Button";
import Navbar from "../components/Navbar";
import Page from "../components/Page";
import Placeholder from "../components/Placeholder";
import { useNavigate } from "react-router";
import logoAnimated from "../assets/logo-animated.gif";
import mailIcon from "../assets/mail.png";
import linkedinLogo from "../assets/linkedin-logo.png";
import githubSign from "../assets/github-sign.png";
import chevronDown from "../assets/chevron-down.svg";
import WindowedBox from "../components/BuildingBox/WindowedBox";
import AccentedWindowedBox from "../components/BuildingBox/AccentedWindowedBox";
import MobilePage from "../components/MobilePage";
import TooSmallPage from "../components/TooSmallPage";
import squintGif from "../assets/ken-jeong-squinting.gif";
import MobileNavbar from "../components/MobileNavbar";
import AnimatedLogo from "../components/AnimatedLogo";
import ProjectCard from "../components/ProjectCard";
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
		<>
			<TooSmallPage>
				<div
					id="too-small-content"
					className="size-full flex flex-col gap-4 items-center justify-center"
				>
					<img
						src={squintGif}
						alt="Gif of a man squinting a piece of paper"
						className="w-80 h-80"
					/>
				</div>
			</TooSmallPage>
			<MobilePage>
				<div
					id="project-mobile-content"
					className="w-full h-full overflow-y-scroll p-2"
				>
					<div
						id="project-mobile-content-inner"
						className="flex flex-col gap-8 w-full h-2/1"
					>
						<div
							id="project-mobile-navbar"
							className="w-full h-3/40 shrink-0"
						>
							<MobileNavbar />
						</div>
						<div
							id="project-mobile-logo"
							className="w-full h-6/40 shrink-0 flex justify-center"
						>
							<AnimatedLogo />
						</div>

						<div
							id="project-mobile-description"
							className={clsx(
								"w-full shrink-0 flex justify-center",
								"min-[300px]:h-7/40",
								"min-[400px]:h-6/40",
								"min-[700px]:h-4/40",
							)}
						>
							<WindowedBox title="description">
								<h1 className="text-4xl text-hao-text font-syne font-extrabold p-4">
									Projects I have done_
								</h1>
							</WindowedBox>
						</div>
						<div
							id="project-mobile-project-list"
							className={clsx(
								"w-full shrink-0 flex flex-col gap-4 justify-center",
								"min-[300px]:h-25/20",
								"min-[400px]:h-22/20",
								"min-[600px]:h-12/20",
							)}
						>
							{projectList.map((project, id) => {
								return (
									<ProjectCard key={id} project={project} />
								);
							})}
						</div>
					</div>
				</div>
			</MobilePage>
			<Page>
				<div
					id="project-desktop-page"
					className="size-full flex flex-col gap-4"
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
						<h2 className="text-xl text-hao-text/60">
							@hao cheong 2026 · made with my two hands
						</h2>
					</div>
				</div>
			</Page>
		</>
	);
};

export default Projects;
