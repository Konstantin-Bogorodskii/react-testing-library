import { fireEvent, prettyDOM, render, screen } from '@testing-library/react';
import { RouterProvider, createMemoryRouter } from 'react-router-dom';
import routes from './router/routes';

describe('router test', () => {
	test('successful moving between pages', () => {
		const router = createMemoryRouter(routes, {
			initialEntries: ['/']
		});

		render(<RouterProvider router={router} />);

		const mainLinkEl = screen.getByTestId('main-link');
		const aboutLinkEl = screen.getByTestId('about-link');

		// console.log(prettyDOM());
		fireEvent.click(aboutLinkEl);
		// console.log(prettyDOM());
		expect(screen.getByTestId('about-page')).toBeInTheDocument();
		fireEvent.click(mainLinkEl);
		expect(screen.getByTestId('main-page')).toBeInTheDocument();
	});

	test('moving to a non-existent path', () => {
		const router = createMemoryRouter(routes, {
			initialEntries: ['/123123']
		});

		render(<RouterProvider router={router} />);
		expect(screen.getByTestId('error-page')).toBeInTheDocument();
	});

	test('redirect  to user detail page', () => {
		const router = createMemoryRouter(routes, {
			initialEntries: ['/users/3']
		});

		render(<RouterProvider router={router} />);
		expect(screen.getByTestId('user-detail-page-3')).toBeInTheDocument();
	});
});
