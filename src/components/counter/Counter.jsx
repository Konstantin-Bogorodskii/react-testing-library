import { useDispatch, useSelector } from 'react-redux';
import { decrement, getCounterValue, increment } from '../../store/reducers/counterSlice';

const Counter = () => {
	const dispatch = useDispatch();
	const counterValue = useSelector(getCounterValue);

	return (
		<>
			<div>Count: {counterValue}</div>
			<button onClick={() => dispatch(increment())}>+</button>
			<button onClick={() => dispatch(decrement())}>-</button>
		</>
	);
};
export default Counter;
