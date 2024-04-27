import RootLayout from '../layouts/RootLayout';

import AboutPage from '../pages/AboutPage';
import ErrorPage from '../pages/ErrorPage';
import MainPage from '../pages/MainPage';
import UserDetailPage from '../pages/UserDetailPage';
import HelloWorld from './../pages/HelloWorld';

import Users from '../components/users/Users';
import UsersForTests from '../components/usersForTests/UsersForTests.jsx';

const routes = [
	{
		path: '/',
		element: <RootLayout />,
		errorElement: <ErrorPage />,
		children: [
			{
				index: true,
				element: <MainPage />
			},
			{
				path: 'about',
				element: <AboutPage />
			},
			{
				path: 'users',
				children: [
					{
						index: true,
						element: <Users />
					},
					{
						path: ':id',
						element: <UserDetailPage />
					}
				]
			},
			{
				path: 'users-for-tests',
				element: <UsersForTests />
			},
			{
				path: 'hello-world',
				element: <HelloWorld />
			}
		]
	},
	{
		path: '*',
		element: <ErrorPage />
	}
];

export default routes;
