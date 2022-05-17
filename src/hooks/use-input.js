import { useState } from 'react';

const useInput = (validateValueFn) => {
	const [enteredValue, setEnteredValue] = useState('');
	const [enteredValueTouched, setEnteredValueTouched] = useState(false);

	const valueIsValid = validateValueFn(enteredValue);
	const hasError = !valueIsValid && enteredValueTouched;

	const valueChangeHandler = (event) => {
		setEnteredValue(event.target.value);
	};

	const valueBlurHandler = () => {
		setEnteredValueTouched(true);
	};

	const reset = () => {
		setEnteredValue('');
		setEnteredValueTouched(false);
	};

	return {
		value: enteredValue,
		isValid: valueIsValid,
		hasError: hasError,
		valueChangeHandler,
		valueBlurHandler,
		reset,
	};
};

export default useInput;
