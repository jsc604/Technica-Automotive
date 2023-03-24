import styles from './page.module.css';
import { Inconsolata } from 'next/font/google';

const inconsolata = Inconsolata({
  weight: '800',
  subsets: ['latin'],
  display: 'swap',
  fallback: ['monospace', 'arial']
});

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.top}>
        <h1 className={`${inconsolata.className} ${styles.typing}`}>
          Welcome to <span style={{color: 'orange'}}>Technica Automotive</span>
        </h1>
        <h1 className={styles.slideUp}>
          Your premier destination for
          <br />
          automotive detailing services
        </h1>
      </div>
    </main>
  );
}
