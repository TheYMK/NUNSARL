import React from 'react';
import PricingItem from './PricingItem';

function PricingPlans() {
	return (
		<React.Fragment>
			<section className="section colored" id="pricing-plans">
				<div className="container">
					<div className="row">
						<div className="col-lg-12">
							<div className="center-heading">
								<h2 className="section-title">Pricing Plans</h2>
							</div>
						</div>
						<div className="offset-lg-3 col-lg-6">
							<div className="center-text">
								<p>
									Donec vulputate urna sed rutrum venenatis. Cras consequat magna quis arcu elementum,
									quis congue risus volutpat.
								</p>
							</div>
						</div>
					</div>
					{/* Pricing Item Start */}
					<div className="row">
						<PricingItem />
						<PricingItem />
						<PricingItem />
					</div>
					{/* Pricing Item End */}
				</div>
			</section>
		</React.Fragment>
	);
}

export default PricingPlans;
