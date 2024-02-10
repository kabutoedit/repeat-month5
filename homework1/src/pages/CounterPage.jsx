import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

export const CouterPage = () => {
	const dispatch = useDispatch()
	const counter = useSelector(state => state.state.count)

	const lessZero = () => {
		if (counter > 0) {
			dispatch({ type: 'DECREMENT' })
		}
	}

	return (
		<div>
			<h3>{counter}</h3>
			<div className='buttons'>
				<button onClick={lessZero}>-</button>
				<button onClick={() => dispatch({ type: 'INCREMENT' })}>+</button>
				<button onClick={() => dispatch({ type: 'RESET' })}>reset</button>
				<button onClick={() => dispatch({ type: 'PLUS_TEN' })}>+ 10</button>
			</div>
		</div>
	)
}
