import { useState, useEffect } from 'react';

const useTipCalculator = () => {
	const [billInp, setBillInp] = useState(0);
	const [pplInp, setPplInp] = useState(0);
	const [custom, setCustom] = useState(0);
	const [active, setActive] = useState({
		'5%': false,
		'10%': false,
		'15%': false,
		'25%': false,
		'50%': false,
	});
	const [lastActive, setLastActive] = useState(null);
	const [error, setError] = useState({
		bill: false,
		people: false,
	});
	const errorMsg = "Can't be zero";
	const [tipAmount, setTipAmount] = useState(0);
	const [total, setTotal] = useState(0);

	useEffect(() => {
		handleOutput();
	}, [billInp, pplInp, custom, active]);

	const handlReset = () => {
		setBillInp(0);
		setPplInp(0);
		setActive({
			'5%': false,
			'10%': false,
			'15%': false,
			'25%': false,
			'50%': false,
		});
		setCustom(0);
		setError({
			bill: false,
			people: false,
		});
		setTipAmount(0);
		setTotal(0);
	};

	const handleOutput = () => {
		// check if bill is 0 return if 0
		// check if people are 0 return if 0
		if (billInp === 0 || pplInp === 0) {
			return;
		}
		// check if custom input has value (Use that value then)
		setTotal(parseFloat(billInp) / parseFloat(pplInp));

		if (custom) {
			setTipAmount(
				(parseFloat(billInp) / parseFloat(pplInp)) * (parseFloat(custom) / 100)
			);
		} else {
			Object.keys(active).forEach(function (key) {
				if (active[key]) {
					var percent = key.substring(0, key.length - 1);
					setTipAmount(
						(parseFloat(billInp) / parseFloat(pplInp)) *
							(parseFloat(percent) / 100)
					);
				}
			});
		}
		// if not check btn values (use the btn values)
	};

	/**
	 * Sets input states and activates error messages
	 *
	 * @param {bill | people} type
	 * @param {input value} val
	 */
	const handleInput = (type, val) => {
		if (val === '0') {
			setError({
				...error,
				[`${type}`]: true,
			});
		} else {
			setError({
				...error,
				[`${type}`]: false,
			});
		}

		switch (type) {
			case 'bill':
				setBillInp(val);
				break;
			case 'people':
				setPplInp(val);
				break;
			case 'custom':
				setCustom(val);
				break;
			default:
				break;
		}
	};

	/**
	 *  Toogles active state on tip buttons
	 * @param {Key value} btn
	 */
	const handleActive = (btn) => {
		if (lastActive === null) {
			setActive({
				...active,
				[`${btn}`]: true,
			});
		} else {
			setActive({
				...active,
				[`${btn}`]: true,
				[`${lastActive}`]: false,
			});
		}
		setLastActive(btn);
	};

	return {
		handleActive: handleActive,
		handleInput: handleInput,
		active: active,
		errorMsg: errorMsg,
		error: error,
		total: total,
		tipAmount: tipAmount,
		handlReset: handlReset,
	};
};

export default useTipCalculator;
