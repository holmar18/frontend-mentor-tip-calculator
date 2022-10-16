import React from 'react';
// Styles
import './tipCalculator.css';
// Icons
import { BiDollar } from 'react-icons/bi';
import { BsPersonFill } from 'react-icons/bs';
// hooks
import { useTipCalculator } from '../../hooks/useTipCalculator';
// Components
import FormInput from '../../components/FormInput/FormInput';
import Btn from '../../components/Btn/Btn';
import Display from '../../components/Display/Display';

const TipCalculator = () => {
	const {
		handleActive,
		handleInput,
		active,
		errorMsg,
		error,
		total,
		tipAmount,
		handlReset,
	} = useTipCalculator();
	return (
		<>
			<section>
				<FormInput
					Icon={<BiDollar className='icon' />}
					defaultVal={'0'}
					label='Bill'
					type='number'
					handleInput={handleInput}
					errType='bill'
					error={error.bill}
					errorMsg={errorMsg}
				/>
				<div className='tip-btns-container'>
					<label>Select Tip %</label>
					<div className='tip-btn-inner-container'>
						<div className='btn-row'>
							<Btn
								text={'5%'}
								handleActive={handleActive}
								active={active['5%']}
							/>
							<Btn
								text={'10%'}
								handleActive={handleActive}
								active={active['10%']}
							/>
							<Btn
								text={'15%'}
								handleActive={handleActive}
								active={active['15%']}
							/>
						</div>
						<div className='btn-row'>
							<Btn
								text={'25%'}
								handleActive={handleActive}
								active={active['25%']}
							/>
							<Btn
								text={'50%'}
								handleActive={handleActive}
								active={active['50%']}
							/>
							<div className='custom-tip-container'>
								<FormInput
									defaultVal={'custom'}
									type='number'
									handleInput={handleInput}
									errType='custom'
								/>
							</div>
						</div>
					</div>
				</div>
				<FormInput
					Icon={<BsPersonFill className='icon' />}
					defaultVal={'0'}
					label='Number of people'
					type='number'
					handleInput={handleInput}
					errType='people'
					error={error.people}
					errorMsg={errorMsg}
				/>
			</section>

			<section>
				<div className='output-main-container'>
					<Display text='Tip Amount' value={tipAmount} />
					<Display text='Total' value={total} />
					<div className='reset-btn-container'>
						<button className={'reset-btn'} onClick={() => handlReset()}>
							Reset
						</button>
					</div>
				</div>
			</section>
		</>
	);
};

export default TipCalculator;
