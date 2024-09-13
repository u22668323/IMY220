import React from 'react';
import LoginForm from '../components/LoginForm';
import SignUpForm from '../components/SignUpForm';

function SplashPage ()  {
  return (
    <div className="splash-page">
      <h1>Welcome to Music App</h1>
      <div className="auth-forms">
        <LoginForm />
        <SignUpForm />
      </div>
    </div>
  );
};

export default SplashPage;

