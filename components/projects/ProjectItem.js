import React from 'react';
import Link from 'next/link';

function ProjectItem({ title, description }) {
	return (
		<React.Fragment>
			<div className="col-lg-4 col-md-6 col-sm-12">
				<div className="blog-post-thumb">
					<div className="img">
						<img src="/static/images/blog-item-01.png" alt="" />
					</div>
					<div className="blog-content">
						<h3>
							<Link href="#">
								<a>{title}</a>
							</Link>
						</h3>
						<div className="text">{description}</div>
						<a href="#" className="main-button">
							Voir plus
						</a>
					</div>
				</div>
			</div>
		</React.Fragment>
	);
}

export default ProjectItem;
