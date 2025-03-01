const RootPage = ({ children }) => {
	return (
		<>
			<div class="bg-black flex place-items-center justify-center h-max w-full flex-col">
				{children}
			</div>
		</>
	);
};

export default RootPage;
