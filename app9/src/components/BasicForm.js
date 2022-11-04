import useInput from "../hooks/use-input";

const BasicForm = (props) => {
  const {
    value: enteredFirstName,
    isValid: firstNameIsValid,
    hasError: firstNameHasError,
    isTouchedHandler: firstNameTouched,
    valueChangeHandler: firstNameChange,
    reset: firstNameReset,
  } = useInput((value) => value.trim() !== "");

  const {
    value: enteredLastName,
    isValid: LastNameIsValid,
    hasError: LastNameHasError,
    isTouchedHandler: lastNameTouched,
    valueChangeHandler: lastNameChange,
    reset: lastNameReset,
  } = useInput((value) => value.trim() !== "");

  const {
    value: enteredEmail,
    isValid: emailIsValid,
    hasError: emailHasError,
    isTouchedHandler: emailTouched,
    valueChangeHandler: emailChange,
    reset: emailReset,
  } = useInput((value) =>
    value
      .toLowerCase()
      .match(
        /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/
      )
  );

  const firstNameClasses = firstNameHasError
    ? "form-control invalid"
    : "form-control";

  const lastNameClasses = firstNameHasError
    ? "form-control invalid"
    : "form-control";

  const emailClasses = firstNameHasError
    ? "form-control invalid"
    : "form-control";

  let formValid = false;
  if ((firstNameIsValid, LastNameIsValid, emailIsValid)) {
    formValid = true;
  }

  const submitHandler = (event) => {
    event.preventDefault();
    if (!formValid) {
      return;
    }
    emailReset();
    firstNameReset();
    lastNameReset();
  };
  return (
    <form onSubmit={submitHandler}>
      <div className="control-group">
        <div className={firstNameClasses}>
          <label htmlFor="first-name">First Name</label>
          <input
            value={enteredFirstName}
            onBlur={firstNameTouched}
            onChange={firstNameChange}
            type="text"
            id="first-name"
          />
          {firstNameHasError && (
            <p className="error-text">First name must not be empty.</p>
          )}
        </div>
        <div className={lastNameClasses}>
          <label htmlFor="last-name">Last Name</label>
          <input
            value={enteredLastName}
            onBlur={lastNameTouched}
            onChange={lastNameChange}
            type="text"
            id="last-name"
          />
          {LastNameHasError && (
            <p className="error-text">Last name must not be empty.</p>
          )}
        </div>
      </div>
      <div className={emailClasses}>
        <label htmlFor="email">E-Mail Address</label>
        <input
          value={enteredEmail}
          onBlur={emailTouched}
          onChange={emailChange}
          type="text"
          id="email"
        />
        {emailHasError && <p className="error-text">Email is incorrect.</p>}
      </div>
      <div className="form-actions">
        <button disabled={!formValid}>Submit</button>
      </div>
    </form>
  );
};

export default BasicForm;
