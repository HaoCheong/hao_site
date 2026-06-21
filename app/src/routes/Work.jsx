import clsx from "clsx";
import Navbar from "../components/Navbar";
import Page from "../components/Page";
import WorkCard from "../components/WorkCard";

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
		},
		{
			company: "UNSW",
			title: "Cybersecurity Tutor",
			start_date: "Sept/2022",
			end_date: "Dec/2024",
			goals: [
				"Facilitating discussions between students for security hypotheticals",
			],
		},
		{
			company: "UNSW",
			title: "Web Frontend Tutor",
			start_date: "Sept/2022",
			end_date: "Jan/2024",
			goals: ["Educating students on Frontend Fundamentals"],
		},
	];

	return (
		<Page>
			<div
				id="work-mobile-page"
				className="2xl:hidden flex justify-center items-center h-screen m-3"
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
				className="max-2xl:hidden size-full flex flex-col gap-4"
			>
				<Navbar />
				<div
					id="work-desktop-heading"
					className={clsx(
						"w-full h-6/20 flex justify-center items-center",
					)}
				>
					<div
						id="work-heading"
						className={clsx("p-4 w-6/10 h-full flex flex-row")}
					>
						<img
							src="/src/assets/logo-animated.gif"
							className="w-auto h-full p-3 aspect-square object-cover rounded-xl bg-hao-text shadow-[10px_10px_0px_0px_#6cc030] border-3 border-solid border-hao-primary"
						/>
						<div className="w-full flex justify-center items-center">
							<h1 className="text-5xl p-4 text-hao-text text-center font-space-mono">
								work i have done.
							</h1>
						</div>
					</div>
				</div>
				<div
					id="work-desktop-content"
					className={clsx(
						"w-full h-13/20 flex flex-col p-4 gap-8 overflow-y-scroll",
					)}
				>
					{workList.map((work, id) => {
						return <WorkCard key={id} work={work} />;
					})}
				</div>
				<div
					id="work-desktop-footer"
					className="w-full h-1/20 text-hao-text flex justify-center items-center p-4"
				>
					<h2 className="text-xl text-hao-text/60">@HaoCheong</h2>
				</div>
			</div>
		</Page>
	);
};

export default Work;
