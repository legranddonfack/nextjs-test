import Head from 'next/head';
import styles from '../styles/Home.module.css';
import useUser from '../lib/useUser';
import fetchJson from '../lib/fetchJson';
import { useRouter } from 'next/router';
import Button from '../components/Button';

function Home() {
  const router = useRouter();
  const { user, mutateUser } = useUser({ redirectTo: '/login' });
  if (!user || user.isLoggedIn === false)
    return (
      <div>
        <span>Loading...</span>
      </div>
    );

  const onLogout = async (e) => {
    e.preventDefault();
    mutateUser(await fetchJson('api/logout', { method: 'POST' }), false);
    router.push('/login');
  };
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to <a href="https://nextjs.org">Next.js!</a>
        </h1>

        <div>{JSON.stringify(user, null, 2)}</div>

        <br />
        <Button onClick={onLogout}>Logout</Button>

        <div className={styles.grid}>
          <a href="https://nextjs.org/docs" className={styles.card}>
            <h3>Documentation &rarr;</h3>
            <p>Find in-depth information about Next.js features and PPP.</p>
          </a>

          <a href="https://nextjs.org/learn" className={styles.card}>
            <h3>Learn &rarr;</h3>
            <p>Learn about Next.js in an interactive course with quizzes!</p>
          </a>

          <a
            href="https://github.com/vercel/next.js/tree/master/examples"
            className={styles.card}
          >
            <h3>Examples &rarr;</h3>
            <p>Discover and deploy boilerplate example Next.js projects.</p>
          </a>

          <a
            href="https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            className={styles.card}
          >
            <h3>Deploy &rarr;</h3>
            <p>
              Instantly deploy your Next.js site to a public URL with Vercel.
            </p>
          </a>
        </div>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
        </a>
      </footer>
    </div>
  );
}
export default Home;
