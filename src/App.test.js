import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
	render(<App />);

	const linkElement = screen.getByText(/link/i);
	expect(linkElement).toBeInTheDocument();
	// expect(linkElement).toMatchSnapshot();

	// find используется для асинхронного поиска элемента
	// const buttonElement2 = screen.findByRole('button');

	// get чтобы получить со стопроцентной вероятностью какой-то элемент или тест упадет.
	// const buttonElement = screen.getByRole('button');

	// query используется для доказательства того, что какого-то элемента нету на странице. Если элемент не найден, то тест не падает и возвращается null.
	// const buttonElement3 = screen.queryByRole('buttonnnnn');
	// expect(buttonElement3).toBeNull();

	// screen.debug();
});
