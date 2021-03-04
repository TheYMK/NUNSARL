import React, { useState } from 'react';
import Slider from 'react-slick';

function SampleNextArrow(props) {
	const { className, style, onClick } = props;
	return (
		<div className={className} style={{ ...style, display: 'block' }} onClick={onClick}>
			<i className="fas fa-arrow-circle-right" />
		</div>
	);
}

function SamplePrevArrow(props) {
	const { className, style, onClick } = props;
	return (
		<div className={className} style={{ ...style, display: 'block' }} onClick={onClick}>
			<i className="fas fa-arrow-circle-left" />
		</div>
	);
}

const PortfolioDetails = ({ project }) => {
	const settings = {
		dots: true,
		infinite: true,
		arrows: true,
		speed: 500,
		slidesToShow: 1,
		slidesToScroll: 1,
		accessibility: true,
		arrows: true,
		edgeFriction: 1,
		nextArrow: <SampleNextArrow />,
		prevArrow: <SamplePrevArrow />
	};
	return (
		<section id="portfolio-details" className="portfolio-details">
			<div className="container">
				<div className="d-flex justify-content-center">
					<Slider {...settings} className="w-50">
						{project.images.length > 0 ? (
							project.images.map((img, i) => (
								<div key={i}>
									<img src={img.url} className="img-fluid" alt="project image" />
								</div>
							))
						) : (
							<img src={'/static/img/noimage.jpg'} className="img-fluid" alt="project image" />
						)}
						{/* <div>
							<img src="/static/img/portfolio/portfolio-details-1.jpg" className="img-fluid" alt="" />
						</div>
						<div>
							<img src="/static/img/portfolio/portfolio-details-2.jpg" className="img-fluid" alt="" />
						</div>
						<div>
							<img src="/static/img/portfolio/portfolio-details-3.jpg" className="img-fluid" alt="" />
						</div> */}
					</Slider>
				</div>

				<div className="portfolio-info mt-5">
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
