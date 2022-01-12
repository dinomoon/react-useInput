import { useState } from 'react';

/**
 *
 * @param {function} validate - validate function
 */

const useInput = (validate) => {
  const [value, setValue] = useState('');
  const [touched, setTouched] = useState(false);

  const isValid = validate(value);
  const isError = touched && !isValid;

  const changeHandler = (event) => {
    setValue(event.target.value);
  };

  const blurHandler = () => {
    setTouched(true);
  };

  const reset = () => {
    setValue('');
    setTouched(false);
  };

  return {
    value,
    isError,
    changeHandler,
    blurHandler,
    reset,
  };
};

export default useInput;
