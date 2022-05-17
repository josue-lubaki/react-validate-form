import useMyInput from '../hooks/use-my-input';

const isEmail = (value) => value.trim().toLowerCase().match(EMAIL_REGEX);
const isNotEmpty = (value) => value.trim() !== '';
const EMAIL_REGEX =
	/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

const BasicForm = () => {
	const {
		value: enteredFirstName,
		isValid: firstNameIsValid,
		hasError: firstNameHasError,
		valueChangeHandler: firstNameChangeHandler,
		inputBlurHandler: firstNameBlurHandler,
		reset: resetFirstNameInput,
	} = useMyInput(isNotEmpty);

	const {
		value: enteredLastName,
		isValid: lastNameIsValid,
		hasError: lastNameHasError,
		valueChangeHandler: lastNameChangeHandler,
		inputBlurHandler: lastNameBlurHandler,
		reset: resetLastNameInput,
	} = useMyInput(isNotEmpty);

	const {
		value: enteredEmail,
		isValid: emailIsValid,
		hasError: emailHasError,
		valueChangeHandler: emailChangeHandler,
		inputBlurHandler: emailBlurHandler,
		reset: resetEmailInput,
	} = useMyInput(isNotEmpty && isEmail);

	let formValid;

	if (firstNameIsValid && lastNameIsValid && emailIsValid) {
		formValid = true;
	}

	const submitHandler = (event) => {
		event.preventDefault();

		if (!formValid) {
			return;
		}

		alert(
			`First Name : ${enteredFirstName} \nLast Name : ${enteredLastName} \nEmail : ${enteredEmail}`
		);

		resetFirstNameInput();
		resetLastNameInput();
		resetEmailInput();
	};

	const firstNameInputClasses = firstNameHasError
		? 'form-control invalid'
		: 'form-control';

	const lastNameInputClasses = lastNameHasError
		? 'form-control invalid'
		: 'form-control';

	const emailInputClasses = emailHasError
		? 'form-control invalid'
		: 'form-control';

	return (
		<form onSubmit={submitHandler}>
			<div className='control-group'>
				<div className={firstNameInputClasses}>
					<label htmlFor='fname'>First Name</label>
					<input
						type='text'
						id='fname'
						onChange={firstNameChangeHandler}
						onBlur={firstNameBlurHandler}
						value={enteredFirstName}
					/>
					{firstNameHasError && (
						<p className='error-text'>Please enter a valid First Name</p>
					)}
				</div>
				<div className={lastNameInputClasses}>
					<label htmlFor='lname'>Last Name</label>
					<input
						type='text'
						id='lname'
						onChange={lastNameChangeHandler}
						onBlur={lastNameBlurHandler}
						value={enteredLastName}
					/>
					{lastNameHasError && (
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
