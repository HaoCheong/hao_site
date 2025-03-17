const PageContainer = ({ children }) => {
	return (
		<>
			<div class="overflow-y-scroll aspect-16/9 m-5 flex flex-col max-md:h-[150vh] max-md:w-10/10 ">
				{children}
			</div>
		</>
	);
};

export default PageContainer;
