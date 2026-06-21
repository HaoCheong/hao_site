import clsx from "clsx";
import Navbar from "../components/Navbar";
import Page from "../components/Page";

const Resume = () => {
	return (
		<Page>
			<div
				id="resume-mobile-page"
				className="2xl:hidden  flex justify-center items-center h-screen m-3"
			>
				<h1
					id="work-in-progress"
					className="font-space-mono text-3xl text-hao-text text-center"
				>
					Resume Page: currently a work in progress 🙇‍♂️
				</h1>
			</div>

			<div
				id="resume-desktop-page"
				className="max-2xl:hidden size-full flex flex-col gap-4"
			>
				<Navbar />
				<div
					id="resume-desktop-heading"
					className={clsx(
						"w-full h-6/20 flex justify-center items-center",
					)}
				>
					<div
						id="resume-heading"
						className={clsx("p-4 w-6/10 h-full flex flex-row")}
					>
						<img
							src="/src/assets/logo-animated.gif"
							className="w-auto h-full p-3 aspect-square object-cover rounded-xl bg-hao-text shadow-[10px_10px_0px_0px_#6cc030] border-3 border-solid border-hao-primary"
						/>
						<div className="w-full flex justify-center items-center">
							<h1 className="text-5xl p-4 text-hao-text text-center font-space-mono">
								here is my resume.
							</h1>
						</div>
					</div>
				</div>
				<div
					id="resume-desktop-content"
					className={clsx(
						"w-full h-13/20 flex justify-center items-center",
					)}
				>
					<embed
						id="resume"
						class="h-full w-6/10"
						src="src/assets/Hao_Cheong_Resume.pdf"
					/>
				</div>
				<div
					id="resume-desktop-footer"
					className="w-full h-1/20 text-hao-text flex justify-center items-center p-4"
				>
					<h2 className="text-xl text-hao-text/60">@HaoCheong</h2>
				</div>
			</div>
		</Page>
	);
};

export default Resume;
