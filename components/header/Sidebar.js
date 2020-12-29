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
						<Link href="/#services" onClick={handleCloseSidebar}>
							<a className="sidebar__link">Services</a>
						</Link>
						<Link href="/#about" onClick={handleCloseSidebar}>
							<a className="sidebar__link">À Propos</a>
						</Link>
						<Link href="/#formations" onClick={handleCloseSidebar}>
							<a className="sidebar__link">Nos Formations</a>
						</Link>
						<Link href="/#team" onClick={handleCloseSidebar}>
							<a className="sidebar__link">L'Équipe</a>
						</Link>
						<Link href="/#projects" onClick={handleCloseSidebar}>
							<a className="sidebar__link">Nos Réalisation</a>
						</Link>
					</ul>
					<div className="sidebar__btnWrap" onClick={handleCloseSidebar}>
						<Link href="/#contact">
							<button className="sidebar__routelink">Contact</button>
						</Link>
					</div>
				</div>
			</aside>
		</React.Fragment>
	);
}

export default Sidebar;
