import loginData from '../data/loginData.json';
import dashboardData from '../data/dashboard.json';
import { LOGIN, FETCH_DASHBOARD_DATA } from './types';

export const login = (payload) => async dispatch => {
	const loginObj = {};
	if (loginData.username === payload.email
			&& loginData.password === payload.password) {
		loginObj.isLoginValid = true;
		loginObj.invalidCredentials = false;
	} else {
		loginObj.isLoginValid = false;
		loginObj.invalidCredentials = true;
	}
	dispatch({type: LOGIN, payload: loginObj});
}

export const fetchDashBoardData = payload => async dispatch => {
	dispatch({type: FETCH_DASHBOARD_DATA, payload: dashboardData});
}

export const signOut = payload => async dispatch => {
	dispatch({type: LOGIN, payload});
}