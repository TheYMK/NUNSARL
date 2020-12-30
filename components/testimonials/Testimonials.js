import React from 'react';
import Brands from './Brands';
import TestimonialItem from './TestimonialItem';

function Testimonials() {
	return (
		<React.Fragment>
			<div className="section" id="testimonials">
				<div className="container">
					<div className="row">
						<div className="col-lg-12">
							<div className="center-heading">
								<h2 className="section-title">Ce qu'en pense nos partenaires?</h2>
							</div>
							<div className="offset-lg-3 col-lg-6">
								<div className="center-text">
									<p>Ils ont choisis de nous faire confiance, et voici ce qu'ils en pensent.</p>
								</div>
							</div>
							{/* <Brands /> */}
							{/* Testimonial Item Start */}
							<div className="row">
								<TestimonialItem
									message={'the review will be here'}
									imgSrc={''}
									name={'Kaym Kassai'}
									company={'NUN SARL'}
									jobTitle={'Web Developer'}
								/>
								<TestimonialItem
									message={'the review will be here'}
									imgSrc={''}
									name={'Kaym Kassai'}
									company={'NUN SARL'}
									jobTitle={'Web Developer'}
								/>
								<TestimonialItem
									message={'the review will be here'}
									imgSrc={''}
									name={'Kaym Kassai'}
									company={'NUN SARL'}
									jobTitle={'Web Developer'}
								/>
							</div>
							{/* Testimonial Item End */}
						</div>
					</div>
				</div>
			</div>
		</React.Fragment>
	);
}

export default Testimonials;
