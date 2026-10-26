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

const Home = () => {
	const navigate = useNavigate();

	const SUMMARY =
		"i'm a sydney-based software engineer, breaking and making stuff and i don't plan to stop.";

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
					id="home-mobile-content"
					className="w-full h-full overflow-y-scroll p-2"
				>
					<div
						id="home-mobile-content-inner"
						className="flex flex-col gap-8 w-full h-2/1"
					>
						<div
							id="home-mobile-navbar"
							className="w-full h-3/40 shrink-0"
						>
							<MobileNavbar />
						</div>
						<div
							id="home-mobile-logo"
							className="w-full h-6/40 shrink-0 flex justify-center"
						>
							<AnimatedLogo />
						</div>

						<div
							id="home-mobile-description"
							className={clsx(
								"w-full h-7/40 shrink-0 flex justify-center",
							)}
						>
							<WindowedBox title="biography">
								<h1
									className={clsx(
										"p-2 text-hao-text font-syne font-extrabold",
										"min-[300px]:text-2xl",
										"min-[400px]:text-3xl",
										"min-[500px]:text-4xl",
										"min-[600px]:text-5xl",
										"min-[800px]:text-6xl",
									)}
								>
									hi, i'm hao cheong_
								</h1>
								<h3
									className={clsx(
										"p-2 text-hao-text font-grotesk font-extrabold",
										"min-[450px]:text-xl",
										"min-[550px]:text-2xl",
										"min-[670px]:text-3xl",
										"min-[800px]:text-4xl",
									)}
								>
									{SUMMARY}
								</h3>
							</WindowedBox>
						</div>
						<div
							id="home-mobile-work-experience"
							className="w-full h-5/20 shrink-0 flex justify-center"
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
										<h1>
											application programmer - kanji it
										</h1>
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
						</div>
						<div
							id="home-mobile-contact"
							className="w-full h-5/20 shrink-0 flex justify-center"
						>
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
											<h2 className="size-full flex flex-col justify-center">
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
											<h2 className="size-full flex flex-col justify-center">
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
											<h2 className="size-full flex flex-col justify-center">
												github
											</h2>
										</div>
									</Button>
								</div>
							</AccentedWindowedBox>
						</div>
					</div>
				</div>
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
							<AnimatedLogo />
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
