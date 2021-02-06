import React from 'react';
import Link from 'next/link';
import { FaTimes } from 'react-icons/fa';
import { useSelector, useDispatch } from 'react-redux';

function Sidebar() {
	const dispatch = useDispatch();

	const { isSidebarOpen } = useSelector((state) => ({ ...state }));

	const handleCloseSidebar = (e) => {
		dispatch({
			type: 'SET_VISIBLE',
			payload: false
		});
	};

	return (
		<React.Fragment>
			<aside
				className="sidebar__container"
				onClick={handleCloseSidebar}
				style={{ opacity: `${isSidebarOpen ? '100%' : '0'}`, top: `${isSidebarOpen ? '0' : '-100%'}` }}
			>
				<div className="sidebar__icon">
					<FaTimes className="sidebar__closeicon" onClick={handleCloseSidebar} />
				</div>
				<div className="sidebar__wrapper">
					<ul className="sidebar__menu">
						<a className="sidebar__link" href="/#services" onClick={handleCloseSidebar}>
							Services
						</a>

						<a className="sidebar__link" href="/#about" onClick={handleCloseSidebar}>
							À Propos
						</a>

						<a className="sidebar__link" href="/#mission" onClick={handleCloseSidebar}>
							Notre Mission
						</a>

						<a className="sidebar__link" href="/#formations" onClick={handleCloseSidebar}>
							Nos Formations
						</a>

						<a className="sidebar__link" href="/#portfolio" onClick={handleCloseSidebar}>
							Nos Réalisation
						</a>

						<a className="sidebar__link" href="/#team" onClick={handleCloseSidebar}>
							L'Équipe
						</a>
					</ul>
					<div className="sidebar__btnWrap" onClick={handleCloseSidebar}>
						<a className="sidebar__routelink" href="/#contact">
							Contact
						</a>
					</div>
				</div>
			</aside>
		</React.Fragment>
	);
}

export default Sidebar;
