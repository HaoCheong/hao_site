import clsx from "clsx";
import WorkStatusIndicator from "../WorkStatusIndicator";
const WorkCardBase = ({ work }) => {
	return (
		<div className="size-full">
			<div
				id="work-card-header"
				className={clsx(
					"w-full h-1/12 flex m-4 font-grotesk font-bold",
				)}
			>
				<WorkStatusIndicator variant={work.status} />
			</div>
			<div
				id="work-card-content"
				className={clsx(
					"w-full h-11/12 flex flex-col gap-4 text-hao-text p-4",
				)}
			>
				<h1
					className={clsx(
						"text-white text-5xl font-grotesk font-bold",
					)}
				>
					{work.company}
				</h1>
				<h2
					className={clsx(
						"text-white text-2xl font-grotesk font-bold",
					)}
				>
					{work.title}
				</h2>
				<h3 className={clsx("text-white text-xl font-grotesk")}>
					{work.start_date} - {work.end_date}
				</h3>
			</div>
		</div>
	);
};

export default WorkCardBase;
