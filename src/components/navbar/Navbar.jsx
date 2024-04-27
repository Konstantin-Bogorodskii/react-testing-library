import { Link } from 'react-router-dom';

const Navbar = () => {
	return (
		<div style={{ display: 'flex', alignItems: 'center', gap: '20px', marginBottom: '20px' }}>
			<Link
				to="/"
				data-testid="main-link">
				Main Page
			</Link>
			<Link
				to="/about"
				data-testid="about-link">
				About Page
			</Link>
			<Link
				to="/users"
				data-testid="users-link">
				Users
			</Link>
			<Link
				to="/hello-world"
				data-testid="hello-world-link">
				Hello World
			</Link>
		</div>
	);
};
export default Navbar;
