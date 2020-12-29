import React from 'react';
import Link from 'next/link';
import { useSelector, useDispatch } from 'react-redux';

function Header() {
	const dispatch = useDispatch();

	const { isSidebarOpen } = useSelector((state) => ({ ...state }));

	const handleOpenSidebar = (e) => {
		dispatch({
			type: 'SET_VISIBLE',
			payload: true
		});
	};

	return (
		<React.Fragment>
			<header className="header-area header-sticky">
				<div className="container">
					<div className="row">
						<div className="col-12">
							<nav className="main-nav">
								{/* Logo Start */}
								<Link href="/">
									<a className="logo">
										<img
											src="/static/images/nunlogo.png"
											alt="Softy Pinko"
											style={{ marginTop: '-15px' }}
										/>
										{/* <h4 style={{ color: '#eb444d', fontWeight: '700' }}>NUN SARL</h4> */}
									</a>
								</Link>
								{/* Logo End */}
								{/* Menu Start */}
								<ul className="nav">
									<li>
										<Link href="/#services">
											<a className="">Services</a>
										</Link>
									</li>
									<li>
										<Link href="/#about">
											<a className="">À Propos</a>
										</Link>
									</li>
									<li>
										<Link href="/#formations">
											<a className="">Nos Formations</a>
										</Link>
									</li>
									<li>
										<Link href="/#team">
											<a className="">L'Équipe</a>
										</Link>
									</li>
									<li>
										<Link href="/#projects">
											<a className="">Nos Réalisation</a>
										</Link>
									</li>
									<li>
										<Link href="/#contact">
											<a className="">Contactez Nous</a>
										</Link>
									</li>
								</ul>
								<div className="menu-trigger" onClick={handleOpenSidebar}>
									<span>Menu</span>
								</div>
							</nav>
						</div>
					</div>
				</div>
			</header>
		</React.Fragment>
	);
}

export default Header;
