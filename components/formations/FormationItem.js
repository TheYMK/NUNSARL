import React from 'react';
import Link from 'next/link';

function FormationItem({ title, description, icon, firstColumn, secondColumn }) {
	return (
		<React.Fragment>
			<div className="col-lg-6 col-md-6 col-sm-12 col-12">
				<Link href="/">
					<a className="mini-box">
						<i className={icon} style={{ marginTop: '10px', fontSize: '34px', color: '#eb444d' }}>
							{/* <img src="/static/images/work-process-item-01.png" alt="" /> */}
						</i>
						<strong>{title}</strong>
						<span>
							<div className="row">
								<div className="col-md-6">
									<ul>{firstColumn.map((t, i) => <li key={i}>{t}</li>)}</ul>
								</div>
								<div className="col-md-6">
									<ul>{secondColumn.map((t, i) => <li key={i}>{t}</li>)}</ul>
								</div>
							</div>
						</span>
					</a>
				</Link>
			</div>
		</React.Fragment>
	);
}

export default FormationItem;
