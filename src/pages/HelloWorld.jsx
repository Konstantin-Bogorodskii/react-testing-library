import { useState } from 'react';

const HelloWorld = () => {
	const [value, setValue] = useState('');
	const [visible, setVisible] = useState(false);

	const toggle = () => value === 'hello' && setVisible(prev => !prev);
	const onChange = e => setValue(e.target.value);

	return (
		<div>
			<input
				onChange={onChange}
				data-testid="input"
				type="text"
			/>
			<button
				onClick={toggle}
				data-testid="button">
				Type hello and click!
			</button>
			{visible && <h1 data-testid="title">HELLO WORLD</h1>}
		</div>
	);
};

export default HelloWorld;
