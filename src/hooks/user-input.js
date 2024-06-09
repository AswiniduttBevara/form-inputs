import { useState } from "react";

const UserInput = (validateInput) => {
    const [valueEntered, setValueEntered] = useState('');
    const[inputTouched, setInputTouched] = useState(false);

    const isValid = validateInput(valueEntered);
    const hasError = inputTouched && !isValid;

    const inputChangeHandler = (event) => {
        setValueEntered(event.target.value);
    }

    const inputBlurHandler = (event) => {
        setInputTouched(true);
    }

    const reset = () => {
        setValueEntered('');
        setInputTouched(false);
    }

    return {
                value : valueEntered, 
                hasError, 
                isInputValid:isValid, 
                inputTouched, 
                inputChangeHandler, 
                inputBlurHandler, 
                reset
    }
}

export default UserInput;