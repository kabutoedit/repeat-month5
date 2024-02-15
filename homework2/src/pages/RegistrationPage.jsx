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
		const userData = {
			name: nameValue,
			// email: emailValue,
			// password: passwordValue,
		}
		dispatch({ type: 'NAME_TITLE', payload: nameTitle })
		dispatch({ type: 'EMAIL_TITLE', payload: emailTitle })
		dispatch({ type: 'PASSWORD_TITLE', payload: passwordTitle })
	}

	console.log(nameTitle, emailTitle, passwordTitle)

	return (
		<div>
			<h2>Registration</h2>
			<h2>{nameTitle}</h2>
			<h2>{emailTitle}</h2>
			<h2>{passwordTitle}</h2>
			<div>
				<input
					type='text'
					placeholder='name'
					onChange={e =>
						dispatch({ type: 'NAME_VALUE', payload: e.target.value })
					}
				/>
				<input
					type='email'
					placeholder='email'
					onChange={e =>
						dispatch({ type: 'EMAIL_VALUE', payload: e.target.value })
					}
				/>
				<input
					type='password'
					placeholder='password'
					onChange={e =>
						dispatch({ type: 'PASSWORD_VALUE', payload: e.target.value })
					}
				/>
				<button onClick={submit}>Submit</button>
				<h3>{nameValue}</h3>
				<h3>{emailValue}</h3>
				<h3>{passwordValue}</h3>
			</div>
		</div>
	)
}

export default RegistrationPage
