import React from 'react';

function PricingItem() {
	return (
		<React.Fragment>
			<div
				className="col-lg-4 col-md-6 col-sm-12"
				data-scroll-reveal="enter bottom move 50px over 0.6s after 0.2s"
			>
				<div className="pricing-item">
					<div className="pricing-header">
						<h3 className="pricing-title">Starter</h3>
					</div>
					<div className="pricing-body">
						<div className="price-wrapper">
							<span className="currency">$</span>
							<span className="price">14.50</span>
							<span className="period">monthly</span>
						</div>
						<ul className="list">
							<li className="active">60 GB space</li>
							<li className="active">600 GB transfer</li>
							<li className="active">Pro Design Panel</li>
							<li>15-minute support</li>
							<li>Unlimited Emails</li>
							<li>24/7 Security</li>
						</ul>
					</div>
					<div className="pricing-footer">
						<a href="#" className="main-button">
							Purchase Now
						</a>
					</div>
				</div>
			</div>
		</React.Fragment>
	);
}

export default PricingItem;
