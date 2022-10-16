import React from 'react';
import './btn.css';

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
