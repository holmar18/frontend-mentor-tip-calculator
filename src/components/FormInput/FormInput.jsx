import './Forminput.css';
import React from 'react';

const FormInput = ({
	Icon,
	defaultVal,
	label,
	type,
	handleInput,
	errType,
	error,
	errorMsg,
	style,
	value,
}) => {
	return (
		<div className='input-container' style={style && style}>
			{label && (
				<div className='label-container'>
					<label className='input-label'>{label}</label>
					{error && <label className='input-label'>{errorMsg}</label>}
				</div>
			)}
			<div className='input-icons'>
				{Icon && Icon}
				<input
					className={error ? 'input-field input-field-error' : 'input-field'}
					placeholder={defaultVal}
					type={type}
					value={value ? value : ''}
					onChange={(e) => handleInput(errType, e.target.value)}
				/>
			</div>
		</div>
	);
};

export default FormInput;
