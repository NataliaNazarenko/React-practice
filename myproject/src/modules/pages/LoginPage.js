import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const LoginPage = ({ setIsAuthorized }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    // Простий приклад авторизації
    if (username === 'admin' && password === '1234') {
      setIsAuthorized(true);
      navigate('/'); // Переадресація на головну сторінку після логіну
    } else {
      alert('Невірний логін або пароль');
    }
  };

  return (
    <div>
      <h2>Login</h2>
      <form onSubmit={handleLogin}>
        <label>
          Username:
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </label>
        <br />
        <label>
          Password:
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </label>
        <br />
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default LoginPage;