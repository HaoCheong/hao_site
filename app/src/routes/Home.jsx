import clsx from "clsx";
import Navbar from "../components/Navbar";
import Page from "../components/Page";
import Placeholder from "../components/Placeholder";
import Button from "../components/Button";

const Home = () => {
	const SUMMARY =
		"I am a Software Engineer based out of Sydney, working since 2022. But had an obsession with anything computer, from making stuff to breaking stuff";

	return (
		<Page>
			<Navbar />
			<div
				id="home-landing-section"
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
						className="w-4/10 h-full p-3 aspect-square"
					/>
					<div className="w-6/10 flex justify-center items-center">
						<h1 className="text-5xl text-hao-text text-center font-jersey">
							Hi, I'm Hao Cheong
						</h1>
					</div>
				</div>
			</div>
			<div
				id="home-landing-summary"
				className="w-full h-3/20 flex justify-center items-center "
			>
				<div
					id="summary-central"
					className={clsx("p-4 w-6/10 h-full  flex flex-row")}
				>
					<p className="text-3xl font-jersey text-hao-text text-center">
						{SUMMARY}
					</p>
				</div>
			</div>
			<div
				id="home-landing-action"
				className="w-full h-6/20 flex flex-row justify-center items-center "
			>
				<div
					id="action-work-section"
					className="flex flex-col gap-4 w-1/2 h-full p-4"
				>
					<h1 className="text-4xl text-hao-text font-jersey">
						Work Experience
					</h1>
					<Button label="Application Programmer - Kanji IT Pty (Since 2023)" />
					<Button label="Web Application Tutor - UNSW - (2022-2024)" />
					<Button label="Cyber Security Tutor - UNSW - (2022-2024)" />
				</div>
				<div
					id="action-contact-section"
					className="flex flex-col gap-4 w-1/2 h-full p-4"
				>
					<h1 className="text-4xl text-hao-text font-jersey">
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
			{/* <Placeholder classSize="w-full h-2/20" /> */}
			<div
				id="home-footer"
				className="text-hao-text flex flex-col gap-2 items-center p-4"
			>
				<h2 className="text-xl text-hao-text/60">@HaoCheong</h2>
			</div>
		</Page>
	);
};

export default Home;
