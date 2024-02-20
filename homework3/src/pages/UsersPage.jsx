// import React, { useEffect } from 'react'
// import { useDispatch, useSelector } from 'react-redux'
// import { getUsers, getUsers2 } from '../store/userSlice'

// export default function UsersPage() {
// 	const dispatch = useDispatch()
// 	const users = useSelector(state => state.users.users)

// 	useEffect(() => {
// 		dispatch(getUsers())
// 	}, [])

// 	const pageChange = id => {
// 		if (id === 1) {
// 			dispatch(getUsers())
// 		} else if (id === 2) {
// 			dispatch(getUsers2())
// 		}
// 	}

// 	return (
// 		<div className='usersPage'>
// 			<h1>UsersPage</h1>

// 			<div style={{ display: 'flex', flexWrap: 'wrap', gap: '20px' }}>
// 				{users &&
// 					users.map(user => (
// 						<div key={user.id}>
// 							<img src={user.avatar} alt={user.first_name} />
// 							<p>{user.id}</p>
// 							<h3>
// 								{user.first_name} {user.last_name}
// 							</h3>
// 							<p>{user.email}</p>
// 						</div>
// 					))}
// 			</div>

// 			<div className={'pages'}>
// 				{[1, 2].map(id => (
// 					<button onClick={() => pageChange(id)} key={id}>
// 						{id}
// 					</button>
// 				))}
// 			</div>
// 		</div>
// 	)
// }

import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getUsers, getUsers2 } from '../store/userSlice'

export default function UsersPage() {
	const dispatch = useDispatch()
	const users = useSelector(state => state.users.users)

	useEffect(() => {
		dispatch(getUsers())
	}, [dispatch])

	const fetchPage1 = () => {
		dispatch(getUsers())
	}

	const fetchPage2 = () => {
		dispatch(getUsers2())
	}

	return (
		<div className='usersPage'>
			<h1>UsersPage</h1>

			<div style={{ display: 'flex', flexWrap: 'wrap', gap: '20px' }}>
				{users &&
					users.map(user => (
						<div key={user.id}>
							<img src={user.avatar} alt={user.first_name} />
							<p>{user.id}</p>
							<h3>
								{user.first_name} {user.last_name}
							</h3>
							<p>{user.email}</p>
						</div>
					))}
			</div>

			<div className={'pages'}>
				<button onClick={fetchPage1}>1</button>
				<button onClick={fetchPage2}>2</button>
			</div>
		</div>
	)
}
