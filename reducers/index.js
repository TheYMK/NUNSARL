import { combineReducers } from 'redux';
import { sidebarReducer } from './sidebarReducer';

const rootReducer = combineReducers({
	isSidebarOpen: sidebarReducer
});

export default rootReducer;
