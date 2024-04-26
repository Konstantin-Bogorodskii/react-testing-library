import Counter from './../components/counter/Counter';
const MainPage = () => {
	return (
		<>
			<h1
				data-testid="main-page"
				style={{ marginBottom: '10px' }}>
				MAIN PAGE
			</h1>
			<Counter />
		</>
	);
};

export default MainPage;
