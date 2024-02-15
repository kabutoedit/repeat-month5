const initialState = {
	name: '',
	email: '',
	password: '',
	titleName: 'old title',
	titleEmail: 'old email',
	titlePassword: 'old password',
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
		default:
			return state
	}
}
