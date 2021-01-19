import React from 'react';
import PortfolioItem from './PortfolioItem';

const Portfolio = ({ projects }) => {
	return (
		<section id="portfolio" className="portfolio section">
			<div className="container mt-5">
				<div className="center-heading">
					<div className="section-title" data-aos="zoom-out">
						<h2>Portfolio</h2>
					</div>
				</div>

				<ul id="portfolio-flters" className="d-flex justify-content-end" data-aos="fade-up">
					<li data-filter="*" className="filter-active">
						All
					</li>
					<li data-filter=".filter-graphisme">Graphisme</li>
					<li data-filter=".filter-web">Web</li>
				</ul>

				<div className="row portfolio-container" data-aos="fade-up">
					{projects.map((p) => (
						<PortfolioItem
							type={p.category.toLowerCase()}
							key={p._id}
							imgSrc={p.images.length > 0 ? p.images[0].url : '/static/images/noimage.jpg'}
							title={p.name}
							category={p.category}
							slug={p.slug}
						/>
					))}
				</div>
			</div>
		</section>
	);
};

export default Portfolio;
