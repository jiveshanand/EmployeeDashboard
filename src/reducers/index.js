import { combineReducers } from 'redux';
import loginReducer from './loginReducer';
import dashBoardDataReducer from './dashBoardReducer';


export default combineReducers({
	login: loginReducer,
	dashboardData: dashBoardDataReducer
})