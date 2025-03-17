import { useLocation } from "@solidjs/router";
import Button from "./Button";

const Navbar = () => {
	const location = useLocation();
	console.log("location", location.pathname);
	return (
		<>
			<div class="w-full h-2/10 grid grid-cols-16 gap-5 p-5">
				<h1 class="font-jersey text-8xl text-white col-span-10 flex max-md:items-center max-md:justify-center max-md:col-span-16">
					HAO.HAO
				</h1>

				<div class="grid col-span-6 gap-5 w-full h-full  max-md:hidden">
					<div class="flex flex-row gap-5 w-full h-full">
						<Button
							label="home/"
							outerStyle="min-w-[100px] min-h-10 w-full"
							innerStyle="border-white bg-black"
							onClick={() => {
								alert("HOME");
							}}
							active={location.pathname === "/Home"}
						/>
						<Button
							label="projects/"
							outerStyle="min-w-[100px] min-h-10 w-full"
							innerStyle="border-white bg-green-500"
							onClick={() => {
								alert("PROJECTS");
							}}
							active={location.pathname === "/Projects"}
						/>
						<Button
							label="work/"
							outerStyle="min-w-[100px] min-h-10 w-full"
							innerStyle="border-white bg-black"
							onClick={() => {
								alert("work");
							}}
							active={location.pathname === "/Work"}
						/>
					</div>
				</div>
			</div>
		</>
	);
};

export default Navbar;
