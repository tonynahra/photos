import React from 'react'
import { useLocation } from 'react-router-dom'

const Home = () => {
	const location = useLocation();
	return (
		<div>Home {location.state ? location.state : "nada"}</div>
	)
}

export default Home