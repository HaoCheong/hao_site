import Button from "../components/Button";
import PageContainer from "../components/containers/PageContainer";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { createEffect, createSignal, onCleanup } from "solid-js";

const Home = () => {
	const [timeWorked, setTimeworked] = createSignal("caclulating...");

	const getTimeWorked = () => {
		const startWorkDate = new Date("1/30/2023 00:00:00").getTime();
		const today = new Date().getTime();

		let diffWorkTime = today - startWorkDate;

		const work_years = Math.floor(
			diffWorkTime / (1000 * 60 * 60 * 24 * 365)
		);
		const work_days = Math.floor(
			(diffWorkTime % (1000 * 60 * 60 * 24 * 365)) / (1000 * 60 * 60 * 24)
		);
		const work_hours = Math.floor(
			(diffWorkTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
		);
		const work_minutes = Math.floor(
			(diffWorkTime % (1000 * 60 * 60)) / (1000 * 60)
		);
		const work_seconds = Math.floor((diffWorkTime % (1000 * 60)) / 1000);

		const workString =
			work_years +
			" years " +
			work_hours +
			" hours " +
			work_seconds +
			" seconds";

		setTimeworked(workString);
	};

	createEffect(() => {
		const interval = setInterval(() => {
			getTimeWorked();
		}, 1000);

		onCleanup(() => clearInterval(interval)); // Cleanup on unmount
	});

	return (
		<>
			<PageContainer>
				<Navbar />
				<div
					id="home-content"
					class="grid grid-rows-16 grid-cols-16 gap-5 p-5 m-5 h-full max-md:grid-cols-1 max-md:grid-rows-16 max-md:p-1 max-md:m-1 max-md:h-[180vh]"
				>
					<div class="col-span-2 row-span-4 text-5xl font-jersey text-white flex items-center justify-center max-md:col-span-1 max-md:row-span-3">
						<img
							src="src/assets/Crocky_transparent.png"
							alt="Hao Logo"
							class="aspect-square h-full"
						/>
						{/* IMAGE */}
					</div>
					<div class="p-4 col-span-14 row-span-4 text-white text-5xl font-jersey flex items-center justify-center max-md:col-span-1 max-md:row-span-1">
						<h1 class="font-jersey text-9xl text-white text-center max-md:text-8xl">
							Hi, I'm Hao
						</h1>
						{/* HEADING */}
					</div>
					<div class="p-4 col-span-16 row-span-4 text-white text-5xl font-jersey flex justify-center max-md:col-span-1 max-md:row-span-4 max-md:border-solid max-md:border-t-[#3b3b3b] max-md:border-t-1">
						<p
							id="summary-webpage"
							class="font-jersey text-4xl text-white w-full max-md:hidden overflow-y-scroll"
						>
							I am a Software Engineer currently based in{" "}
							<span class="text-[#3366cc] underline">
								<a href="https://en.wikipedia.org/wiki/Kangaroo">
									Sydney, Australia.
								</a>
							</span>{" "}
							I have been working for [{timeWorked()}]. I like
							software that allows me to be lazy, but I love
							building software to help others be more lazy
							efficiently.
						</p>
						<p
							id="summary-webpage"
							class="font-jersey text-4xl text-white w-full md:hidden"
						>
							I am a Software Engineer based in{" "}
							<span class="text-[#3366cc] underline">
								<a href="https://en.wikipedia.org/wiki/Kangaroo">
									Sydney, Australia.
								</a>
							</span>{" "}
							I see you are on a small device, so I won't bother
							you with more text :)
						</p>
					</div>
					<div class="p-4 col-span-8 row-span-8 text-white text-5xl font-jersey flex flex-col gap-5 max-md:col-span-1 max-md:row-span-4 max-md:border-solid max-md:border-t-[#3b3b3b] max-md:border-t-1">
						<h2 class="flex justify-center items-center text-6xl">
							Experience
						</h2>
						<div class="flex flex-col gap-5">
							<Button
								label="Application Programmer @ Kanji IT"
								outerStyle="w-full p-10"
								innerStyle="border-white bg-green-500"
								onClick={() => {
									alert("email");
								}}
							/>
							<Button
								label="Security and Frontend Tutor @ UNSW"
								outerStyle="w-full h-10 p-10"
								innerStyle="border-white bg-black"
								onClick={() => {
									alert("email");
								}}
							/>
						</div>
					</div>
					<div class="p-4 col-span-8 row-span-8 text-white text-5xl font-jersey flex flex-col gap-5 max-md:col-span-1 max-md:row-span-4 max-md:border-solid max-md:border-t-[#3b3b3b] max-md:border-t-1">
						<h2 class="flex justify-center items-center text-6xl">
							Contacts
						</h2>
						<div class="flex flex-col gap-5">
							<Button
								label="hao.cheong@outlook.com"
								outerStyle="w-full p-10"
								innerStyle="border-white bg-black"
								onClick={() => {
									alert("email");
								}}
							/>
							<Button
								label="github@HaoCheong"
								outerStyle="w-full h-10 p-10"
								innerStyle="border-white bg-black"
								onClick={() => {
									alert("email");
								}}
							/>
							<Button
								label="resume"
								outerStyle="w-full h-10 p-10"
								innerStyle="border-white bg-black"
								onClick={() => {
									alert("email");
								}}
							/>
						</div>
					</div>
				</div>
				<Footer />
			</PageContainer>
		</>
	);
};

export default Home;
