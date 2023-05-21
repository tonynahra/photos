import React from 'react'
import { Link, Outlet } from 'react-router-dom';

const BookLayout = () => {
	return (
		<>
			<ul>
				<Link to="/books/1">Book 1</Link>
			</ul>
			<ul>
				<Link to="/books/2">Book 2</Link>
			</ul>
			<Outlet context={{ hello: "alright alright" }} />
		</>

	)
}

export default BookLayout