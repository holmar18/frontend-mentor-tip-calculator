import React from 'react';
import './btn.css';

/* 
	text - Button text
	handleActive - function to toggle active state of the Button
	active - boolean value to activate the active state
*/
const Btn = ({ text, handleActive, active }) => {
	return (
		<>
			<button
				className={active ? 'tip-btn tip-btn-active' : 'tip-btn'}
				onClick={() => handleActive(text)}
			>
				{text}
			</button>
		</>
	);
};

export default Btn;
