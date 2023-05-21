import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

const NotFound = () => {
	const navigate = useNavigate();

	useEffect(() => {
		setTimeout(() => {
			navigate("/", { state: "veio de 404" })
		}, 1000)
	})
	return (
		<div>NotFound</div>
	)
}

export default NotFound