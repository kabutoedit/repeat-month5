import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

const RegistrationPage = () => {
	const dispatch = useDispatch()
	const nameValue = useSelector(state => state.state.name)
	const emailValue = useSelector(state => state.state.email)
	const passwordValue = useSelector(state => state.state.password)
	const nameTitle = useSelector(state => state.state.titleName)
	const emailTitle = useSelector(state => state.state.titleEmail)
	const passwordTitle = useSelector(state => state.state.titlePassword)

	const submit = () => {
		dispatch({ type: 'NAME_VALUE', payload: nameValue })
		dispatch({ type: 'EMAIL_VALUE', payload: emailValue })
		dispatch({ type: 'PASSWORD_VALUE', payload: passwordValue })
		dispatch({ type: 'NAME_TITLE', payload: nameValue })
		dispatch({ type: 'EMAIL_TITLE', payload: emailValue })
		dispatch({ type: 'PASSWORD_TITLE', payload: passwordValue })
		dispatch({ type: 'CLEAR_INPUT' })
	}

	return (
		<div>
			<h2>Registration</h2>
			<div>
				<input
					type='text'
					placeholder='name'
					value={nameValue}
					onChange={e =>
						dispatch({ type: 'NAME_VALUE', payload: e.target.value })
					}
				/>
				<input
					type='email'
					placeholder='email'
					value={emailValue}
					onChange={e =>
						dispatch({ type: 'EMAIL_VALUE', payload: e.target.value })
					}
				/>
				<input
					type='password'
					placeholder='password'
					value={passwordValue}
					onChange={e =>
						dispatch({ type: 'PASSWORD_VALUE', payload: e.target.value })
					}
				/>
				<button onClick={submit}>Submit</button>

				<h3>Name:{nameTitle}</h3>
				<h3>Email:{emailTitle}</h3>
				<h3>Password:{passwordTitle}</h3>
			</div>
		</div>
	)
}

export default RegistrationPage
