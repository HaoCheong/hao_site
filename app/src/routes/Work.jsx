import clsx from "clsx";
import Navbar from "../components/Navbar";
import Page from "../components/Page";
import WorkCard from "../components/WorkCard";
import logoAnimated from "../assets/logo-animated.gif";
import WindowedBox from "../components/BuildingBox/WindowedBox";

const Work = () => {
	const workList = [
		{
			company: "Atlassian",
			title: "Software Engineer",
			start_date: "Jan/2026",
			end_date: "Current",
			goals: [
				"Java/Kotlin development for Server to Cloud App Migration",
			],
			status: "current",
		},
		{
			company: "Kanji IT",
			title: "Application Programmer",
			start_date: "Jan/2023",
			end_date: "Jan/2026",
			goals: [
				"Django development for their delivery driver management system.",
				"Full Stack application development for their automated SMS system with Internal interface for Support team",
				"Operation Health and Safety Staff Management Synchroniser",
			],
			status: "previous",
		},
		{
			company: "UNSW",
			title: "Cybersecurity Tutor",
			start_date: "Sept/2022",
			end_date: "Dec/2024",
			goals: [
				"Facilitating discussions between students for security hypotheticals",
			],
			status: "previous",
		},
		{
			company: "UNSW",
			title: "Web Frontend Tutor",
			start_date: "Sept/2022",
			end_date: "Jan/2024",
			goals: ["Educating students on Frontend Fundamentals"],
			status: "previous",
		},
	];

	return (
		<Page>
			<div
				id="work-mobile-page"
				className="md:hidden flex justify-center items-center h-screen m-3"
			>
				<h1
					id="work-in-progress"
					className="font-space-mono text-3xl text-hao-text text-center"
				>
					Work Page: currently a work in progress 🙇‍♂️
				</h1>
			</div>

			<div
				id="work-desktop-page"
				className="max-md:hidden size-full flex flex-col gap-4"
			>
				<Navbar />
				<div
					id="work-desktop-heading"
					className={clsx(
						"w-full h-8/32 flex justify-center items-center",
					)}
				>
					<div
						id="work-heading"
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
									Places I have worked at_
								</h1>
							</div>
						</WindowedBox>
					</div>
				</div>
				<div
					id="work-desktop-content"
					className={clsx(
						"w-full h-22/32 flex flex-col p-4 gap-8 overflow-y-scroll",
					)}
				>
					<div className="size-full flex flex-row gap-8 pt-4 pl-4 pr-4">
						<div className="w-2/3 h-80" id="current-work">
							<WorkCard work={workList[0]} />
						</div>
						<div className="w-1/3 h-80" id="sub-work-1">
							<WorkCard work={workList[1]} />
						</div>
					</div>
					<div
						className={clsx(
							"w-full h-22/32 grid grid-cols-3 auto-rows-[20rem] content-start p-4 gap-8",
						)}
					>
						{workList.splice(2).map((work, id) => {
							return <WorkCard key={id} work={work} />;
						})}
					</div>
				</div>
				<div
					id="work-desktop-footer"
					className="w-full h-2/32 text-hao-text flex justify-center items-center p-4"
				>
					<h2 className="text-xl text-hao-text/60">@HaoCheong</h2>
				</div>
			</div>
		</Page>
	);
};

export default Work;
