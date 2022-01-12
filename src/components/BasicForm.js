import useInput from '../hooks/useInput';

const BasicForm = (props) => {
  const {
    value: firstName,
    isError: firstNameIsError,
    changeHandler: fnChangeHandler,
    blurHandler: fnBlurHandler,
    reset: resetFirstName,
  } = useInput((value) => value.trim() !== '');

  const submitHandler = (e) => {
    e.preventDefault();

    if (firstNameIsError) {
      return;
    }

    resetFirstName();
  };

  return (
    <form onSubmit={submitHandler}>
      <div className='control-group'>
        <div className='form-control'>
          <label htmlFor='name'>First Name</label>
          <input
            type='text'
            id='name'
            value={firstName}
            onChange={fnChangeHandler}
            onBlur={fnBlurHandler}
          />
          {firstNameIsError && (
            <p className='error-text'>Name must not be value.</p>
          )}
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
