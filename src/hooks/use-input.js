import { useState } from 'react';

const useInput = (validateValueFn) => {
	const [enteredValue, setEnteredValue] = useState('');
	const [valueTouched, setValueTouched] = useState(false);

	const valueIsValid = validateValueFn(enteredValue);
	const hasError = !valueIsValid && valueTouched;

	const valueChangeHandler = (event) => {
		setEnteredValue(event.target.value);
	};

	const inputBlurHandler = () => {
		setValueTouched(true);
	};

	const reset = () => {
		setEnteredValue('');
		setValueTouched(false);
	};

	return {
		value: enteredValue,
		isValid: valueIsValid,
		hasError: hasError,
		valueChangeHandler,
		inputBlurHandler,
		reset,
	};
};

export default useInput;
