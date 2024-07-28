import React, { useState } from 'react';

const UserForm = (props) => {
  const [firstName, setFirstName] = useState('');
  const [firstNameError, setFirstNameError] = useState('');
  const [lastName, setLastName] = useState('');
  const [lastNameError, setLastNameError] = useState('');
  const [email, setEmail] = useState('');
  const [emailError, setEmailError] = useState('');
  const [password, setPassword] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [confirmPasswordError, setConfirmPasswordError] = useState('');

  const handleFirstName = (e) => {
    const value = e.target.value;
    setFirstName(value);
    if (value.length < 2) {
      setFirstNameError('First name must be at least 2 characters');
    } else {
      setFirstNameError('');
    }
  };

  const handleLastName = (e) => {
    const value = e.target.value;
    setLastName(value);
    if (value.length < 2) {
      setLastNameError('Last name must be at least 2 characters');
    } else {
      setLastNameError('');
    }
  };

  const handleEmail = (e) => {
    const value = e.target.value;
    setEmail(value);
    if (e.target.value.length < 5) {
      setEmailError('Email must be at least 5 characters');
    } else {
      setEmailError('');
    }
  };

  const handlePassword = (e) => {
    const value = e.target.value;
    setPassword(value);
    if (e.target.value.length < 8) {
      setPasswordError('Password must be at least 8 characters');
    } else {
      setPasswordError('');
    }
  };

  const handleConfirmPassword = (e) => {
    const value = e.target.value;
    setConfirmPassword(value);
    if (value !== password) {
      setConfirmPasswordError('Passwords do not match');
    } else {
      setConfirmPasswordError('');
    }
  };

  return (
    <form>
      <div>
        <label>First Name</label>
        <input type="text" value={firstName} onChange={handleFirstName} />
        {firstNameError && <p style={{ color: 'red' }}>{firstNameError}</p>}
      </div>
      
      <div>
        <label>Last Name</label>
        <input type="text" value={lastName} onChange={handleLastName} />
        {lastNameError && <p style={{ color: 'red' }}>{lastNameError}</p>}
      </div>
      
      <div>
        <label>Email</label>
        <input type="email" value={email} onChange={handleEmail} />
        {emailError && <p style={{ color: 'red' }}>{emailError}</p>}
      </div>
      
      <div>
        <label>Password</label>
        <input type="password" value={password} onChange={handlePassword} />
        {passwordError && <p style={{ color: 'red' }}>{passwordError}</p>}
      </div>
      
      <div>
        <label>Confirm Password</label>
        <input type="password" value={confirmPassword} onChange={handleConfirmPassword} />
        {confirmPasswordError && <p style={{ color: 'red' }}>{confirmPasswordError}</p>}
      </div>
      
      <button type="submit">Submit</button>
    </form>
  );
};

export default UserForm;