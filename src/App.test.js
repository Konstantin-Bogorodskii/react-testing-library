import { findByText, render, screen, fireEvent } from '@testing-library/react';
import App from './App';

// test('renders learn react link', () => {
// 	render(<App />);

// 	const linkElement = screen.getByText(/link/i);
// 	expect(linkElement).not.toBeInTheDocument();
// 	// expect(linkElement).toMatchSnapshot();

// 	// find используется для асинхронного поиска элемента
// 	// const buttonElement2 = screen.findByRole('button');

// 	// get чтобы получить со стопроцентной вероятностью какой-то элемент или тест упадет.
// 	// const buttonElement = screen.getByRole('button');

// 	// query используется для доказательства того, что какого-то элемента нету на странице. Если элемент не найден, то тест не падает и возвращается null.
// 	// const buttonElement3 = screen.queryByRole('buttonnnnn');
// 	// expect(buttonElement3).toBeNull();

// 	// screen.debug();
// });

test('async get data', async () => {
	render(<App />);

	// screen.debug();
	const data = await screen.findByText(/data/i);
	expect(data).toBeInTheDocument();
	expect(data).toHaveStyle({ color: 'red' });
	// screen.debug();
});

test('toggle event', () => {
	render(<App />);

	const buttonEl = screen.getByText(/click/i);
	expect(buttonEl).toBeInTheDocument();

	expect(screen.queryByText(/hidden el/i)).toBeNull();

	fireEvent.click(buttonEl);
	expect(screen.getByText(/hidden el/i)).toBeInTheDocument();

	fireEvent.click(buttonEl, 'click');
	expect(screen.queryByText(/hidden el/i)).toBeNull();
});

test('input event', () => {
	render(<App />);

	const inputEl = screen.getByPlaceholderText(/input.../i);
	expect(inputEl).toBeInTheDocument();

	fireEvent.input(inputEl, {
		target: {
			value: '123123'
		}
	});

	const labelEl = screen.getByTestId('label');
	expect(labelEl).toContainHTML('123123');
});
