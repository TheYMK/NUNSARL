import React, { useState } from 'react';
import Carousel from 'react-elastic-carousel';

const PortfolioDetails = ({ project }) => {
	const images =
		project.images.length > 0 ? (
			project.images.map((img, i) => <img src={img.url} className="img-fluid" alt="project image" />)
		) : (
			<img src={'/static/images/noimage.jpg'} className="img-fluid" alt="project image" />
		);

	return (
		<section id="portfolio-details" className="portfolio-details">
			<div className="container-fluid">
				<div className="mb-3">
					<Carousel
						easing="cubic-bezier(1,.15,.55,1.54)"
						tiltEasing="cubic-bezier(0.110, 1, 1.000, 0.210)"
						transitionMs={700}
					>
						{project.images.length > 0 ? (
							project.images.map((img, i) => (
								<img
									src={img.url}
									className="img-fluid"
									alt="project image"
									style={{ width: '500px' }}
								/>
							))
						) : (
							<img
								src={'/static/images/noimage.jpg'}
								className="img-thumbnail"
								alt="project image"
								style={{ width: '50px' }}
							/>
						)}
					</Carousel>
				</div>

				<div className="portfolio-info">
					<h3>À propos</h3>
					<ul>
						<li>
							<strong>Categorie</strong>: {project.category}
						</li>
						<li>
							<strong>Client</strong>: {project.client}
						</li>
						<li>
							<strong>Date de réalisation</strong>: {project.date}
						</li>
						<li>
							<strong>Lien utile</strong>: <a href={project.url}>{project.url}</a>
						</li>
					</ul>
				</div>

				<div className="portfolio-description">
					<h2>Déscription de la mission</h2>
					<p>{project.description}</p>
				</div>
			</div>
		</section>
	);
};

export default PortfolioDetails;
