import Button from "./Button";

const WorkCard = ({ key, work }) => {
	return (
		<>
			<div
				id="work-card"
				className="w-full h-1/3 rounded-xl bg-hao-background shadow-[10px_10px_0px_0px_#6cc030] border-3 border-solid border-hao-primary p-2 min-h-[180px]"
			>
				<div
					id="work-card-content"
					className="flex flex-row justify-center items-center gap-4 h-full p-2"
				>
					<div id="work-card-brief" className="h-full w-7/16">
						<div id="work-heading" className="flex flex-col gap-2">
							<h1
								id="work-company"
								className="text-xl text-hao-text h-full font-space-mono"
							>
								<b>Company:</b> {work.company}
							</h1>
							<h2
								id="work-title"
								className="text-xl text-hao-text h-full font-space-mono"
							>
								<b>Title:</b> {work.title}
							</h2>
							<h3
								id="work-title"
								className="text-md text-hao-text h-full font-space-mono"
							>
								{work.start_date} - {work.end_date}
							</h3>
						</div>
					</div>
					<div
						id="work-card-details"
						className="h-full w-9/16 overflow-y-scroll"
					>
						<ul className="list-disc list-inside">
							{work.goals.map((goal, id) => {
								return (
									<li
										id="goal"
										className="text-hao-text text-lg font-space-mono"
									>
										{goal}
									</li>
								);
							})}
						</ul>
					</div>
				</div>
			</div>
		</>
	);
};

export default WorkCard;
