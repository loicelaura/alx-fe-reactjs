import React from 'react';

function Login({ onLogin }) {
  const handleLogin = () => {
    onLogin();
  };

  return (
    <div>
      <h2>Login</h2>
      <button onClick={handleLogin}>Login</button>
    </div>
  );
}

export default Login;