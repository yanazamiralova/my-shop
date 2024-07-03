import React, { useState } from 'react';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import Cookies from 'js-cookie';
import { setToken } from './store';
import { useRouter } from 'next/router';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();
  const router = useRouter();

  const handleLogin = async (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    try {
      // Логирование данных для отладки
      console.log('Sending login request with data:', { username, password });

      const { data } = await axios.post('https://fakestoreapi.com/auth/login', {
        username,
        password,
      });

      // Логирование данных ответа
      console.log('Login response data:', data);

      Cookies.set('token', data.token);
      dispatch(setToken(data.token));

      // Переход на главную страницу после успешного входа
      router.push('/');
    } catch (error) {
      console.error('Login failed', error);
      // Логирование ошибки
      if (axios.isAxiosError(error)) {
        console.error('Response data:', error.response?.data);
      }
    }
  };

  return (
    <div className="form-wrapper">
      <h2>Авторизация</h2>
      <form onSubmit={handleLogin}>
        <div>
          <label>Имя пользователя</label>
          <input
            className='form-item'
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Пароль</label>
          <input
            className='form-item'
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <div className='button-panel'>
        <button className='button' type="submit">Вход</button>
        </div>
      </form>
    </div>
  );
};
//eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOjIsI…E0NH0.xS9oQieoQMrstEv0hJDsr3ypZFhGjstFaRwH2KQ3KHM  
export default Login;
