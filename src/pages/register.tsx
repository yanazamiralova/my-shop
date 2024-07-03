import React, { useState } from 'react';
import axios, { AxiosError } from 'axios';
import { useDispatch } from 'react-redux';
import Cookies from 'js-cookie';
import { setToken, setUser } from './store';
import { useRouter } from 'next/router';

const Register = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState(''); // добавим email для регистрации
  const dispatch = useDispatch();
  const router = useRouter();

  const handleRegister = async (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    try {
      const { data } = await axios.post('https://fakestoreapi.com/users', {
        username,
        password,
        email,
      });
      Cookies.set('token', data.token);
      dispatch(setToken(data.token));
      const userResponse = await axios.get('https://fakestoreapi.com/auth/user', {
        headers: {
          Authorization: `Bearer ${data.token}`,
        },
      });
      dispatch(setUser(userResponse.data));
      router.push('/');
    } catch (error) {
      console.error('Registration failed', error);
      if ((error as AxiosError).response) {
        console.error('Response data:', (error as AxiosError).response?.data);
      }
    }
  };

  return (
    <div className="register-container">
      <h2>Register</h2>
      <form onSubmit={handleRegister}>
        <div>
          <label>Username</label>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Email</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Password</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit">Register</button>
      </form>
    </div>
  );
};

export default Register;
