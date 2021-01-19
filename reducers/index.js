import { combineReducers } from 'redux';
import { sidebarReducer } from './sidebarReducer';
import { userReducer } from './userReducer';
const rootReducer = combineReducers({
	isSidebarOpen: sidebarReducer,
	user: userReducer
});

export default rootReducer;
