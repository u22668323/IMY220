import React, { useState } from 'react';

function SignUpForm() {
  const [signUpData, setSignUpData] = useState({ username: '', email: '', password: '' });
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (e) => {
    setSignUpData({ ...signUpData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!/\d/.test(signUpData.username)) {
      setErrorMessage('Username must contain at least one number.');
    } else {
      setErrorMessage('');
      console.log('Sign-up data:', signUpData);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="signup-form">
      <h2>Sign Up</h2>
      <input
        type="text"
        name="username"
        placeholder="Username"
        value={signUpData.username}
        onChange={handleChange}
      />
      <input
        type="email"
        name="email"
        placeholder="Email"
        value={signUpData.email}
        onChange={handleChange}
      />
      <input
        type="password"
        name="password"
        placeholder="Password"
        value={signUpData.password}
        onChange={handleChange}
      />
      <button type="submit">Sign Up</button>
      {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}
    </form>
  );
}

export default SignUpForm;
