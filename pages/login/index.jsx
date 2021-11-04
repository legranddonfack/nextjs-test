import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import './login.module.css';
import TextBox from '../../components/TextBox';
import Button from '../../components/Button';

function Login({ ctx }) {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [token, setToken] = useState('');

  useEffect(() => {
    const accessToken = localStorage.getItem('accessTokens');
    setToken(accessToken);
  }, [token]);

  const onLogin = () => {
    // call login api
    const credentials = {
      email,
      password,
    };
    setLoading(true);
  };
  if (token) router.replace('/');
  return (
    <div>
      Hey! Welcome back
      <TextBox
        type="text"
        name="email"
        value={email}
        placeholder="Your email address"
        onChange={(e) => setEmail(e.target.value)}
      />
      <TextBox
        type="password"
        name="password"
        value={password}
        placeholder="Your password"
        onChange={(e) => setPassword(e.target.value)}
      />
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
Login.getInitialProps = (ctx) => {
  if (ctx.res) {
    console.log('res ', ctx.res);
  }
  return {};
};
export default Login;
