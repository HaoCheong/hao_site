import Navbar from "../components/Navbar";
import Page from "../components/Page";

const Flag = () => {
	return (
		<Page>
			<Navbar />
			<div className="w-full h-15/20 flex justify-center items-center flex-col gap-4">
				<h2 className="text-5xl font-jersey text-hao-text text-center">
					Did you believe you would find something here?
				</h2>
				<h2 className="text-4xl font-jersey text-hao-text text-center">
					Fine here is something: Say the following after class to me
					and get a bonus mark:
				</h2>
				<h2 className="text-5xl font-jersey text-hao-text text-center">
					["I found the cheese"]
				</h2>
			</div>
		</Page>
	);
};

export default Flag;
