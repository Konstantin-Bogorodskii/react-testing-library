import { findByText, render, screen, fireEvent } from '@testing-library/react';
import App from './App';
import userEvent from '@testing-library/user-event';

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

	// 	fireEvent dispatches exactly the events you tell it to and just those - even if those exact events never had been dispatched in a real interaction in a browser.

	// User-event on the other hand dispatches the events like they would happen if a user interacted with the document. That might lead to the same events you previously dispatched per fireEvent directly, but it also might catch bugs that make it impossible for a user to trigger said events.
	fireEvent.input(inputEl, {
		target: {
			value: '123123'
		}
	});
	// userEvent.type(inputEl, '123123')

	const labelEl = screen.getByTestId('label');
	expect(labelEl).toContainHTML('123123');
});
