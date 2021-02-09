import React from 'react';
import Link from 'next/link';
import PortfolioItem from './PortfolioItem';

const RelatedProjects = ({ relatedProjects }) => {
	return (
		<React.Fragment>
			<div className="">
				<div className="row">
					{relatedProjects.map((p) => (
						<PortfolioItem
							key={p._id}
							imgSrc={p.images.length > 0 ? p.images[0].url : '/static/images/noimage.jpg'}
							title={p.name}
							category={p.category}
							slug={p.slug}
							client={p.client}
						/>
						// <div className={`col-md-3 portfolio-item`}>
						// 	<div className="portfolio-img">
						// 		<img
						// 			src={p.images.length > 0 ? p.images[0].url : '/static/img/noimage.jpg'}
						// 			className="img-fluid"
						// 			alt=""
						// 		/>
						// 	</div>
						// 	<div className="portfolio-info">
						// 		<h4>{p.name}</h4>
						// 		<p>{p.category}</p>
						// 		<a
						// 			href={p.images.length > 0 ? p.images[0].url : '/static/img/noimage.jpg'}
						// 			data-gall="portfolioGallery"
						// 			className="venobox preview-link"
						// 			title={p.name}
						// 		>
						// 			<i className="bx bx-plus" />
						// 		</a>
						// 		<Link href={`/project/${p.slug}`}>
						// 			<a className="details-link" title="More Details">
						// 				<i className="bx bx-link" />
						// 			</a>
						// 		</Link>
						// 	</div>
						// </div>
					))}
				</div>
			</div>
		</React.Fragment>
	);
};

export default RelatedProjects;
