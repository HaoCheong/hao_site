const PageContainer = ({ children }) => {
	return (
		<>
			<div class="max-w-[1500px] min-w-[1000px] w-8/10 h-8/10 flex flex-col">
				{children}
			</div>
		</>
	);
};

export default PageContainer;
