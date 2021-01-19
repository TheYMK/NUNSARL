import React, { useState } from 'react';
import Link from 'next/link';

function Banner({ title }) {
	return (
		<React.Fragment>
			<div className="single-service">
				<div className="header-text">
					<div className="container">
						<div className="row">
							<div className="offset-xl-3 col-xl-6 offset-lg-2 col-lg-8 col-md-12 col-sm-12">
								<h1>{title}</h1>
							</div>
						</div>
					</div>
				</div>
			</div>
		</React.Fragment>
	);
}

export default Banner;
