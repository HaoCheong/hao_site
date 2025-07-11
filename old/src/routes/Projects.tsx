import Button from "../components/Button";
import PageContainer from "../components/containers/PageContainer";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import ProjectCard from "../components/ProjectCard";

const Projects = () => {
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
					</div>
					<div class="p-4 col-span-14 row-span-4 text-white text-5xl font-jersey flex items-center justify-center max-md:col-span-1 max-md:row-span-1">
						<h1 class="font-jersey text-9xl text-white text-center max-md:text-8xl">
							Projects/
						</h1>
					</div>
					<div class="p-4 col-span-16 row-span-4 text-white text-5xl font-jersey flex justify-center max-md:col-span-1 max-md:row-span-4 max-md:border-solid max-md:border-t-[#3b3b3b] max-md:border-t-1">
						<p
							id="summary-webpage"
							class="font-jersey text-[clamp(1rem,2vw,1em)] text-white w-full max-md:hidden overflow-y-scroll"
						>
							Here are some of my proudest projects, (and some
							weirder ones)
						</p>
					</div>
				</div>
				<Footer />
			</PageContainer>
		</>
	);
};

export default Projects;
