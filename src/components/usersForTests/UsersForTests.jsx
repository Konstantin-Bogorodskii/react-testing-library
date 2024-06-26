import { useEffect, useState } from 'react';
import UserForTests from './UserForTests';

const UsersForTest = () => {
	const [users, setUsers] = useState([]);
	const [isLoading, setIsLoading] = useState(false);

	useEffect(() => {
		setIsLoading(true);
		fetch('https://jsonplaceholder.typicode.com/users')
			.then(response => response.json())
			.then(json => {
				setTimeout(() => {
					setUsers(json);
					setIsLoading(false);
				}, 1000);
			});
	}, []);

	const onDelete = id => {
		setUsers(users.filter(user => user.id !== id));
	};

	return (
		<div>
			{isLoading && <h1 id="users-loading">Идет загрузка...</h1>}
			{users.length > 0 && (
				<div id="users-list">
					{users.map(user => (
						<UserForTests
							onDelete={onDelete}
							user={user}
							key={user.id}
						/>
					))}
				</div>
			)}
		</div>
	);
};

export default UsersForTest;
