import { FETCH_DASHBOARD_DATA } from '../actions/types';

const initialState = {};

const dashBoardDataReducer = (state = initialState, action) => {
	const { payload, type } = action;
	switch (type) {
		case FETCH_DASHBOARD_DATA :
			return {...state, data: payload}
		default :
			return state;
	}
}

export default dashBoardDataReducer;