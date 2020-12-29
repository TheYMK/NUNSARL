import React from 'react';
import Link from 'next/link';

function ServiceItem({ title, icon, link }) {
	return (
		<React.Fragment>
			<div
				className="col-lg-4 col-md-6 col-sm-6 col-12"
				data-scroll-reveal="enter bottom move 50px over 0.6s after 0.2s"
			>
				<div className="features-small-item">
					<div className="icon">
						<i className={icon} />
					</div>
					<h5 className="features-title">{title}</h5>

					<p>
						<Link href={link}>
							<a className="text-center">Cliquez pour en savoir plus</a>
						</Link>
					</p>
				</div>
			</div>
		</React.Fragment>
	);
}

export default ServiceItem;
