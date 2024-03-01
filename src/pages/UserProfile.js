import { useParams, useOutletContext } from 'react-router-dom'

const UserProfile = () => {
	const params = useParams()
	const users = useOutletContext()
	
	const user = users.find(user => user.id === parseInt(params.id)) 

	if (!user.name) {
		<h1>Loading...</h1>
	}

	return (
		<aside>
			<h1>{user.name}</h1>
		</aside>
	)
}

export default UserProfile
