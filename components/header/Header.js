import React from 'react';
import Link from 'next/link';
import { useSelector, useDispatch } from 'react-redux';
import firebase from 'firebase';
import Router from 'next/router';
import { toast } from 'react-toastify';

function Header() {
	const dispatch = useDispatch();

	const { isSidebarOpen, user } = useSelector((state) => ({ ...state }));

	const handleOpenSidebar = (e) => {
		dispatch({
			type: 'SET_VISIBLE',
			payload: true
		});
	};

	const logout = () => {
		firebase.auth().signOut();

		dispatch({
			type: 'LOGOUT',
			payload: null
		});
		toast.success("You've been logged out");
		Router.push('/');
	};

	return (
		<React.Fragment>
			<header className="header-area header-sticky">
				<div className="container">
					<div className="row">
						<div className="col-12">
							<nav className="main-nav">
								{/* Logo Start */}

								<a className="logo" href="/">
									<img
										src="/static/images/nunlogo.png"
										alt="Nun Logo"
										style={{ marginTop: '-15px' }}
									/>
									{/* <h4 style={{ color: '#eb444d', fontWeight: '700' }}>NUN SARL</h4> */}
								</a>

								{/* Logo End */}
								{/* Menu Start */}
								<ul className="nav">
									<li>
										<a className="" href="/#services">
											Services
										</a>
									</li>
									<li>
										<a className="" href="/#about">
											À Propos
										</a>
									</li>
									<li>
										<a className="" href="/#mission">
											Notre Mission
										</a>
									</li>
									<li>
										<a className="" href="/#formations">
											Nos Formations
										</a>
									</li>
									<li>
										<a href="/#portfolio">Nos Réalisation</a>
									</li>
									<li>
										<a className="" href="/#team">
											L'Équipe
										</a>
									</li>

									<li>
										<a className="" href="/#contact">
											Contactez Nous
										</a>
									</li>
									{/* {!user && (
										<li className="">
											<Link href="/auth/register">
												<a>Register</a>
											</Link>
										</li>
									)} */}

									{/* {!user && (
										<li className="">
											<Link href="/auth/register">
												<a>Register</a>
											</Link>
										</li>
									)} */}
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
