import clsx from "clsx";
import Navbar from "../components/Navbar";
import Page from "../components/Page";
import resumePdf from "../assets/Hao_Cheong_Resume.pdf";
import logoAnimated from "../assets/logo-animated.gif";
import WindowedBox from "../components/BuildingBox/WindowedBox";
import MobilePage from "../components/MobilePage";
import TooSmallPage from "../components/TooSmallPage";
import squintGif from "../assets/ken-jeong-squinting.gif";

const Resume = () => {
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
				<h1
					id="work-in-progress"
					className="font-space-mono text-3xl text-hao-text text-center "
				>
					Resume Page: currently a work in progress 🙇‍♂️
				</h1>
			</MobilePage>
			<Page>
				<div
					id="resume-mobile-page"
					className="md:hidden flex justify-center items-center h-screen m-3"
				>
					<h1
						id="resume-in-progress"
						className="font-space-mono text-3xl text-hao-text text-center"
					>
						Work Page: currently a resume in progress 🙇‍♂️
					</h1>
				</div>

				<div
					id="resume-desktop-page"
					className="max-md:hidden size-full flex flex-col gap-4"
				>
					<Navbar />
					<div
						id="resume-desktop-heading"
						className={clsx(
							"w-full h-8/32 flex justify-center items-center",
						)}
					>
						<div
							id="resume-heading"
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
										Here is my resume
									</h1>
								</div>
							</WindowedBox>
						</div>
					</div>
					<div
						id="resume-desktop-content"
						className={clsx(
							"w-full h-22/32 flex justify-center items-center",
						)}
					>
						<embed
							id="resume"
							class="h-full w-full"
							src={resumePdf}
						/>
					</div>
					<div
						id="resume-desktop-footer"
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
export default Resume;
