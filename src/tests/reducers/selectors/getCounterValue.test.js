import { getCounterValue } from '../../../store/reducers/counterSlice';

describe('getCounterValue selector', () => {
	test('empty state selector', () => {
		expect(getCounterValue({})).toBe(0);
	});

	test('filled state selector', () => {
		expect(getCounterValue({ counter: { value: 100 } })).toBe(100);
	});
});
