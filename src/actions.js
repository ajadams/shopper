// actions.js

export const updateForm = updates => {
	return {
		type: 'SHOPPER:UPDATE_FORM',
		payload: updates
	}
}

export const updateUser = () => {
	return {
		type: 'SHOPPER:UPDATE_USER',
		payload: {}
	}
}

export const saveShopper = () => {
	return {
		type: 'SHOPPER:SAVE',
		payload: {
			save_done: true,
		}
	}
}

export const logout = () => {
	return {
		type: 'SHOPPER:LOGOUT',
		payload: {
			save_done: false,
		}
	}
}

export const login = () => {
	return {
		type: 'SHOPPER:LOGIN',
		payload: {}
	}
}