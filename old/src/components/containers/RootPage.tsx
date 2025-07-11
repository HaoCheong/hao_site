const RootPage = ({ children }) => {
	return (
		<>
			<div class="bg-black flex items-center justify-center h-screen w-screen flex-col">
				{children}
			</div>
		</>
	);
};

export default RootPage;
