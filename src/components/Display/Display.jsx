import React from 'react';
import './display.css';

const Display = ({ text, value }) => {
	return (
		<div className='display-main-container'>
			<div className='display-stacked-text'>
				<div>{text}</div>
				<div>/ person</div>
			</div>
			<div className='display-total'>
				<h1>{value ? '$' + value.toFixed(2).toString() : '$0.00'}</h1>
			</div>
		</div>
	);
};

export default Display;
