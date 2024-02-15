const initialState = {
	name: '',
	email: '',
	password: '',
	titleName: '',
	titleEmail: '',
	titlePassword: '',
}

export const valueReducer = (state = initialState, action) => {
	switch (action.type) {
		case 'NAME_VALUE':
			return {
				...state,
				name: action.payload,
			}
		case 'EMAIL_VALUE':
			return {
				...state,
				email: action.payload,
			}
		case 'PASSWORD_VALUE':
			return {
				...state,
				password: action.payload,
			}
		case 'NAME_TITLE':
			return {
				...state,
				titleName: action.payload,
			}
		case 'EMAIL_TITLE':
			return {
				...state,
				titleEmail: action.payload,
			}
		case 'PASSWORD_TITLE':
			return {
				...state,
				titlePassword: action.payload,
			}
      case 'CLEAR_INPUT':
        return {
          ...state,
          name: '',
          email: '',
          password: '',
        }
		default:
			return state
	}
}
