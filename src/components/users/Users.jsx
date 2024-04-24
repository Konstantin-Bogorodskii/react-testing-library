import axios from 'axios';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Users = () => {
	const [users, setUsers] = useState([]);
	const loadUsers = async () => {
		const resp = await axios.get('https://jsonplaceholder.typicode.com/users');
		setUsers(resp.data);
	};

	useEffect(() => {
		loadUsers();
	}, []);

	return (
		<ul data-testid="users-page">
			{users.map(user => (
				<li key={user.id}>
					<Link
						to={`/users/${user.id}`}
						data-testid="user-item">
						{user.id}. {user.name}
					</Link>
				</li>
			))}
		</ul>
	);
};
export default Users;
