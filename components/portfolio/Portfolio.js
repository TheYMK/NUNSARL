import React from 'react';
import PortfolioItem from './PortfolioItem';

const Portfolio = ({ projects }) => {
	return (
		<section id="portfolio" className="portfolio section">
			<div className="container mt-5">
				<div className="center-heading">
					<div className="section-title">
						<h2 style={{ fontWeight: '700' }}>Nos Réalisations</h2>
					</div>
				</div>

				<ul id="portfolio-flters" className="d-flex justify-content-end">
					<li data-filter="*" className="filter-active">
						All
					</li>
					<li data-filter=".filter-graphisme">Graphisme</li>
					<li data-filter=".filter-web">Web</li>
				</ul>

				<div className="row portfolio-container">
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
