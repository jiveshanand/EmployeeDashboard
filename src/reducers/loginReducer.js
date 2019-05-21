import { LOGIN } from '../actions/types';

const initialState = {};

const loginReducer = (state = initialState, action) => {
	const { payload, type } = action;
	switch (type) {
		case LOGIN :
			return {...state, isValid: payload}
		default :
			return state;
	}
}

export default loginReducer;