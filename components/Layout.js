import React from 'react';
import Header from './header/Header';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Sidebar from './header/Sidebar';
import Preloader from './preloader/Preloader';
import 'react-phone-number-input/style.css';

function Layout({ children }) {
	return (
		<React.Fragment>
			{/* <Preloader /> */}
			<Sidebar />
			<Header />
			<ToastContainer />
			{children}
		</React.Fragment>
	);
}

export default Layout;
