import { Route, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';

import MainPage from '../pages/MainPage';
import AboutPage from '../pages/AboutPage';
import ErrorPage from '../pages/ErrorPage';

const router = createBrowserRouter(
	createRoutesFromElements(
		<>
			<Route
				path="/"
				element={<MainPage />}
			/>

			<Route
				path="/about"
				element={<AboutPage />}
			/>
			<Route
				path="*"
				element={<ErrorPage />}
			/>
		</>
	)
);

export default router;
