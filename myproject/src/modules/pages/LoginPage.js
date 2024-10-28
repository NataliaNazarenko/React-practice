import { useState } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import { AuthContext } from '../../context/AuthContext';

const LoginPage = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();
  const contactsList = JSON.parse(localStorage.getItem('contacts')) || [];
  const getContactsList = useSelector((state) => state.contacts.contacts);

  const { setIsAuthorized } = useContext(AuthContext);
  const isAuthenticated = useSelector((state) => state.auth?.isAuthenticated || false);

  const handleLogin = (e) => {
    e.preventDefault();

    // Перевірка на коректність імейлу
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(email)) {
      setError('Введіть коректний імейл');
      return;
    }

    if (username.trim() === '') {
      setError('Введіть ім’я користувача');
      return;
    }

    // Якщо ім'я та імейл коректні
    setIsAuthorized(true);
    navigate('/contacts'); // Переадресація на сторінку contacts після логіну
    localStorage.setItem('username', username);
    localStorage.setItem('email', email);
    localStorage.setItem('contacts', JSON.stringify(contactsList));
  };

  const onFinish = () => {
    localStorage.setItem('contacts', JSON.stringify(contactsList));
    setIsAuthorized(true);
    navigate('/contacts'); // Переадресація на сторінку contacts після завершення реєстрації
  };

  return (
    <div>
      <h2>Login</h2>
      <form onSubmit={handleLogin}>
        {error && <p style={{ color: 'red' }}>{error}</p>}
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
          Email:
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </label>
        <br />
        <button type="submit">Login</button>
        <button type="button" onClick={onFinish}>Finish Registration</button>
        <p>Don't have an account? <a href="/register">Register</a></p>
      </form>
    </div>
  );
};

export default LoginPage;