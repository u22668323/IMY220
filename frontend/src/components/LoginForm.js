import React, { useState } from 'react';

function LoginForm() {
  const [loginData, setLoginData] = useState({ email: '', password: '' });
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (e) => {
    setLoginData({ ...loginData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!loginData.email.includes('@')) {
      setErrorMessage('Please include "@" in your email.');
    } else {
      setErrorMessage('');
      console.log('Login data:', loginData);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="login-form">
      <h2>Login</h2>
      <input
        type="email"
        name="email"
        placeholder="Email"
        value={loginData.email}
        onChange={handleChange}
      />
      <input
        type="password"
        name="password"
        placeholder="Password"
        value={loginData.password}
        onChange={handleChange}
      />
      <button type="submit">Login</button>
      {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}
    </form>
  );
}

export default LoginForm;
