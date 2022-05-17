import useMyInput from '../hooks/use-my-input';

const EMAIL_REGEX =
	/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

const BasicForm = () => {
	const {
		value: enteredFname,
		isValid: fNameIsValid,
		hasError: fNameHasError,
		valueChangeHandler: fNameChangeHandler,
		inputBlurHandler: fNameBlurHandler,
		reset: resetFnameInput,
	} = useMyInput((value) => value.trim() !== '');

	const {
		value: enteredLname,
		isValid: lNameIsValid,
		hasError: lNameHasError,
		valueChangeHandler: lNameChangeHandler,
		inputBlurHandler: lNameBlurHandler,
		reset: resetLnameInput,
	} = useMyInput((value) => value.trim() !== '');

	const {
		value: enteredEmail,
		isValid: emailIsValid,
		hasError: emailHasError,
		valueChangeHandler: emailChangeHandler,
		inputBlurHandler: emailBlurHandler,
		reset: resetEmailInput,
	} = useMyInput((value) => value.trim().toLowerCase().match(EMAIL_REGEX));

	let formValid;

	if (fNameIsValid && lNameIsValid && emailIsValid) {
		formValid = true;
	}

	const formSubmissionHandler = (event) => {
		event.preventDefault();

		if (!formValid) {
			return;
		}

		alert(
			`First Name : ${enteredFname} \nLast Name : ${enteredLname} \nEmail : ${enteredEmail}`
		);

		resetFnameInput();
		resetLnameInput();
		resetEmailInput();
	};

	const fNameInputClasses = fNameHasError
		? 'form-control invalid'
		: 'form-control';

	const lNameInputClasses = lNameHasError
		? 'form-control invalid'
		: 'form-control';

	const emailInputClasses = emailHasError
		? 'form-control invalid'
		: 'form-control';

	return (
		<form onSubmit={formSubmissionHandler}>
			<div className='control-group'>
				<div className={fNameInputClasses}>
					<label htmlFor='fname'>First Name</label>
					<input
						type='text'
						id='fname'
						onChange={fNameChangeHandler}
						onBlur={fNameBlurHandler}
						value={enteredFname}
					/>
					{fNameHasError && (
						<p className='error-text'>Please enter a valid First Name</p>
					)}
				</div>
				<div className={lNameInputClasses}>
					<label htmlFor='lname'>Last Name</label>
					<input
						type='text'
						id='lname'
						onChange={lNameChangeHandler}
						onBlur={lNameBlurHandler}
						value={enteredLname}
					/>
					{lNameHasError && (
						<p className='error-text'>Please enter a valid Last Name</p>
					)}
				</div>
			</div>
			<div className={emailInputClasses}>
				<label htmlFor='name'>E-Mail Address</label>
				<input
					type='email'
					id='email'
					onChange={emailChangeHandler}
					onBlur={emailBlurHandler}
					value={enteredEmail}
				/>
				{emailHasError && (
					<p className='error-text'>Please enter a valid email</p>
				)}
			</div>
			<div className='form-actions'>
				<button disabled={!formValid}>Submit</button>
			</div>
		</form>
	);
};

export default BasicForm;
