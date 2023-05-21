import React from 'react'
import { Link } from 'react-router-dom'

const BookList = () => {
	return (
		<>
			<div>BookList</div>
			<ul>
				<Link to="/books/1">Book 1</Link>
			</ul>
			<ul>
				<Link to="/books/2">Book 2</Link>
			</ul>
		</>
	)
}

export default BookList