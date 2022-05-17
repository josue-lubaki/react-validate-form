import { useState } from 'react';

const useMyInput = (validateValueFn) => {
	// states
	const [enteredValue, setEnteredValue] = useState('');
	const [valueIsTouched, setIsValueIsTouched] = useState(false);

	// conditional validate
	const valueIsValid = validateValueFn(enteredValue);
	const valueIsNotValid = !valueIsValid && valueIsTouched;

	const valueChangeHandler = (event) => {
		setEnteredValue(event.target.value);
	};

	const inputBlurHandler = () => {
		setIsValueIsTouched(true);
	};

	// reset input
	const reset = () => {
		setEnteredValue('');
		setIsValueIsTouched(false);
	};

	return {
		value: enteredValue,
		isValid: valueIsValid,
		hasError: valueIsNotValid,
		valueChangeHandler,
		inputBlurHandler,
		reset,
	};
};

export default useMyInput;
