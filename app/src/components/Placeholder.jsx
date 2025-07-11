import clsx from "clsx";

const Placeholder = ({ label = "PLACEHOLDER", classSize = "size-full" }) => {
	return (
		<div
			id="placeholder"
			className={clsx(
				"text-xl text-white border-5 border-solid border-white flex justify-center items-center",
				classSize
			)}
		>
			{label}
		</div>
	);
};

export default Placeholder;
