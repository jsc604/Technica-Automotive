import Image from 'next/image';
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
      <div className={`${styles.mid}`}>
        <div className={styles.right}>
          <h1 className={styles.line}>
            Expert Care and Protection
          </h1>
          <p>
            Experience the unparalleled attention to detail and craftsmanship that sets us apart from the rest.
            Through our comprehensive range of services, from paint correction to
            interior detailing and protective coatings, we ensure that every aspect
            of your ride receives the meticulous care it warrants.
            Trust us to rejuvenate your ride and give it the care and protection it deserves.
          </p>
        </div>
        <div className={styles.imageContainer}>
          <Image
            className={styles.left}
            src="https://images.unsplash.com/photo-1650049837038-821920beb2f8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2834&q=80"
            alt="Sample Unsplash Image"
            width={1470}
            height={980}
            layout='responsive'
          />
        </div>
      </div>
    </main>
  );
}
