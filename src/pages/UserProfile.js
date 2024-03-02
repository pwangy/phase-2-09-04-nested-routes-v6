import { useParams, useOutletContext } from 'react-router-dom'

const UserProfile = () => {
	const users = useOutletContext()
	const params = useParams()
	
	const user = users.find(user => user.id === parseInt(params.id)) 

	return (
		<aside>
			<h1>{user.name}</h1>
		</aside>
	)
}

export default UserProfile
