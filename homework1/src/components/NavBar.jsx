import React from 'react'
import { NavLink } from 'react-router-dom'

export const NavBar = () => {
	return (
		<div>
			<nav>
				<ul>
					<li>
						<NavLink to={'/home'}>Home</NavLink>
					</li>
					<li>
						<NavLink to={'/counter'}>Couter</NavLink>
					</li>
				</ul>
			</nav>
		</div>
	)
}
