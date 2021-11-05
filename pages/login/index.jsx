import React, { useState } from 'react';
import Link from 'next/link';
import fetchJson from '../../lib/fetchJson';
import useUser from '../../lib/useUser';
import './login.module.css';
import TextBox from '../../components/TextBox';
import Button from '../../components/Button';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [token, setToken] = useState('');

  const { mutateUser } = useUser({
    redirectTo: '/',
    redirectIfFound: true,
  });

  const [errorMsg, setErrorMsg] = useState();

  const onLogin = async (e) => {
    e.preventDefault();
    setLoading(true);
    const credentials = {
      username: email,
      password,
    };
    try {
      mutateUser(
        await fetchJson('api/login', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(credentials),
        })
      );
    } catch (error) {
      console.error('Unexpected error:', error);
      setErrorMsg(error.data.message);
    }
  };

  return (
    <div>
      Hey! Welcome back
      <TextBox
        type="text"
        name="email"
        label="Email"
        value={email}
        placeholder="Your email address"
        onChange={(e) => setEmail(e.target.value)}
      />
      <TextBox
        type="password"
        name="password"
        label="Password"
        value={password}
        placeholder="Your password"
        onChange={(e) => setPassword(e.target.value)}
      />
      {errorMsg && <span>{errorMsg}</span>}
      <Button onClick={onLogin} loading={loading}>
        Login
      </Button>
      <span>
        Don't have an account?
        <Link href="/register">
          <a>Register</a>
        </Link>
      </span>
    </div>
  );
}
export default Login;
