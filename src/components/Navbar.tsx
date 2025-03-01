import { A } from "@solidjs/router";
import Button from "./Button";

const Navbar = () => {
	return (
		<>
			<div class="w-full h-2/10 grid grid-cols-10 gap-5 items-center">
				<h1 class="font-jersey text-8xl text-white col-span-7 p-5">
					HAO.HAO
				</h1>

				<Button
					label="home/"
					outerStyle="max-w-30 max-h-20 min-w-[100px] min-h-10 w-full h-1/2 col-span-1"
					innerStyle="border-white bg-black"
					onClick={() => {
						alert("HOME");
					}}
				/>
				<Button
					label="projects/"
					outerStyle="max-w-30 max-h-20 min-w-[100px] min-h-10 w-full h-1/2 col-span-1"
					innerStyle="border-white bg-green-500"
					onClick={() => {
						alert("PROJECTS");
					}}
				/>
				<Button
					label="work/"
					outerStyle="max-w-30 max-h-20 min-w-[100px] min-h-10 w-full h-1/2 col-span-1"
					innerStyle="border-white bg-black"
					onClick={() => {
						alert("work");
					}}
				/>
			</div>
		</>
	);
};

export default Navbar;
