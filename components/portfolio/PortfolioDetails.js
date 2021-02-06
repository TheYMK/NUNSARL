import React from 'react';
import Slider from 'react-slick';

const settings = {
	dots: true,
	infinite: true,
	speed: 500,
	slidesToShow: 1,
	slidesToScroll: 1,
	swipe: true
};

const PortfolioDetails = ({ project }) => {
	return (
		<section id="portfolio-details" className="portfolio-details">
			<div className="container">
				<div className="portfolio-details-container">
					{/* <div className="owl-carousel portfolio-details-carousel">
						<img src="/static/img/portfolio/portfolio-details-1.jpg" className="img-fluid" alt="" />
						<img src="/static/img/portfolio/portfolio-details-2.jpg" className="img-fluid" alt="" />
						<img src="/static/img/portfolio/portfolio-details-3.jpg" className="img-fluid" alt="" />
					</div> */}
					<Slider {...settings} className="">
						{project.images.length > 0 ? (
							project.images.map((img, i) => (
								<div key={i}>
									<img src={img.url} className="img-fluid" alt="project image" />
								</div>
							))
						) : (
							<img src={'/static/images/noimage.jpg'} className="img-fluid" alt="project image" />
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
