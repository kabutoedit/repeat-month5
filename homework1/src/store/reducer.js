const initialState = {
	count: 0,
}

export const counterReducer = (state = initialState, action) => {
	switch (action.type) {
		case 'INCREMENT':
			return {
				...state,
				count: state.count + 1,
			}
		case 'DECREMENT':
			return {
				...state,
				count: state.count - 1,
			}
      case 'RESET':
        return {
          ...state,
          count: 0
        }
        case 'PLUS_TEN':
          return {
            ...state,
            count: state.count + 10
          }
		default:
			return state
	}
}
