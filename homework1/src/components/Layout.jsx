import React from 'react'
import { Outlet } from 'react-router-dom'

export const Layout = () => {
	return (
		<>
			<Outlet />
			<p>Made by Kolya</p>
		</>
	)
}
