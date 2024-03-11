import React, { useState, useEffect } from 'react';

const YourComponent = () => {
  const [val, setVal] = useState({
    email: ''
  });
  const [error, setError] = useState({});

  function handleChange(e) {
    setVal({ ...val, [e.target.name]: e.target.value });
  }

  function handleSubmit(e) {
    e.preventDefault();
    setError(validateInput(val));
  }

  function validateInput(data) {
    const errors = {};

    if (!data.email) {
      errors.email = 'Email is required';
    } else if (!isValidEmail(data.email)) {
      errors.email = 'Invalid email address';
    }

    return errors;
  }

  function isValidEmail(email) {
    // Use a regular expression to check if the entered value is a valid email address
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }

  useEffect(() => {
    if (Object.keys(error).length === 0 && val.email !== '') {
      alert('Form Submitted');
    }
  }, [error]);

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Email or Username:
        <input
          type="text"
          name="email"
          value={val.email}
          onChange={handleChange}
        />
      </label>
      {error.email && <div style={{ color: 'red' }}>{error.email}</div>}
      <button type="submit">Submit</button>
    </form>
  );
};

export default YourComponent;



