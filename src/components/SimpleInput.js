import { useState, useRef, useEffect } from 'react';

const SimpleInput = (props) => {
	const nameInputRef = useRef();
	const [enteredName, setEnteredName] = useState('');
	const [enteredNameIsvalid, setEnteredNameIsvalid] = useState(true);
	const [enteredNameTouched, setEnteredNameTouched] = useState(false);

	useEffect(() => {
		if (enteredNameIsvalid && enteredNameTouched) {
			console.log('Input name is valid');
		}
	}, [enteredNameIsvalid, enteredNameTouched]);

	const nameInputChangeHandler = (event) => {
		setEnteredName(event.target.value);
	};

	const formSubmissionHandler = (event) => {
		event.preventDefault();

		// supposed to be touched before submission
		setEnteredNameTouched(true);

		if (enteredName.trim() === '') {
			setEnteredNameIsvalid(false);
			return;
		}

		setEnteredNameIsvalid(true);
		console.log(enteredName);
		const enteredValue = nameInputRef.current.value;
		console.log(enteredValue);

		setEnteredName('');
	};

	const nameInputIsInvalid = !enteredNameIsvalid && enteredNameTouched;

	const nameInputClasses = nameInputIsInvalid
		? 'form-control invalid'
		: 'form-control';

	return (
		<form onSubmit={formSubmissionHandler}>
			<div className={nameInputClasses}>
				<label htmlFor='name'>Your Name</label>
				<input
					ref={nameInputRef}
					type='text'
					id='name'
					onChange={nameInputChangeHandler}
					value={enteredName}
				/>
				{nameInputIsInvalid && (
					<p className='error-text'>name must not be empty</p>
				)}
			</div>
			<div className='form-actions'>
				<button>Submit</button>
			</div>
		</form>
	);
};

export default SimpleInput;
