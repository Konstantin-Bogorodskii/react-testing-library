import { fireEvent, screen } from '@testing-library/react';
import renderMemoryRouter from '../../tests/helpers/renderMemoryRouter';

describe('navbar links test', () => {
	test('main link', async () => {
		renderMemoryRouter('/about');
		const mainLink = screen.getByTestId('main-link');
		fireEvent.click(mainLink);
		expect(screen.getByTestId('main-page')).toBeInTheDocument();
	});

	test('about link', async () => {
		renderMemoryRouter();
		const aboutLink = screen.getByTestId('about-link');
		fireEvent.click(aboutLink);
		expect(screen.getByTestId('about-page')).toBeInTheDocument();
	});

	test('users link', async () => {
		renderMemoryRouter();
		const usersLink = screen.getByTestId('users-link');
		fireEvent.click(usersLink);
		expect(screen.getByTestId('users-page')).toBeInTheDocument();
	});
});
