import { useRouteError } from 'react-router-dom'

function ErrorPage() {
	const error = useRouteError()
	console.error(error)

	return (
		<main>
			<h1>I'M DISPLEASED!!!</h1>
		</main>
)}

export default ErrorPage
