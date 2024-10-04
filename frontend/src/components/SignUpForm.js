import React, { useState } from 'react';

function SignUpForm() {
  const [signUpData, setSignUpData] = useState({ username: '', email: '', password: '' });
  const [errorMessage, setErrorMessage] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

  const handleChange = (e) => {
    setSignUpData({ ...signUpData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('/api/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(signUpData),
      });

      const data = await response.json();
      
      if (response.ok) {
        setSuccessMessage('Sign-up successful!');
        setErrorMessage('');
        console.log('User created:', data.user); // You can store this in state or context
      } else {
        setErrorMessage(data.message || 'Sign-up failed');
        setSuccessMessage('');
      }
    } catch (error) {
      setErrorMessage('Error during sign-up');
      setSuccessMessage('');
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
      {successMessage && <p style={{ color: 'green' }}>{successMessage}</p>}
    </form>
  );
}

export default SignUpForm;
