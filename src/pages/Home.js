import React from 'react'
import { useLocation } from 'react-router-dom'

const Home = () => {
	const location = useLocation();
	return (
		<div>Home {location.state ? location.state : " State"}</div>
	)
}

export default Home