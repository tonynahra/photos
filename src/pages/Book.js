import React from 'react'
import { useOutletContext, useParams } from 'react-router-dom'

const Book = () => {
	const { id } = useParams();
	const { hello } = useOutletContext();
	return (
		<>
			<div>Book with id of {id} </div>
			shared data: {hello}
		</>
	)
}

export default Book