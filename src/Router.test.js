import { fireEvent, prettyDOM, screen } from '@testing-library/react';
import renderMemoryRouter from './tests/helpers/renderMemoryRouter';

describe('router test', () => {
	test('successful moving between pages', () => {
		renderMemoryRouter();

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
		renderMemoryRouter('/123123');
		expect(screen.getByTestId('error-page')).toBeInTheDocument();
	});

	test('redirect  to user detail page', () => {
		renderMemoryRouter('/users/3');
		expect(screen.getByTestId('user-detail-page-3')).toBeInTheDocument();
	});
});
