import React from 'react';
import Link from 'next/link';

const PortfolioItem = ({ type, imgSrc, title, category, slug, client }) => {
	return (
		// <div className={`col-lg-4 col-md-6 portfolio-item filter-${type}`}>
		// 	<div className="portfolio-img">
		// 		<img src={imgSrc} className="img-fluid" alt="" />
		// 	</div>
		// 	<div className="portfolio-info">
		// 		<h4>{title}</h4>
		// 		<p>{category}</p>
		// 		<a href={imgSrc} data-gall="portfolioGallery" className="venobox preview-link" title={title}>
		// 			<i className="bx bx-plus" />
		// 		</a>
		// 		<Link href={`/project/${slug}`}>
		// 			<a className="details-link" title="More Details">
		// 				<i className="bx bx-link" />
		// 			</a>
		// 		</Link>
		// 	</div>
		// </div>
		<div className="col-xs-12 col-sm-4">
			<div
				className="card"
				style={{
					background: `linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.2)), url(${imgSrc})`
				}}
			>
				<div className="card-category">{category}</div>
				<div className="card-description">
					<h2>{title}</h2>
					<p>{client}</p>
				</div>
				<Link href={`/project/${slug}`}>
					<a className="card-link" />
				</Link>
			</div>
		</div>
	);
};

export default PortfolioItem;
