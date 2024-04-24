import { RouterProvider, createMemoryRouter } from 'react-router-dom';
import routes from '../../router/routes';
import { render } from '@testing-library/react';

const renderMemoryRouter = (initialRoute = '/') => {
	const memoryRouter = createMemoryRouter(routes, {
		initialEntries: [initialRoute]
	});

	return render(<RouterProvider router={memoryRouter} />);
};

export default renderMemoryRouter;
