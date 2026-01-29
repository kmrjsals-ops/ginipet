import React from 'react';

function Main(props) {
	return (
		<div>
			<img src={`${process.env.PUBLIC_URL}/images/main1.jpg`} alt='main1'/>
			<img src={`${process.env.PUBLIC_URL}/images/shop.jpg`} alt='main2'/>
			<img src={`${process.env.PUBLIC_URL}/images/in_star.jpg`} alt='main4'/>
		</div>
	);
}

export default Main;