import clsx from "clsx";
import Navbar from "../components/Navbar";
import Page from "../components/Page";
import resumePdf from "../assets/Hao_Cheong_Resume.pdf";
import logoAnimated from "../assets/logo-animated.gif";
import WindowedBox from "../components/BuildingBox/WindowedBox";
import MobilePage from "../components/MobilePage";
import TooSmallPage from "../components/TooSmallPage";
import squintGif from "../assets/ken-jeong-squinting.gif";
import AnimatedLogo from "../components/AnimatedLogo";
import MobileNavbar from "../components/MobileNavbar";

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
				<div
					id="resume-mobile-content"
					className="w-full h-full overflow-y-scroll p-2"
				>
					<div
						id="resume-mobile-content-inner"
						className="flex flex-col gap-8 w-full h-2/1"
					>
						<div
							id="resume-mobile-navbar"
							className="w-full h-3/40 shrink-0"
						>
							<MobileNavbar />
						</div>
						<div
							id="resume-mobile-logo"
							className="w-full h-6/40 shrink-0 flex justify-center"
						>
							<AnimatedLogo />
						</div>

						<div
							id="resume-mobile-description"
							className={clsx(
								"w-full shrink-0 flex justify-center",
								"min-[300px]:h-7/40",
								"min-[400px]:h-6/40",
								"min-[700px]:h-4/40",
							)}
						>
							<WindowedBox title="description">
								<h1 className="text-4xl text-hao-text font-syne font-extrabold p-4">
									Here is my resume_
								</h1>
							</WindowedBox>
						</div>
						<div
							id="resume-mobile-content"
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
					</div>
				</div>
			</MobilePage>
			<Page>
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
										Here is my resume_
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
