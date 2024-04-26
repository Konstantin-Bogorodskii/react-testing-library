import { RouterProvider, createMemoryRouter } from 'react-router-dom';
import routes from '../../router/routes';
import { render } from '@testing-library/react';

import { Provider } from 'react-redux';
import store from '../../store/store';

const renderMemoryRouter = (initialRoute = '/') => {
	const memoryRouter = createMemoryRouter(routes, {
		initialEntries: [initialRoute]
	});

	return render(
		<Provider store={store}>
			<RouterProvider router={memoryRouter} />
		</Provider>
	);
};

export default renderMemoryRouter;
