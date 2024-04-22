import { useEffect, useState } from 'react';

function App() {
	const [data, setData] = useState(null);
	const [toggle, setToggle] = useState(false);
	const [value, setValue] = useState('');

	useEffect(() => {
		setTimeout(() => {
			setData({});
		}, 100);
	}, []);

	return (
		<>
			{data && <div style={{ color: 'red' }}>data</div>}
			{toggle && <div>hidden el</div>}
			<button onClick={() => setToggle(!toggle)}>click</button>

			<input
				value={value}
				onChange={e => setValue(e.target.value)}
				placeholder="input..."
			/>
			<label data-testid="label">{value}</label>
		</>
	);
}

export default App;
