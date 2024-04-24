import { useParams } from 'react-router-dom';

const UserDetailPage = () => {
	const { id } = useParams();

	return <div data-testid={`user-detail-page-${id}`}>Detail Page for User {id}</div>;
};
export default UserDetailPage;
