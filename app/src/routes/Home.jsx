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

const Home = () => {
	const navigate = useNavigate();

	const SUMMARY =
		"i'm a sydney-based software engineer, breaking and making stuff and i don't plan to stop.";

	return (
		// <div
		// 	id="home-mobile-page"
		// 	className="min-[1040px]:hidden size-full overflow-y-scroll flex items-center"
		// >

		// </div>
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
					Home Page: currently a work in progress 🙇‍♂️
				</h1>
			</MobilePage>
			<Page>
				<div
					id="home-desktop-page"
					className="size-full flex flex-col gap-6"
				>
					<Navbar />
					<div
						id="home-desktop-landing-section"
						className={clsx(
							"w-full h-14/32 flex justify-center items-center",
						)}
					>
						<div
							id="landing-central"
							className={clsx(
								"pt-4 pb-4 w-full h-full flex flex-row gap-12",
							)}
						>
							<img
								src={logoAnimated}
								className="w-auto h-full p-3 aspect-square object-cover rounded-xl bg-hao-text shadow-[10px_10px_0px_0px_#6cc030] border-3 border-solid border-hao-primary"
							/>
							<WindowedBox title="Biography">
								<h1 className="text-5xl p-4 text-hao-text font-syne font-extrabold">
									hi, i'm hao cheong_
								</h1>
								<h3 className="text-2xl p-4 text-hao-text font-grotesk font-extrabold">
									{SUMMARY}
								</h3>
							</WindowedBox>
						</div>
					</div>
					<div
						id="home-desktop-landing-action"
						className="w-full h-18/32 flex flex-row justify-center items-center gap-8"
					>
						<AccentedWindowedBox
							title="work experience"
							id="action-work-section"
							variant="blue"
						>
							<div className="flex flex-col gap-6 h-full p-4">
								<Button
									onClick={() => {
										navigate("/Work");
									}}
								>
									<h1>software engineer - atlassian</h1>
								</Button>
								<Button
									onClick={() => {
										navigate("/Work");
									}}
								>
									<h1>application programmer - kanji it</h1>
								</Button>
								<Button
									onClick={() => {
										navigate("/Work");
									}}
								>
									<h1>cyber security tutor - unsw</h1>
								</Button>
							</div>
						</AccentedWindowedBox>
						<AccentedWindowedBox
							title="contact"
							id="action-contact-section"
							variant="orange"
						>
							<div className="flex flex-col gap-4 w-full h-full p-4">
								<Button
									onClick={(e) => {
										window.location.href =
											"mailto:hao.cheong@outlook.com";
										e.preventDefault();
									}}
								>
									<div
										id="email-group"
										className="flex flex-row gap-2 items-center p-3 h-full w-9/10"
									>
										<img
											src={mailIcon}
											className="w-[clamp(10px,3vw,45px)] aspect-square invert"
										/>
										<h2 className="h-full w-8/10 flex flex-col justify-center">
											hao.cheong@outlook.com
										</h2>
									</div>
								</Button>

								<Button
									onClick={(e) => {
										window.location.href =
											"https://www.linkedin.com/in/hao-cheong/";
										e.preventDefault();
									}}
								>
									<div
										id="linkedin-group"
										className="flex flex-row gap-2 items-center p-3 h-full w-9/10"
									>
										<img
											src={linkedinLogo}
											className="w-[clamp(10px,3vw,45px)] aspect-square invert"
										/>
										<h2 className="h-full w-8/10 flex flex-col justify-center">
											linkedin
										</h2>
									</div>
								</Button>
								<Button
									label="github"
									onClick={(e) => {
										window.location.href =
											"https://github.com/HaoCheong";
										e.preventDefault();
									}}
								>
									<div
										id="github-group"
										className="flex flex-row gap-2 items-center p-3 h-full w-9/10"
									>
										<img
											src={githubSign}
											className="w-[clamp(10px,3vw,45px)] aspect-square invert"
										/>
										<h2 className="h-full w-8/10 flex flex-col justify-center">
											github
										</h2>
									</div>
								</Button>
							</div>
						</AccentedWindowedBox>
					</div>
					<div
						id="home-desktop-footer"
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

export default Home;
