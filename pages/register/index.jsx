import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import useUser from '../../lib/useUser';
import Button from '../../components/Button/Button';
import TextBox from '../../components/TextBox';

function Register() {
  const [firstName, setFirstname] = useState('');
  const [lastName, setLastname] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [loading, setLoading] = useState(false);

  useUser({
    redirectTo: '/',
    redirectIfFound: true,
  });

  const onContinue = async (e) => {
    e.preventDefault();
    const user = {
      firstName,
      lastName,
      email,
      password,
    };
    setLoading(true);
  };

  return (
    <>
      <span>Register</span>

      <TextBox
        type="text"
        value={firstName}
        name="firstName"
        onChange={(e) => setFirstname(e.target.value)}
      />

      <TextBox
        type="text"
        value={lastName}
        name="lastName"
        onChange={(e) => setLastname(e.target.value)}
      />

      <TextBox
        type="email"
        name="email"
        value={email}
        placeholder="Your email address"
        onChange={(e) => setEmail(e.target.value)}
      />

      <TextBox
        type="password"
        value={password}
        name="password"
        onChange={(e) => setPassword(e.target.value)}
      />

      <TextBox
        type="password"
        value={confirmPassword}
        name="firstName"
        onChange={(e) => setConfirmPassword(e.target.value)}
      />

      <Button onClick={onContinue} loading={loading}>
        Continue
      </Button>

      <span>
        Already have an account?
        <Link href="/login">
          <a>Login</a>
        </Link>
      </span>
    </>
  );
}
export default Register;
