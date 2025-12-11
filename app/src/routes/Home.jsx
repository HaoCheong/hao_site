import clsx from "clsx";
import Button from "../components/Button";
import Navbar from "../components/Navbar";
import Page from "../components/Page";
import Placeholder from "../components/Placeholder";
import { useNavigate } from "react-router";

const Home = () => {
	const navigate = useNavigate();

	const SUMMARY =
		"I'm a Sydney-based Software Engineer, turning a lifelong obsession with computers into a career since 2022. Building, breaking, and still always learning.";

	return (
		<Page>
			<div
				id="project-mobile-page"
				className="2xl:hidden size-full overflow-y-scroll"
			>
				<Placeholder label="Navbar" classSize="h-2/20 w-full" />

				<div
					id="home-mobile-landing-section"
					className="h-8/20 w-full flex justify-center"
				>
					<div
						id="landing-central"
						className={clsx("p-4 size-full flex flex-col")}
					>
						<img
							src="/src/assets/logo-animated.gif"
							className="h-8/10 p-3 aspect-square object-contain"
						/>
						<div className="w-full h-2/10 flex justify-center items-center p-2">
							<h1 className="text-5xl text-hao-text text-center font-sora">
								Hi, I'm Hao Cheong
							</h1>
						</div>
					</div>
				</div>
				<div
					id="home-mobile-landing-summary"
					className="h-8/20 w-full "
				>
					<div
						id="summary-central"
						className={clsx(
							"p-4 size-full flex flex-col justify-center items-center "
						)}
					>
						<p className="text-sm font-sora text-hao-text text-center">
							{SUMMARY}
						</p>
					</div>
				</div>
				<div id="nav-more-indicator" className="w-full h-2/20">
					<img
						src="/src/assets/chevron-down.svg"
						className="size-full object-fill"
						preserveAspectRatio="none"
					/>
				</div>
				<div
					id="home-mobile-landing-action"
					className="h-20/20 w-full p-4"
				>
					<div
						id="action-work-section"
						className="flex flex-col gap-4 h-1/2 p-4"
					>
						<h1 className="text-4xl text-hao-text font-sora">
							Work Experience
						</h1>
						<Button
							innerStyle="border-hao-text font-sora bg-hao-background p-2 text-md"
							label="Application Programmer - Kanji IT Pty (Since 2023)"
						/>
						<Button label="Web Application Tutor - UNSW - (2022-2024)" />
						<Button label="Cyber Security Tutor - UNSW - (2022-2024)" />
					</div>
					<div
						id="action-contact-section"
						className="flex flex-col gap-4 h-1/2 p-4"
					>
						<h1 className="text-4xl text-hao-text font-sora">
							Contact
						</h1>
						<Button
							label="hao.cheong@outlook.com"
							onClick={(e) => {
								window.location.href =
									"mailto:hao.cheong@outlook.com";
								e.preventDefault();
							}}
						/>

						<Button
							label="LinkedIn"
							onClick={(e) => {
								window.location.href =
									"https://www.linkedin.com/in/hao-cheong/";
								e.preventDefault();
							}}
						/>
						<Button
							label="github"
							onClick={(e) => {
								window.location.href =
									"https://github.com/HaoCheong";
								e.preventDefault();
							}}
						/>
					</div>
				</div>
			</div>
			<div
				id="project-desktop-page"
				className="max-2xl:hidden size-full flex flex-col gap-4"
			>
				<Navbar />
				<div
					id="home-desktop-landing-section"
					className={clsx(
						"w-full h-6/20 flex justify-center items-center"
					)}
				>
					<div
						id="landing-central"
						className={clsx("p-4 w-6/10 h-full flex flex-row")}
					>
						<img
							src="/src/assets/logo-animated.gif"
							className="w-auto h-full p-3 aspect-square object-cover rounded-xl bg-hao-text shadow-[10px_10px_0px_0px_#6cc030] border-3 border-solid border-hao-primary"
						/>
						<div className="w-full flex justify-center items-center">
							<h1 className="text-5xl p-4 text-hao-text text-center font-sora">
								Hi, I'm Hao Cheong
							</h1>
						</div>
					</div>
				</div>
				<div
					id="home-desktop-landing-summary"
					className="w-full h-3/20 flex justify-center items-center "
				>
					<div
						id="summary-central"
						className={clsx(
							"p-4 w-8/10 h-full flex flex-row justify-center items-center rounded-xl bg-hao-text shadow-[10px_10px_0px_0px_#6cc030] border-3 border-solid border-hao-primary"
						)}
					>
						<p className="text-2xl font-sora text-hao-background text-center">
							{SUMMARY}
						</p>
					</div>
				</div>
				<div
					id="home-desktop-landing-action"
					className="w-full h-9/20 flex flex-row justify-center items-center "
				>
					<div
						id="action-work-section"
						className="flex flex-col gap-4 w-1/2 h-full p-4"
					>
						<h1 className="text-4xl text-hao-text font-sora">
							Work Experience
						</h1>
						<Button
							onClick={() => {
								navigate("/Work");
							}}
						>
							<h1>
								Application Programmer - Kanji IT Pty - (2023 -
								Current)
							</h1>
						</Button>
						<Button
							onClick={() => {
								navigate("/Work");
							}}
						>
							<h1>Web Application Tutor - UNSW - (2022-2024)</h1>
						</Button>
						<Button
							onClick={() => {
								navigate("/Work");
							}}
						>
							<h1>Cyber Security Tutor - UNSW - (2022-2024)</h1>
						</Button>
					</div>
					<div
						id="action-contact-section"
						className="flex flex-col gap-4 w-1/2 h-full p-4"
					>
						<h1 className="text-4xl text-hao-text font-sora">
							Contact
						</h1>
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
									src="/src/assets/mail.png"
									className="min-w-[30px] max-w-[45px] aspect-square invert"
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
									src="/src/assets/linkedin-logo.png"
									className="min-w-[30px] max-w-[45px] aspect-square invert"
								/>
								<h2 className="h-full w-8/10 flex flex-col justify-center">
									LinkedIn
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
									src="/src/assets/github-sign.png"
									className="min-w-[30px] max-w-[45px] aspect-square invert"
								/>
								<h2 className="h-full w-8/10 flex flex-col justify-center">
									GitHub
								</h2>
							</div>
						</Button>
					</div>
				</div>
				<div
					id="home-desktop-footer"
					className="text-hao-text flex justify-center items-center p-4"
				>
					<h2 className="text-xl text-hao-text/60">@HaoCheong</h2>
				</div>
			</div>
		</Page>
	);
};

export default Home;
