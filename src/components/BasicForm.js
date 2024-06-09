import { useState } from "react";

const BasicForm = (props) => {
  const [userLastName, setUserLastName] = useState('');
  const [userLastNameValid, setUserLastNameValid] = useState(false);
  const [userEmail, setUserEmail] = useState('');
  const [userEmailValid, setUserEmailValid] = useState(false);


  const [userFirstName, setUserFirstName] = useState('');
  const [userFirstNameValid, setUserFirstNameValid] = useState(false);
  const [userFirstNameTouched, setUserFirstNameTouched] = useState(false);


  const firstNameValidation = userFirstNameTouched && !userFirstNameValid;
  console.log('firstNameValidation=>',firstNameValidation);

  const inputFirstNameChangeHandler = (event) => {
    setUserFirstName(event.target.value)
    setUserFirstNameTouched(true);
    if(userFirstName.trim() !== ''){
      setUserFirstNameValid(true);
    }
    // setUserFirstNameValid(true);
  }
  const inputFirstNameBlurHandler = () => {
    setUserFirstNameTouched(true);
    if(userFirstName.trim() === ''){
      setUserFirstNameValid(false);
    }
    if(userFirstName.trim() !== ''){
      setUserFirstNameValid(true);
    }
  }

  const submitHandler = (event) => {
    event.preventDefault();
    setUserFirstNameTouched(true);
    if(userFirstName.trim() === ''){
      return
    }
    setUserFirstNameValid(true);
    console.log(userFirstName, userLastName, userEmail);

    setUserFirstName('');
    setUserFirstNameTouched(false);
    setUserFirstNameValid(false);
  }

  const inputFormControl = firstNameValidation ? 'form-control invalid' : 'form-control'; 
  console.log('===>',inputFormControl);
  return (
    <form onSubmit={submitHandler}>
      <div className='control-group'>
        <div className={inputFormControl}>
          <label htmlFor='name'>First Name</label>
          <input onChange={inputFirstNameChangeHandler} onBlur={inputFirstNameBlurHandler} value={userFirstName} type='text' id='name' />
          {firstNameValidation && <p>user first name should not be empty</p>}
        </div>
        <div className='form-control'>
          <label htmlFor='name'>Last Name</label>
          <input type='text' id='name' />
        </div>
      </div>
      <div className='form-control'>
        <label htmlFor='name'>E-Mail Address</label>
        <input type='text' id='name' />
      </div>
      <div className='form-actions'>
        <button>Submit</button>
      </div>
    </form>
  );
};

export default BasicForm;
