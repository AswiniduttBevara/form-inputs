// import { useState } from "react";

import UserInput from "../hooks/user-input";
const SimpleInput = (props) => {

  function validationNameInput (value){
    return value.trim() !== '';
  }
  function validationEmailInput (value){
    return value.trim().includes('@');
  }

  const {value:enteredName,
        //  inputTouched:inputNameTouched,
         hasError:inputNameHasError,
         isInputValid:isInputNameValid,
         inputChangeHandler:inputNameChangeHandler,
         inputBlurHandler:inputNameBlurHandler,
         reset:resetInputNameAndInputNameTouchStates } = UserInput(validationNameInput);
  
   const {value:enteredEmail,
        //  inputTouched:inputNameTouched,
         hasError:inputEmailHasError,
         isInputValid:isInputEmailValid,
         inputChangeHandler:inputEmailChangeHandler,
         inputBlurHandler:inputEmailBlurHandler,
         reset:resetInputEmailAndInputEmailTouchStates } = UserInput(validationEmailInput);
         
         
        
  // const [enteredName, setEnteredName] = useState('');
  // const[enteredNameTouched, setEnteredNameTouched] = useState(false);
  
  // const [enteredEmail, setEnteredEmail] = useState('');
  // const[enteredEmailTouched, setEnteredEmailTouched] = useState(false);

  // const enteredNameValid = enteredName.trim() !== '';
  // const inputNameControl = enteredNameTouched && !enteredNameValid

  // const enteredEmailValid = enteredEmail.trim().includes('@');
  // const inputEmailControl = enteredEmailTouched && !enteredEmailValid;

  let formIsValid = false;

  if(isInputNameValid && isInputEmailValid){
    formIsValid = true;
  }

  // const inputNameChangeHandler = (event) => {
  //   setEnteredName(event.target.value);
  // }
  // const inputEmailChangeHandler = (event) => {
  //   setEnteredEmail(event.target.value);
  // }

  // const inputNameBlurHandler = (event) => {
  //   setEnteredNameTouched(true);
  // }
  // const inputEmailBlurHandler = (event) => {
  //   setEnteredEmailTouched(true);
  // }

  const formSubmitHandler =(event) => {
    event.preventDefault();
    // setEnteredNameTouched(true);
    // setEnteredEmailTouched(true);

    if(!isInputNameValid || !isInputEmailValid){
      return;
    }

    // setEnteredName('');
    // setEnteredNameTouched(false);
    resetInputNameAndInputNameTouchStates();

    // setEnteredEmail('');
    // setEnteredEmailTouched(false);
    resetInputEmailAndInputEmailTouchStates();
  }

  const nameInputClasses = inputNameHasError ? 'form-control invalid' : 'form-control'
  const emailInputClasses = inputEmailHasError ? 'form-control invalid' : 'form-control'

  return (
    <form onSubmit={formSubmitHandler}>
      <div className={nameInputClasses}>
        <label htmlFor='name'>Your Name</label>
        <input onBlur={inputNameBlurHandler} type='text' id='name' onChange={inputNameChangeHandler} value={enteredName} />
        {inputNameHasError && <p className="error-text">Name must not be empty</p>}
      </div>
      <div className={emailInputClasses}>
        <label htmlFor='email'>Email</label>
        <input onBlur={inputEmailBlurHandler} type='text' id='email' onChange={inputEmailChangeHandler} value={enteredEmail} />
        {inputEmailHasError && <p className="error-text">Email must not be empty</p>}
      </div>
      <div className="form-actions">
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
