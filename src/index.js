import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.js';
import { RouterProvider } from 'react-router-dom';
import router from './router/router.js';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
	<React.StrictMode>
		<RouterProvider router={router}>
			<App />
		</RouterProvider>
	</React.StrictMode>
);
