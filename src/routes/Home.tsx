import Button from "../components/Button";
import PageContainer from "../components/containers/PageContainer";
import Navbar from "../components/Navbar";

const Home = () => {
	return (
		<>
			<PageContainer>
				<Navbar />
				<div
					id="heading"
					class="w-full h-3/10 flex flex-row items-center gap-3"
				>
					<img
						src="src/assets/Crocky_transparent.png"
						alt="Hao Logo"
						class="h-full aspect-square p-5 min-h-[250px]"
					/>
					<h1 class="font-jersey text-[1100%] text-white w-full max-w-[1100px] text-center">
						Hi, I'm Hao
					</h1>
				</div>
				<p class="font-jersey text-4xl text-white mt-10 mb-10 w-full">
					I am a Software Engineer currently based in Sydney,
					Australia. I have a passion for anything computer related,
					whether that building small web and/or native applications
					to simplify my day to day life, to implementing emulation
					just to get a better understanding of the hardware.
				</p>
				<div class="grid grid-cols-2 w-full, gap-2">
					<div id="skills" class="col-span-1">
						<h2 class="font-jersey text-7xl text-white w-full max-w-[1100px] ">
							Skills
						</h2>
						<div class="">
							<h2 class="text-center text-white text-8xl font-jersey">
								To be added
							</h2>
						</div>
					</div>
					<div id="contacts" class="col-span-1 mb-5">
						<h2 class="font-jersey text-7xl text-white w-full max-w-[1100px] mb-5">
							Contacts
						</h2>
						<div class="flex flex-col gap-5">
							<Button
								label="hao.cheong@outlook.com"
								outerStyle="w-full h-10 p-10 row-span-1"
								innerStyle="border-white bg-black"
								onClick={() => {
									alert("email");
								}}
							/>
							<Button
								label="github@HaoCheong"
								outerStyle="w-full h-10 p-10 row-span-1"
								innerStyle="border-white bg-black"
								onClick={() => {
									alert("email");
								}}
							/>
							<Button
								label="resume"
								outerStyle="w-full h-10 p-10 row-span-1"
								innerStyle="border-white bg-black"
								onClick={() => {
									alert("email");
								}}
							/>
						</div>
					</div>
					<footer class="col-span-2 font-jersey text-3xl text-white w-full opacity-50 text-center m-5">
						Reinventing the wheel since 2018
					</footer>
				</div>
			</PageContainer>
		</>
	);
};

export default Home;
