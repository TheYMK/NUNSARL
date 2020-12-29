import React from 'react';
import Layout from '../../components/Layout';
import Link from 'next/link';
import ServicesInfoLeft from '../../components/services/ServiceInfoLeft';
import ServiceInfoRight from '../../components/services/ServiceInfoRight';
import ServiceBanner from '../../components/services/ServiceBanner';

function FirstServicePage() {
	return (
		<React.Fragment>
			<Layout />
			{/* Banner */}
			<ServiceBanner title={'Conseil & stratégie'} />

			<ServicesInfoLeft
				title={'title here'}
				description={'description here'}
				imgSrc={'/static/images/left-img.jpg'}
			/>
			<ServiceInfoRight
				title={'title here'}
				description={'description here'}
				imgSrc={'/static/images/right-img.jpg'}
			/>
		</React.Fragment>
	);
}

export default FirstServicePage;
