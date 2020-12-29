import React from 'react';
import Header from './header/Header';
import Sidebar from './header/Sidebar';
import Preloader from './preloader/Preloader';
import 'antd/dist/antd.css';

function Layout({ children }) {
	return (
		<React.Fragment>
			{/* <Preloader /> */}
			<Sidebar />
			<Header />
			{children}
		</React.Fragment>
	);
}

export default Layout;
